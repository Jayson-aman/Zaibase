import { useEffect, useState } from 'react';

// 重いデータ（教科書・図解・公式集など、合わせて100MB超）を、使う画面でだけ読みこむための小さな仕組み。
//
// なぜ必要か：
//   Web 版は、画面に関係なく全データを最初に落としていた（スマホ回線では数分）。
//   `import()` で読みこめば、Metro がその部分を別ファイルに分け、必要になるまで取りに行かない。
//
// 守ること：
//   ・`import()` の引数は文字列リテラルで書く（変数だと Metro が分割できない）。
//   ・同じモジュールをどこかで静的に `import { 値 }` していると、分割されず本体に入ってしまう
//     （型だけの `import type` は消えるので構わない）。`npm run audit` の「重いデータを静的 import」が見張る。
//   ・失敗したら次の load()/use() で再試行する。
export type LazyModule<T> = {
  load: () => Promise<T>;
  /** 読みこみ済みなら同期で返す（未読みこみなら null） */
  peek: () => T | null;
  /** React フック。読みこみ中は null、済んだらモジュールを返す */
  use: () => T | null;
};

export function createLazyModule<T>(importer: () => Promise<T>): LazyModule<T> {
  let cache: T | null = null;
  let inFlight: Promise<T> | null = null;
  const listeners = new Set<(m: T) => void>();

  const load = (): Promise<T> => {
    if (cache) return Promise.resolve(cache);
    if (inFlight) return inFlight;
    inFlight = importer()
      .then((m) => {
        cache = m;
        inFlight = null;
        listeners.forEach((fn) => fn(m));
        listeners.clear();
        return m;
      })
      .catch((err) => {
        inFlight = null;
        throw err;
      });
    return inFlight;
  };

  const use = (): T | null => {
    const [mod, setMod] = useState<T | null>(cache);
    useEffect(() => {
      if (cache) {
        setMod(cache);
        return;
      }
      let alive = true;
      const fn = (m: T) => {
        if (alive) setMod(m);
      };
      listeners.add(fn);
      load().catch(() => {});
      return () => {
        alive = false;
        listeners.delete(fn);
      };
    }, []);
    return mod;
  };

  return { load, peek: () => cache, use };
}
