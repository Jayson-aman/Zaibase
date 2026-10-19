import type { DiagramFigure } from '../figures';
import type { SubjectKey } from '../questions-meta';

export type TeikiGrade = 'j1' | 'j2' | 'j3';

/** 一問一答（その場で確かめる）。理由まで書く。 */
export type TeikiCheck = { q: string; a: string; why: string };

/**
 * 定期テスト・通常の単元テスト向けの「教科書の延長」1単元。
 * 入試対策の単元（data/lessons-*）とは別枠。学校の教科書にそった順で、テストに出る所を噛み砕く。
 */
export type TeikiUnit = {
  /** 例：'j1-sansu-01'（学年-教科-通し番号。重複させない） */
  id: string;
  grade: TeikiGrade;
  subject: SubjectKey;
  title: string;
  /** 教科書のどこにあたるか（例：「正負の数」「光と音」）。一覧で見出しにする */
  chapter: string;
  /** 一言でいうと（1〜2文。初めて聞く人向け） */
  gist: string;
  /** 噛み砕いた解説。見出しつきの節。本文では **強調** が使える（赤い太字で出る） */
  sections: { heading: string; body: string }[];
  /** テストによく出るポイント（箇条書き。3〜6個） */
  testPoints: string[];
  /** 動く図解（8枚以上）。diagram-kit の show() で作る */
  figure: DiagramFigure;
  /** 確認の一問一答（3問以上。why に理由まで） */
  checks: TeikiCheck[];
};

export const TEIKI_MIN_SLIDES = 8;
