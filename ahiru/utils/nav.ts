// 「戻る」。URLを直接開いた（Webで /lesson/… を直打ちした等）ときは戻る先の履歴が無く、
// router.back() だと何も起きない。そのときはホームへ行く。
export function goBack(router: { canGoBack: () => boolean; back: () => void; replace: (href: any) => void }): void {
  if (router.canGoBack()) router.back();
  else router.replace('/');
}
