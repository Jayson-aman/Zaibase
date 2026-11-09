import type { DiagramElement } from './figures';
import { show, C, FILL, bx, lb, ar, ci, ln, dots, cover, band, fresh, pg } from './diagram-kit';

type Figure = ReturnType<typeof show>;
export const lessonFigsU120J1Kokugo: Record<string, Figure> = {
  u120j1k_001_a: show([
    { note: "1　音と訓", add: [lb(160, 60, "山＝さん・やま", 24, C.ink, 'middle', true)] },
    { note: "2", add: [lb(160, 100, "音読み", 20, C.red, 'middle', true)] },
  ], "動かして、1つずつ たしかめよう"),
  u120j1k_002_a: show([
    { note: "1　音と訓", add: [lb(160, 60, "山＝さん・やま", 24, C.ink, 'middle', true)] },
    { note: "2", add: [lb(160, 100, "音読み", 20, C.red, 'middle', true)] },
  ], "動かして、1つずつ たしかめよう"),
};
