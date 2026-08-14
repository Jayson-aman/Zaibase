// クローズドβ用の先行開放フック。
//
// 【重要】本番リリースにあたり、この抜け道は無効化してある。
// 有効なままだと、Web版（公開URL）でブラウザのlocalStorageに
// `@ahiru/beta_v1` = '1' を書き込むだけで、Pro/Maxの有料コンテンツが
// 全部無料で開いてしまう（コードはバンドルに含まれるため誰でも読める）。
//
// 再びβ配布をする場合は、端末のストレージ値ではなく
// サーバー側で検証できる仕組み（Firestoreの許可リスト等）に置き換えること。

const BETA_ENABLED = false;

export function useBetaAccess() {
  return {
    hasAccess: false,
    loading: false,
    unlock: async (_code: string): Promise<boolean> => false,
  };
}

export { BETA_ENABLED };
