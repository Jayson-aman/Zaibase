import type { TeikiGrade } from '../teiki/types';
import type { SubjectKey } from '../questions-meta';

/**
 * 定期テストの「基本中の基本」問題。1学年×1教科で50問。
 * 学期末テストの範囲に合わせて term（どの学期末テストに出るか）を付ける。
 */
export type TeikiQuestion = {
  /** 例：'j1-sansu-q01'（学年-教科-q通し番号2桁。重複させない） */
  id: string;
  grade: TeikiGrade;
  subject: SubjectKey;
  /** 1＝1学期末 / 2＝2学期末 / 3＝学年末テストの範囲（教科書の順） */
  term: 1 | 2 | 3;
  /** 教科書のどの単元か（例：「正の数・負の数」） */
  topic: string;
  question: string;
  /** 正解（短く。単位つきでよい）。選択肢があるときは選択肢の文字列と完全に同じにする */
  answer: string;
  /** 選択肢（任意。あれば4つまで） */
  choices?: string[];
  /** 解説：なぜその答えか（理由まで）。**強調** が使える */
  explanation: string;
};

export const TEIKI_Q_PER_CELL = 50;
