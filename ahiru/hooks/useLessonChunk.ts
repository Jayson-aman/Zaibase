import { useEffect, useState } from 'react';
import type { Lesson } from '../data/lesson-types';
import { lessonChunks } from '../data/lessons-chunks-lazy';

/**
 * 「教科-受験種別」1つぶんの単元（order の昇順）。読みこみ中は null。
 * key が null のあいだは何も読みこまない。key がファイルの一覧に無いときは空配列を返す。
 * 教科を切りかえた直後に、前の教科の一覧が一瞬出ないよう、読みこんだ key とセットで持つ。
 */
export function useLessonChunk(key: string | null): Lesson[] | null {
  const lazy = key != null ? lessonChunks[key] : undefined;
  const [loaded, setLoaded] = useState<{ key: string; lessons: Lesson[] } | null>(() =>
    key != null && lazy?.peek() ? { key, lessons: lazy.peek() as Lesson[] } : null,
  );

  useEffect(() => {
    if (key == null) return;
    if (!lazy) { setLoaded({ key, lessons: [] }); return; }
    const cached = lazy.peek();
    if (cached) { setLoaded({ key, lessons: cached }); return; }
    let alive = true;
    lazy.load().then((ls) => { if (alive) setLoaded({ key, lessons: ls }); }).catch(() => {
      // 失敗したら、次に開いたとき再試行する（読みこみ中のままにして、0件の画面を出さない）
    });
    return () => { alive = false; };
  }, [key, lazy]);

  if (key == null) return null;
  const cached = lazy?.peek();
  if (cached) return cached;
  return loaded?.key === key ? loaded.lessons : null;
}
