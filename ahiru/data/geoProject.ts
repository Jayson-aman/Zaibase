// 緯度経度 → 日本地図（data/japanPrefectures.ts と同じ viewBox 0 0 300 420）の座標へ投影する。
// 定数は scripts/build-japan-map.mjs と同じ手順で GeoJSON から計算したもの（本土4島の枠に合わせた投影）。
// 都市・平野・海の位置を「緯度経度」で書けるようにして、地図とずれないようにするための道具。

const KX = 0.788010753606722; // cos(38°)：経度方向の縮み
const MIN_X = 101.32919370423902;
const MIN_Y = -45.52648029074888;
const SCALE = 18.987935410629195;
const OFF_X = 20;
const OFF_Y = 36.03099788821331;

/** 緯度(lat)・経度(lon) → viewBox座標 [x, y] */
export function project(lat: number, lon: number): [number, number] {
  const px = lon * KX;
  const py = -lat;
  return [(px - MIN_X) * SCALE + OFF_X, (py - MIN_Y) * SCALE + OFF_Y];
}
