export type EikenLevel = '2kyu' | '3kyu' | '4kyu';

export type EikenCategory =
  | 'vocabulary'
  | 'grammar'
  | 'dialogue'
  | 'reading'
  | 'usage'
  | 'idiom'
  | 'listening';

export type EikenQuestion = {
  id: string;
  level: EikenLevel;
  category: EikenCategory;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation?: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  /** English audio script read aloud via TTS for listening questions (not shown until after answering). */
  audioScript?: string;
};

import { eikenQuestions4kyu } from './eiken_questions_4kyu';
import { eikenQuestions4kyu2 } from './eiken_questions_4kyu2';
import { eikenQuestions3kyu } from './eiken_questions_3kyu';
import { eikenQuestions3kyu2 } from './eiken_questions_3kyu2';
import { eikenQuestions2kyu } from './eiken_questions_2kyu';
import { eikenQuestions2kyu2 } from './eiken_questions_2kyu2';
import { eikenQuestions4kyu3 } from './eiken_questions_4kyu3';
import { eikenQuestions3kyu3 } from './eiken_questions_3kyu3';
import { eikenQuestions2kyu3 } from './eiken_questions_2kyu3';
import { eikenQuestionsListening } from './eiken_questions_listening';
import { eikenQuestions4kyuIdiom } from './eiken_questions_4kyu_idiom';
import { eikenQuestions3kyuIdiom } from './eiken_questions_3kyu_idiom';
import { eikenQuestions2kyuIdiom } from './eiken_questions_2kyu_idiom';
import { eikenQuestions4kyu4 } from './eiken_questions_4kyu4';
import { eikenQuestions4kyu5 } from './eiken_questions_4kyu5';
import { eikenQuestions4kyu6 } from './eiken_questions_4kyu6';
import { eikenQuestions3kyu4 } from './eiken_questions_3kyu4';
import { eikenQuestions3kyu5 } from './eiken_questions_3kyu5';
import { eikenQuestions3kyu6 } from './eiken_questions_3kyu6';
import { eikenQuestions2kyu4 } from './eiken_questions_2kyu4';
import { eikenQuestions2kyu5 } from './eiken_questions_2kyu5';
import { eikenQuestions2kyu6 } from './eiken_questions_2kyu6';
import { eikenQuestions4kyuIdiom2 } from './eiken_questions_4kyu_idiom2';
import { eikenQuestions3kyuIdiom2 } from './eiken_questions_3kyu_idiom2';
import { eikenQuestions2kyuIdiom2 } from './eiken_questions_2kyu_idiom2';
import { eikenQuestionsListening2 } from './eiken_questions_listening2';
import { eikenQuestionsListening3 } from './eiken_questions_listening3';
import { eikenQuestionsListening4 } from './eiken_questions_listening4';
import { eikenQuestionsListening5 } from './eiken_questions_listening5';
import { eikenQuestionsListening6 } from './eiken_questions_listening6';
import { eikenQuestionsListening7 } from './eiken_questions_listening7';
import { eikenQuestionsListening8 } from './eiken_questions_listening8';
// 4級 2倍化バッチ
import { eikenQuestions4kyuVocabX2 } from './eiken_questions_4kyu_vocab_x2';
import { eikenQuestions4kyuVocabX3 } from './eiken_questions_4kyu_vocab_x3';
import { eikenQuestions4kyuGrammarX2 } from './eiken_questions_4kyu_grammar_x2';
import { eikenQuestions4kyuGrammarX3 } from './eiken_questions_4kyu_grammar_x3';
import { eikenQuestions4kyuReadingX2 } from './eiken_questions_4kyu_reading_x2';
import { eikenQuestions4kyuReadingX3 } from './eiken_questions_4kyu_reading_x3';
import { eikenQuestions4kyuDialogueX2 } from './eiken_questions_4kyu_dialogue_x2';
import { eikenQuestions4kyuDialogueX3 } from './eiken_questions_4kyu_dialogue_x3';
import { eikenQuestions4kyuIdiomX3 } from './eiken_questions_4kyu_idiom_x3';
// 3級 2倍化バッチ
import { eikenQuestions3kyuVocabX2 } from './eiken_questions_3kyu_vocab_x2';
import { eikenQuestions3kyuVocabX3 } from './eiken_questions_3kyu_vocab_x3';
import { eikenQuestions3kyuGrammarX2 } from './eiken_questions_3kyu_grammar_x2';
import { eikenQuestions3kyuGrammarX3 } from './eiken_questions_3kyu_grammar_x3';
import { eikenQuestions3kyuReadingX2 } from './eiken_questions_3kyu_reading_x2';
import { eikenQuestions3kyuReadingX3 } from './eiken_questions_3kyu_reading_x3';
import { eikenQuestions3kyuDialogueX2 } from './eiken_questions_3kyu_dialogue_x2';
import { eikenQuestions3kyuDialogueX3 } from './eiken_questions_3kyu_dialogue_x3';
import { eikenQuestions3kyuIdiomX3 } from './eiken_questions_3kyu_idiom_x3';
// 2級 2倍化バッチ
import { eikenQuestions2kyuVocabX2 } from './eiken_questions_2kyu_vocab_x2';
import { eikenQuestions2kyuVocabX3 } from './eiken_questions_2kyu_vocab_x3';
import { eikenQuestions2kyuVocabX4 } from './eiken_questions_2kyu_vocab_x4';
import { eikenQuestions2kyuGrammarX2 } from './eiken_questions_2kyu_grammar_x2';
import { eikenQuestions2kyuGrammarX3 } from './eiken_questions_2kyu_grammar_x3';
import { eikenQuestions2kyuReadingX2 } from './eiken_questions_2kyu_reading_x2';
import { eikenQuestions2kyuReadingX3 } from './eiken_questions_2kyu_reading_x3';
import { eikenQuestions2kyuReadingX4 } from './eiken_questions_2kyu_reading_x4';
import { eikenQuestions2kyuIdiomX3 } from './eiken_questions_2kyu_idiom_x3';
import { eikenQuestions2kyuListeningX2 } from './eiken_questions_2kyu_listening_x2';
// リスニング 2倍化バッチ（各級160問追加）
import { eikenQuestions4kyuListeningX2 } from './eiken_questions_4kyu_listening_x2';
import { eikenQuestions4kyuListeningX3 } from './eiken_questions_4kyu_listening_x3';
import { eikenQuestions3kyuListeningX2 } from './eiken_questions_3kyu_listening_x2';
import { eikenQuestions3kyuListeningX3 } from './eiken_questions_3kyu_listening_x3';
import { eikenQuestions2kyuListeningX3 } from './eiken_questions_2kyu_listening_x3';

export const eikenQuestions: EikenQuestion[] = [
  ...eikenQuestions4kyuListeningX2,
  ...eikenQuestions4kyuListeningX3,
  ...eikenQuestions3kyuListeningX2,
  ...eikenQuestions3kyuListeningX3,
  ...eikenQuestions2kyuListeningX2,
  ...eikenQuestions2kyuListeningX3,
  ...eikenQuestions2kyuVocabX2,
  ...eikenQuestions2kyuVocabX3,
  ...eikenQuestions2kyuVocabX4,
  ...eikenQuestions2kyuGrammarX2,
  ...eikenQuestions2kyuGrammarX3,
  ...eikenQuestions2kyuReadingX2,
  ...eikenQuestions2kyuReadingX3,
  ...eikenQuestions2kyuReadingX4,
  ...eikenQuestions2kyuIdiomX3,
  ...eikenQuestions3kyuVocabX2,
  ...eikenQuestions3kyuVocabX3,
  ...eikenQuestions3kyuGrammarX2,
  ...eikenQuestions3kyuGrammarX3,
  ...eikenQuestions3kyuReadingX2,
  ...eikenQuestions3kyuReadingX3,
  ...eikenQuestions3kyuDialogueX2,
  ...eikenQuestions3kyuDialogueX3,
  ...eikenQuestions3kyuIdiomX3,
  ...eikenQuestions4kyuVocabX2,
  ...eikenQuestions4kyuVocabX3,
  ...eikenQuestions4kyuGrammarX2,
  ...eikenQuestions4kyuGrammarX3,
  ...eikenQuestions4kyuReadingX2,
  ...eikenQuestions4kyuReadingX3,
  ...eikenQuestions4kyuDialogueX2,
  ...eikenQuestions4kyuDialogueX3,
  ...eikenQuestions4kyuIdiomX3,
  ...eikenQuestions4kyu,
  ...eikenQuestions4kyu2,
  ...eikenQuestions4kyu3,
  ...eikenQuestions4kyu4,
  ...eikenQuestions4kyu5,
  ...eikenQuestions4kyu6,
  ...eikenQuestions3kyu,
  ...eikenQuestions3kyu2,
  ...eikenQuestions3kyu3,
  ...eikenQuestions3kyu4,
  ...eikenQuestions3kyu5,
  ...eikenQuestions3kyu6,
  ...eikenQuestions2kyu,
  ...eikenQuestions2kyu2,
  ...eikenQuestions2kyu3,
  ...eikenQuestions2kyu4,
  ...eikenQuestions2kyu5,
  ...eikenQuestions2kyu6,
  ...eikenQuestionsListening,
  ...eikenQuestionsListening2,
  ...eikenQuestionsListening3,
  ...eikenQuestionsListening4,
  ...eikenQuestionsListening5,
  ...eikenQuestionsListening6,
  ...eikenQuestionsListening7,
  ...eikenQuestionsListening8,
  ...eikenQuestions4kyuIdiom,
  ...eikenQuestions4kyuIdiom2,
  ...eikenQuestions3kyuIdiom,
  ...eikenQuestions3kyuIdiom2,
  ...eikenQuestions2kyuIdiom,
  ...eikenQuestions2kyuIdiom2,
];
