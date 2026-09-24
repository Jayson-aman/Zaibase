// 公式集の討論・探求型マンガのレジストリ。LessonSection.mangaId → MangaScript を解決する。
import type { MangaScript } from './manga-types';
import { mangaScriptsKoushikiK3Souji } from './manga-scripts-koushiki-k3souji';
import { mangaScriptsKoushikiK4En1 } from './manga-scripts-koushiki-k4en1';
import { mangaScriptsKoushikiK5En2 } from './manga-scripts-koushiki-k5en2';
import { mangaScriptsKoushikiK6Sanpei } from './manga-scripts-koushiki-k6sanpei';
import { mangaScriptsKoushikiChugaku } from './manga-scripts-koushiki-chugaku';
import { mangaScriptsKoushikiKoko2 } from './manga-scripts-koushiki-koko2';
import { mangaScriptsTokushuzan } from './manga-scripts-tokushuzan';
import { mangaScriptsWariai } from './manga-scripts-wariai';
import { mangaScriptsZukeiHayasa } from './manga-scripts-zukei-hayasa';
import { mangaScriptsKazuIdou } from './manga-scripts-kazu-idou';
import { mangaScriptsKokoMath1 } from './manga-scripts-koko-math1';
import { mangaScriptsKokoMath2 } from './manga-scripts-koko-math2';
import { mangaScriptsChu2_1 } from './manga-scripts-chu2-1';
import { mangaScriptsChu23_2 } from './manga-scripts-chu23-2';
import { mangaScriptsChu3_1 } from './manga-scripts-chu3-1';
import { mangaScriptsKokoRikaKagaku1 } from './manga-scripts-koko-rika-kagaku1';
import { mangaScriptsKokoShakaiKomin1 } from './manga-scripts-koko-shakai-komin1';
import { mangaScriptsKokoKokugo1 } from './manga-scripts-koko-kokugo1';
import { mangaScriptsKokoEigo1 } from './manga-scripts-koko-eigo1';
import { mangaScriptsSansuChugaku1 } from './manga-scripts-sansu-chugaku1';
import { mangaScriptsRikaChugaku1 } from './manga-scripts-rika-chugaku1';
import { mangaScriptsShakaiChugaku1 } from './manga-scripts-shakai-chugaku1';
import { mangaScriptsKokugoChugaku1 } from './manga-scripts-kokugo-chugaku1';
import { mangaScriptsEigoChugaku1 } from './manga-scripts-eigo-chugaku1';
import { mangaScriptsKokoRikaButsuriSeibutsu1 } from './manga-scripts-koko-rika-butsuri-seibutsu1';
import { mangaScriptsKokoShakaiChirishi1 } from './manga-scripts-koko-shakai-chirishi1';
import { mangaScriptsSansuChugaku2 } from './manga-scripts-sansu-chugaku2';
import { mangaScriptsRikaChugaku2 } from './manga-scripts-rika-chugaku2';
import { mangaScriptsShakaiChugaku2 } from './manga-scripts-shakai-chugaku2';
import { mangaScriptsKokugoChugaku2 } from './manga-scripts-kokugo-chugaku2';
import { mangaScriptsEigoChugaku2 } from './manga-scripts-eigo-chugaku2';
import { mangaScriptsKokoMath3 } from './manga-scripts-koko-math3';
import { mangaScriptsKokoRikaButsuriSeibutsu2 } from './manga-scripts-koko-rika-butsuri-seibutsu2';
import { mangaScriptsKokoShakaiChirishi2 } from './manga-scripts-koko-shakai-chirishi2';
import { mangaScriptsKokoKokugo2 } from './manga-scripts-koko-kokugo2';
import { mangaScriptsKokoEigo2 } from './manga-scripts-koko-eigo2';
import { mangaScriptsKokoMath4 } from './manga-scripts-koko-math4';
import { mangaScriptsKokoMath5 } from './manga-scripts-koko-math5';
import { mangaScriptsKokoMath6 } from './manga-scripts-koko-math6';
import { mangaScriptsKokoMath7 } from './manga-scripts-koko-math7';
import { mangaScriptsKokoMath8 } from './manga-scripts-koko-math8';
import { mangaScriptsKokoMath9 } from './manga-scripts-koko-math9';
import { mangaScriptsKokoShakaiKomin2 } from './manga-scripts-koko-shakai-komin2';
import { mangaScriptsKokoRikaKagaku2 } from './manga-scripts-koko-rika-kagaku2';
import { mangaScriptsSansuChugaku3 } from './manga-scripts-sansu-chugaku3';
import { mangaScriptsRikaChugaku3 } from './manga-scripts-rika-chugaku3';
import { mangaScriptsShakaiChugaku3 } from './manga-scripts-shakai-chugaku3';
import { mangaScriptsKokugoChugaku3 } from './manga-scripts-kokugo-chugaku3';
import { mangaScriptsEigoChugaku3 } from './manga-scripts-eigo-chugaku3';
import { mangaScriptsKokoKokugo3 } from './manga-scripts-koko-kokugo3';
import { mangaScriptsKokoKokugo4 } from './manga-scripts-koko-kokugo4';
import { mangaScriptsKokoKokugo5 } from './manga-scripts-koko-kokugo5';
import { mangaScriptsKokoKokugo6 } from './manga-scripts-koko-kokugo6';
import { mangaScriptsKokoKokugo7 } from './manga-scripts-koko-kokugo7';
import { mangaScriptsKokoKokugo8 } from './manga-scripts-koko-kokugo8';
import { mangaScriptsKokoKokugo9 } from './manga-scripts-koko-kokugo9';
import { mangaScriptsKokoEigo3 } from './manga-scripts-koko-eigo3';
import { mangaScriptsKokoEigo4 } from './manga-scripts-koko-eigo4';
import { mangaScriptsKokoEigo5 } from './manga-scripts-koko-eigo5';
import { mangaScriptsKokoEigo6 } from './manga-scripts-koko-eigo6';
import { mangaScriptsKokoEigo7 } from './manga-scripts-koko-eigo7';
import { mangaScriptsKokoEigo8 } from './manga-scripts-koko-eigo8';
import { mangaScriptsKokoEigo9 } from './manga-scripts-koko-eigo9';
import { mangaScriptsKokoRikaButsuriSeibutsu3 } from './manga-scripts-koko-rika-butsuri-seibutsu3';
import { mangaScriptsKokoRikaButsuriSeibutsu4 } from './manga-scripts-koko-rika-butsuri-seibutsu4';
import { mangaScriptsKokoRikaButsuriSeibutsu5 } from './manga-scripts-koko-rika-butsuri-seibutsu5';
import { mangaScriptsKokoRikaButsuriSeibutsu6 } from './manga-scripts-koko-rika-butsuri-seibutsu6';
import { mangaScriptsKokoRikaButsuriSeibutsu7 } from './manga-scripts-koko-rika-butsuri-seibutsu7';
import { mangaScriptsKokoRikaButsuriSeibutsu8 } from './manga-scripts-koko-rika-butsuri-seibutsu8';
import { mangaScriptsKokoRikaButsuriSeibutsu9 } from './manga-scripts-koko-rika-butsuri-seibutsu9';
import { mangaScriptsKokoShakaiChirishi3 } from './manga-scripts-koko-shakai-chirishi3';
import { mangaScriptsKokoShakaiChirishi4 } from './manga-scripts-koko-shakai-chirishi4';
import { mangaScriptsKokoShakaiChirishi5 } from './manga-scripts-koko-shakai-chirishi5';
import { mangaScriptsKokoShakaiChirishi6 } from './manga-scripts-koko-shakai-chirishi6';
import { mangaScriptsKokoShakaiChirishi7 } from './manga-scripts-koko-shakai-chirishi7';
import { mangaScriptsKokoShakaiChirishi8 } from './manga-scripts-koko-shakai-chirishi8';
import { mangaScriptsKokoShakaiChirishi9 } from './manga-scripts-koko-shakai-chirishi9';
import { mangaScriptsKokoShakaiKomin3 } from './manga-scripts-koko-shakai-komin3';
import { mangaScriptsKokoShakaiKomin4 } from './manga-scripts-koko-shakai-komin4';
import { mangaScriptsKokoShakaiKomin5 } from './manga-scripts-koko-shakai-komin5';
import { mangaScriptsKokoShakaiKomin6 } from './manga-scripts-koko-shakai-komin6';
import { mangaScriptsKokoShakaiKomin7 } from './manga-scripts-koko-shakai-komin7';
import { mangaScriptsKokoShakaiKomin8 } from './manga-scripts-koko-shakai-komin8';
import { mangaScriptsKokoShakaiKomin9 } from './manga-scripts-koko-shakai-komin9';
import { mangaScriptsKokoRikaKagaku3 } from './manga-scripts-koko-rika-kagaku3';
import { mangaScriptsKokoRikaKagaku4 } from './manga-scripts-koko-rika-kagaku4';
import { mangaScriptsKokoRikaKagaku5 } from './manga-scripts-koko-rika-kagaku5';
import { mangaScriptsKokoRikaKagaku6 } from './manga-scripts-koko-rika-kagaku6';
import { mangaScriptsKokoRikaKagaku7 } from './manga-scripts-koko-rika-kagaku7';
import { mangaScriptsKokoRikaKagaku8 } from './manga-scripts-koko-rika-kagaku8';
import { mangaScriptsKokoRikaKagaku9 } from './manga-scripts-koko-rika-kagaku9';
import { mangaScriptsSansuChugaku4 } from './manga-scripts-sansu-chugaku4';
import { mangaScriptsSansuChugaku5 } from './manga-scripts-sansu-chugaku5';
import { mangaScriptsSansuChugaku6 } from './manga-scripts-sansu-chugaku6';
import { mangaScriptsSansuChugaku7 } from './manga-scripts-sansu-chugaku7';
import { mangaScriptsSansuChugaku8 } from './manga-scripts-sansu-chugaku8';
import { mangaScriptsSansuChugaku9 } from './manga-scripts-sansu-chugaku9';
import { mangaScriptsSansuChugaku10 } from './manga-scripts-sansu-chugaku10';
import { mangaScriptsRikaChugaku4 } from './manga-scripts-rika-chugaku4';
import { mangaScriptsRikaChugaku5 } from './manga-scripts-rika-chugaku5';
import { mangaScriptsRikaChugaku6 } from './manga-scripts-rika-chugaku6';
import { mangaScriptsRikaChugaku7 } from './manga-scripts-rika-chugaku7';
import { mangaScriptsRikaChugaku8 } from './manga-scripts-rika-chugaku8';
import { mangaScriptsRikaChugaku9 } from './manga-scripts-rika-chugaku9';
import { mangaScriptsRikaChugaku10 } from './manga-scripts-rika-chugaku10';
import { mangaScriptsShakaiChugaku4 } from './manga-scripts-shakai-chugaku4';
import { mangaScriptsShakaiChugaku5 } from './manga-scripts-shakai-chugaku5';
import { mangaScriptsShakaiChugaku6 } from './manga-scripts-shakai-chugaku6';
import { mangaScriptsShakaiChugaku7 } from './manga-scripts-shakai-chugaku7';
import { mangaScriptsShakaiChugaku8 } from './manga-scripts-shakai-chugaku8';
import { mangaScriptsShakaiChugaku9 } from './manga-scripts-shakai-chugaku9';
import { mangaScriptsShakaiChugaku10 } from './manga-scripts-shakai-chugaku10';
import { mangaScriptsKokugoChugaku10 } from './manga-scripts-kokugo-chugaku10';
import { mangaScriptsKokoMath10 } from './manga-scripts-koko-math10';
import { mangaScriptsEigoChugaku10 } from './manga-scripts-eigo-chugaku10';
import { mangaScriptsKokoEigo10 } from './manga-scripts-koko-eigo10';
import { mangaScriptsKokoRikaButsuriSeibutsu10 } from './manga-scripts-koko-rika-butsuri-seibutsu10';
import { mangaScriptsKokoShakaiChirishi10 } from './manga-scripts-koko-shakai-chirishi10';
import { mangaScriptsKokoRikaKagaku10 } from './manga-scripts-koko-rika-kagaku10';
import { mangaScriptsKokoShakaiKomin10 } from './manga-scripts-koko-shakai-komin10';
import { mangaScriptsKokoKokugo10 } from './manga-scripts-koko-kokugo10';
import { mangaScriptsRikaChugaku11 } from './manga-scripts-rika-chugaku11';
import { mangaScriptsSansuChugaku11 } from './manga-scripts-sansu-chugaku11';
import { mangaScriptsKokugoChugaku11 } from './manga-scripts-kokugo-chugaku11';
import { mangaScriptsShakaiChugaku11 } from './manga-scripts-shakai-chugaku11';
import { mangaScriptsEigoChugaku11 } from './manga-scripts-eigo-chugaku11';
import { mangaScriptsKokoMath11 } from './manga-scripts-koko-math11';
import { mangaScriptsKokoRikaButsuriSeibutsu11 } from './manga-scripts-koko-rika-butsuri-seibutsu11';
import { mangaScriptsKokoRikaKagaku11 } from './manga-scripts-koko-rika-kagaku11';
import { mangaScriptsKokoEigo11 } from './manga-scripts-koko-eigo11';
import { mangaScriptsKokoShakaiChirishi11 } from './manga-scripts-koko-shakai-chirishi11';
import { mangaScriptsKokoKokugo11 } from './manga-scripts-koko-kokugo11';
import { mangaScriptsKokoShakaiKomin11 } from './manga-scripts-koko-shakai-komin11';
import { mangaScriptsSansuChugaku12 } from './manga-scripts-sansu-chugaku12';
import { mangaScriptsRikaChugaku12 } from './manga-scripts-rika-chugaku12';
import { mangaScriptsShakaiChugaku12 } from './manga-scripts-shakai-chugaku12';
import { mangaScriptsKokugoChugaku12 } from './manga-scripts-kokugo-chugaku12';
import { mangaScriptsEigoChugaku12 } from './manga-scripts-eigo-chugaku12';
import { mangaScriptsKokoMath12 } from './manga-scripts-koko-math12';
import { mangaScriptsKokoRikaButsuriSeibutsu12 } from './manga-scripts-koko-rika-butsuri-seibutsu12';
import { mangaScriptsKokoRikaKagaku12 } from './manga-scripts-koko-rika-kagaku12';
import { mangaScriptsKokoEigo12 } from './manga-scripts-koko-eigo12';
import { mangaScriptsKokoShakaiChirishi12 } from './manga-scripts-koko-shakai-chirishi12';
import { mangaScriptsKokoKokugo12 } from './manga-scripts-koko-kokugo12';
import { mangaScriptsKokoShakaiKomin12 } from './manga-scripts-koko-shakai-komin12';
import { mangaScriptsSansuChugaku13 } from './manga-scripts-sansu-chugaku13';
import { mangaScriptsRikaChugaku13 } from './manga-scripts-rika-chugaku13';
import { mangaScriptsShakaiChugaku13 } from './manga-scripts-shakai-chugaku13';
import { mangaScriptsKokugoChugaku13 } from './manga-scripts-kokugo-chugaku13';
import { mangaScriptsEigoChugaku13 } from './manga-scripts-eigo-chugaku13';
import { mangaScriptsKokoMath13 } from './manga-scripts-koko-math13';
import { mangaScriptsKokoRikaButsuriSeibutsu13 } from './manga-scripts-koko-rika-butsuri-seibutsu13';
import { mangaScriptsKokoEigo13 } from './manga-scripts-koko-eigo13';
import { mangaScriptsKokoRikaKagaku13 } from './manga-scripts-koko-rika-kagaku13';
import { mangaScriptsKokoShakaiChirishi13 } from './manga-scripts-koko-shakai-chirishi13';
import { mangaScriptsKokoKokugo13 } from './manga-scripts-koko-kokugo13';
import { mangaScriptsKokoShakaiKomin13 } from './manga-scripts-koko-shakai-komin13';
import { mangaScriptsRikaChugaku14 } from './manga-scripts-rika-chugaku14';
import { mangaScriptsSansuChugaku14 } from './manga-scripts-sansu-chugaku14';
import { mangaScriptsShakaiChugaku14 } from './manga-scripts-shakai-chugaku14';
import { mangaScriptsKokugoChugaku14 } from './manga-scripts-kokugo-chugaku14';
import { mangaScriptsEigoChugaku14 } from './manga-scripts-eigo-chugaku14';
import { mangaScriptsKokoMath14 } from './manga-scripts-koko-math14';
import { mangaScriptsKokoRikaButsuriSeibutsu14 } from './manga-scripts-koko-rika-butsuri-seibutsu14';
import { mangaScriptsKokoRikaKagaku14 } from './manga-scripts-koko-rika-kagaku14';
import { mangaScriptsKokoEigo14 } from './manga-scripts-koko-eigo14';
import { mangaScriptsKokoKokugo14 } from './manga-scripts-koko-kokugo14';
import { mangaScriptsKokoShakaiChirishi14 } from './manga-scripts-koko-shakai-chirishi14';
import { mangaScriptsKokoShakaiKomin14 } from './manga-scripts-koko-shakai-komin14';
import { mangaScriptsSansuChugaku15 } from './manga-scripts-sansu-chugaku15';
import { mangaScriptsRikaChugaku15 } from './manga-scripts-rika-chugaku15';
import { mangaScriptsKokugoChugaku15 } from './manga-scripts-kokugo-chugaku15';
import { mangaScriptsShakaiChugaku15 } from './manga-scripts-shakai-chugaku15';
import { mangaScriptsEigoChugaku15 } from './manga-scripts-eigo-chugaku15';
import { mangaScriptsKokoRikaButsuriSeibutsu15 } from './manga-scripts-koko-rika-butsuri-seibutsu15';
import { mangaScriptsKokoMath15 } from './manga-scripts-koko-math15';
import { mangaScriptsKokoRikaKagaku15 } from './manga-scripts-koko-rika-kagaku15';
import { mangaScriptsKokoEigo15 } from './manga-scripts-koko-eigo15';
import { mangaScriptsKokoKokugo15 } from './manga-scripts-koko-kokugo15';
import { mangaScriptsKokoShakaiChirishi15 } from './manga-scripts-koko-shakai-chirishi15';
import { mangaScriptsKokoShakaiKomin15 } from './manga-scripts-koko-shakai-komin15';
import { mangaScriptsSansuChugaku16 } from './manga-scripts-sansu-chugaku16';
import { mangaScriptsRikaChugaku16 } from './manga-scripts-rika-chugaku16';
import { mangaScriptsShakaiChugaku16 } from './manga-scripts-shakai-chugaku16';
import { mangaScriptsKokugoChugaku16 } from './manga-scripts-kokugo-chugaku16';
import { mangaScriptsEigoChugaku16 } from './manga-scripts-eigo-chugaku16';
import { mangaScriptsKokoMath16 } from './manga-scripts-koko-math16';
import { mangaScriptsKokoRikaButsuriSeibutsu16 } from './manga-scripts-koko-rika-butsuri-seibutsu16';
import { mangaScriptsKokoEigo16 } from './manga-scripts-koko-eigo16';
import { mangaScriptsKokoRikaKagaku16 } from './manga-scripts-koko-rika-kagaku16';
import { mangaScriptsKokoKokugo16 } from './manga-scripts-koko-kokugo16';
import { mangaScriptsKokoShakaiChirishi16 } from './manga-scripts-koko-shakai-chirishi16';
import { mangaScriptsKokoShakaiKomin16 } from './manga-scripts-koko-shakai-komin16';
import { mangaScriptsSansuChugaku17 } from './manga-scripts-sansu-chugaku17';
import { mangaScriptsRikaChugaku17 } from './manga-scripts-rika-chugaku17';
import { mangaScriptsShakaiChugaku17 } from './manga-scripts-shakai-chugaku17';
import { mangaScriptsKokugoChugaku17 } from './manga-scripts-kokugo-chugaku17';
import { mangaScriptsEigoChugaku17 } from './manga-scripts-eigo-chugaku17';
import { mangaScriptsKokoMath17 } from './manga-scripts-koko-math17';
import { mangaScriptsKokoRikaButsuriSeibutsu17 } from './manga-scripts-koko-rika-butsuri-seibutsu17';
import { mangaScriptsKokoRikaKagaku17 } from './manga-scripts-koko-rika-kagaku17';
import { mangaScriptsKokoEigo17 } from './manga-scripts-koko-eigo17';
import { mangaScriptsKokoShakaiChirishi17 } from './manga-scripts-koko-shakai-chirishi17';
import { mangaScriptsKokoKokugo17 } from './manga-scripts-koko-kokugo17';
import { mangaScriptsSansuChugaku18 } from './manga-scripts-sansu-chugaku18';
import { mangaScriptsRikaChugaku18 } from './manga-scripts-rika-chugaku18';
import { mangaScriptsShakaiChugaku18 } from './manga-scripts-shakai-chugaku18';
import { mangaScriptsKokugoChugaku18 } from './manga-scripts-kokugo-chugaku18';
import { mangaScriptsEigoChugaku18 } from './manga-scripts-eigo-chugaku18';
import { mangaScriptsKokoMath18 } from './manga-scripts-koko-math18';
import { mangaScriptsKokoRikaButsuriSeibutsu18 } from './manga-scripts-koko-rika-butsuri-seibutsu18';
import { mangaScriptsKokoEigo18 } from './manga-scripts-koko-eigo18';
import { mangaScriptsKokoShakaiChirishi18 } from './manga-scripts-koko-shakai-chirishi18';
import { mangaScriptsKokoKokugo18 } from './manga-scripts-koko-kokugo18';
import { mangaScriptsKokoShakaiKomin18 } from './manga-scripts-koko-shakai-komin18';
import { mangaScriptsSansuChugaku19 } from './manga-scripts-sansu-chugaku19';
import { mangaScriptsRikaChugaku19 } from './manga-scripts-rika-chugaku19';
import { mangaScriptsShakaiChugaku19 } from './manga-scripts-shakai-chugaku19';
import { mangaScriptsKokugoChugaku19 } from './manga-scripts-kokugo-chugaku19';
import { mangaScriptsEigoChugaku19 } from './manga-scripts-eigo-chugaku19';
import { mangaScriptsKokoMath19 } from './manga-scripts-koko-math19';
import { mangaScriptsKokoRikaButsuriSeibutsu19 } from './manga-scripts-koko-rika-butsuri-seibutsu19';
import { mangaScriptsKokoRikaKagaku19 } from './manga-scripts-koko-rika-kagaku19';
import { mangaScriptsKokoEigo19 } from './manga-scripts-koko-eigo19';
import { mangaScriptsKokoShakaiChirishi19 } from './manga-scripts-koko-shakai-chirishi19';
import { mangaScriptsKokoKokugo19 } from './manga-scripts-koko-kokugo19';
import { mangaScriptsKokoShakaiKomin19 } from './manga-scripts-koko-shakai-komin19';
import { mangaScriptsSansuChugaku20 } from './manga-scripts-sansu-chugaku20';
import { mangaScriptsRikaChugaku20 } from './manga-scripts-rika-chugaku20';
import { mangaScriptsShakaiChugaku20 } from './manga-scripts-shakai-chugaku20';
import { mangaScriptsKokugoChugaku20 } from './manga-scripts-kokugo-chugaku20';
import { mangaScriptsEigoChugaku20 } from './manga-scripts-eigo-chugaku20';
import { mangaScriptsKokoMath20 } from './manga-scripts-koko-math20';
import { mangaScriptsKokoRikaButsuriSeibutsu20 } from './manga-scripts-koko-rika-butsuri-seibutsu20';
import { mangaScriptsKokoRikaKagaku20 } from './manga-scripts-koko-rika-kagaku20';
import { mangaScriptsKokoEigo20 } from './manga-scripts-koko-eigo20';
import { mangaScriptsKokoShakaiChirishi20 } from './manga-scripts-koko-shakai-chirishi20';
import { mangaScriptsKokoKokugo20 } from './manga-scripts-koko-kokugo20';
import { mangaScriptsSansuChugaku21 } from './manga-scripts-sansu-chugaku21';
import { mangaScriptsRikaChugaku21 } from './manga-scripts-rika-chugaku21';
import { mangaScriptsShakaiChugaku21 } from './manga-scripts-shakai-chugaku21';
import { mangaScriptsKokugoChugaku21 } from './manga-scripts-kokugo-chugaku21';
import { mangaScriptsEigoChugaku21 } from './manga-scripts-eigo-chugaku21';
import { mangaScriptsKokoMath21 } from './manga-scripts-koko-math21';
import { mangaScriptsKokoRikaButsuriSeibutsu21 } from './manga-scripts-koko-rika-butsuri-seibutsu21';
import { mangaScriptsKokoRikaKagaku21 } from './manga-scripts-koko-rika-kagaku21';
import { mangaScriptsKokoEigo21 } from './manga-scripts-koko-eigo21';
import { mangaScriptsKokoShakaiChirishi21 } from './manga-scripts-koko-shakai-chirishi21';
import { mangaScriptsKokoKokugo21 } from './manga-scripts-koko-kokugo21';
import { mangaScriptsKokoShakaiKomin21 } from './manga-scripts-koko-shakai-komin21';
import { mangaScriptsSansuChugaku22 } from './manga-scripts-sansu-chugaku22';
import { mangaScriptsRikaChugaku22 } from './manga-scripts-rika-chugaku22';
import { mangaScriptsShakaiChugaku22 } from './manga-scripts-shakai-chugaku22';
import { mangaScriptsKokugoChugaku22 } from './manga-scripts-kokugo-chugaku22';
import { mangaScriptsEigoChugaku22 } from './manga-scripts-eigo-chugaku22';
import { mangaScriptsKokoMath22 } from './manga-scripts-koko-math22';
import { mangaScriptsKokoRikaButsuriSeibutsu22 } from './manga-scripts-koko-rika-butsuri-seibutsu22';
import { mangaScriptsKokoRikaKagaku22 } from './manga-scripts-koko-rika-kagaku22';
import { mangaScriptsKokoEigo22 } from './manga-scripts-koko-eigo22';
import { mangaScriptsKokoShakaiChirishi22 } from './manga-scripts-koko-shakai-chirishi22';
import { mangaScriptsKokoKokugo22 } from './manga-scripts-koko-kokugo22';
import { mangaScriptsSansuChugaku23 } from './manga-scripts-sansu-chugaku23';
import { mangaScriptsRikaChugaku23 } from './manga-scripts-rika-chugaku23';
import { mangaScriptsShakaiChugaku23 } from './manga-scripts-shakai-chugaku23';
import { mangaScriptsKokugoChugaku23 } from './manga-scripts-kokugo-chugaku23';
import { mangaScriptsEigoChugaku23 } from './manga-scripts-eigo-chugaku23';
import { mangaScriptsKokoMath23 } from './manga-scripts-koko-math23';
import { mangaScriptsKokoRikaButsuriSeibutsu23 } from './manga-scripts-koko-rika-butsuri-seibutsu23';
import { mangaScriptsKokoEigo23 } from './manga-scripts-koko-eigo23';
import { mangaScriptsKokoShakaiChirishi23 } from './manga-scripts-koko-shakai-chirishi23';
import { mangaScriptsKokoKokugo23 } from './manga-scripts-koko-kokugo23';
import { mangaScriptsSansuChugaku24 } from './manga-scripts-sansu-chugaku24';
import { mangaScriptsRikaChugaku24 } from './manga-scripts-rika-chugaku24';
import { mangaScriptsShakaiChugaku24 } from './manga-scripts-shakai-chugaku24';
import { mangaScriptsKokugoChugaku24 } from './manga-scripts-kokugo-chugaku24';
import { mangaScriptsEigoChugaku24 } from './manga-scripts-eigo-chugaku24';
import { mangaScriptsKokoMath24 } from './manga-scripts-koko-math24';
import { mangaScriptsKokoRikaButsuriSeibutsu24 } from './manga-scripts-koko-rika-butsuri-seibutsu24';
import { mangaScriptsKokoEigo24 } from './manga-scripts-koko-eigo24';
import { mangaScriptsKokugoChugaku4 } from './manga-scripts-kokugo-chugaku4';
import { mangaScriptsKokugoChugaku5 } from './manga-scripts-kokugo-chugaku5';
import { mangaScriptsKokugoChugaku6 } from './manga-scripts-kokugo-chugaku6';
import { mangaScriptsKokugoChugaku7 } from './manga-scripts-kokugo-chugaku7';
import { mangaScriptsKokugoChugaku8 } from './manga-scripts-kokugo-chugaku8';
import { mangaScriptsKokugoChugaku9 } from './manga-scripts-kokugo-chugaku9';
import { mangaScriptsEigoChugaku4 } from './manga-scripts-eigo-chugaku4';
import { mangaScriptsEigoChugaku5 } from './manga-scripts-eigo-chugaku5';
import { mangaScriptsEigoChugaku6 } from './manga-scripts-eigo-chugaku6';
import { mangaScriptsEigoChugaku7 } from './manga-scripts-eigo-chugaku7';
import { mangaScriptsEigoChugaku8 } from './manga-scripts-eigo-chugaku8';
import { mangaScriptsEigoChugaku9 } from './manga-scripts-eigo-chugaku9';

const ALL_MANGA_SCRIPTS: Record<string, MangaScript> = {
  ...mangaScriptsKoushikiK3Souji,
  ...mangaScriptsKoushikiK4En1,
  ...mangaScriptsKoushikiK5En2,
  ...mangaScriptsKoushikiK6Sanpei,
  ...mangaScriptsKoushikiChugaku,
  ...mangaScriptsKoushikiKoko2,
  ...mangaScriptsTokushuzan,
  ...mangaScriptsWariai,
  ...mangaScriptsZukeiHayasa,
  ...mangaScriptsKazuIdou,
  ...mangaScriptsKokoMath1,
  ...mangaScriptsKokoMath2,
  ...mangaScriptsChu2_1,
  ...mangaScriptsChu23_2,
  ...mangaScriptsChu3_1,
  ...mangaScriptsKokoRikaKagaku1,
  ...mangaScriptsKokoShakaiKomin1,
  ...mangaScriptsKokoKokugo1,
  ...mangaScriptsKokoEigo1,
  ...mangaScriptsSansuChugaku1,
  ...mangaScriptsRikaChugaku1,
  ...mangaScriptsShakaiChugaku1,
  ...mangaScriptsKokugoChugaku1,
  ...mangaScriptsEigoChugaku1,
  ...mangaScriptsKokoRikaButsuriSeibutsu1,
  ...mangaScriptsKokoShakaiChirishi1,
  ...mangaScriptsSansuChugaku2,
  ...mangaScriptsRikaChugaku2,
  ...mangaScriptsShakaiChugaku2,
  ...mangaScriptsKokugoChugaku2,
  ...mangaScriptsEigoChugaku2,
  ...mangaScriptsKokoMath3,
  ...mangaScriptsKokoRikaButsuriSeibutsu2,
  ...mangaScriptsKokoShakaiChirishi2,
  ...mangaScriptsKokoKokugo2,
  ...mangaScriptsKokoEigo2,
  ...mangaScriptsKokoMath4,
  ...mangaScriptsKokoMath5,
  ...mangaScriptsKokoMath6,
  ...mangaScriptsKokoMath7,
  ...mangaScriptsKokoMath8,
  ...mangaScriptsKokoMath9,
  ...mangaScriptsKokoShakaiKomin2,
  ...mangaScriptsKokoRikaKagaku2,
  ...mangaScriptsSansuChugaku3,
  ...mangaScriptsRikaChugaku3,
  ...mangaScriptsShakaiChugaku3,
  ...mangaScriptsKokugoChugaku3,
  ...mangaScriptsEigoChugaku3,
  ...mangaScriptsKokoKokugo3,
  ...mangaScriptsKokoKokugo4,
  ...mangaScriptsKokoKokugo5,
  ...mangaScriptsKokoKokugo6,
  ...mangaScriptsKokoKokugo7,
  ...mangaScriptsKokoKokugo8,
  ...mangaScriptsKokoKokugo9,
  ...mangaScriptsKokoEigo3,
  ...mangaScriptsKokoEigo4,
  ...mangaScriptsKokoEigo5,
  ...mangaScriptsKokoEigo6,
  ...mangaScriptsKokoEigo7,
  ...mangaScriptsKokoEigo8,
  ...mangaScriptsKokoEigo9,
  ...mangaScriptsKokoRikaButsuriSeibutsu3,
  ...mangaScriptsKokoRikaButsuriSeibutsu4,
  ...mangaScriptsKokoRikaButsuriSeibutsu5,
  ...mangaScriptsKokoRikaButsuriSeibutsu6,
  ...mangaScriptsKokoRikaButsuriSeibutsu7,
  ...mangaScriptsKokoRikaButsuriSeibutsu8,
  ...mangaScriptsKokoRikaButsuriSeibutsu9,
  ...mangaScriptsKokoShakaiChirishi3,
  ...mangaScriptsKokoShakaiChirishi4,
  ...mangaScriptsKokoShakaiChirishi5,
  ...mangaScriptsKokoShakaiChirishi6,
  ...mangaScriptsKokoShakaiChirishi7,
  ...mangaScriptsKokoShakaiChirishi8,
  ...mangaScriptsKokoShakaiChirishi9,
  ...mangaScriptsKokoShakaiKomin3,
  ...mangaScriptsKokoShakaiKomin4,
  ...mangaScriptsKokoShakaiKomin5,
  ...mangaScriptsKokoShakaiKomin6,
  ...mangaScriptsKokoShakaiKomin7,
  ...mangaScriptsKokoShakaiKomin8,
  ...mangaScriptsKokoShakaiKomin9,
  ...mangaScriptsKokoRikaKagaku3,
  ...mangaScriptsKokoRikaKagaku4,
  ...mangaScriptsKokoRikaKagaku5,
  ...mangaScriptsKokoRikaKagaku6,
  ...mangaScriptsKokoRikaKagaku7,
  ...mangaScriptsKokoRikaKagaku8,
  ...mangaScriptsKokoRikaKagaku9,
  ...mangaScriptsSansuChugaku4,
  ...mangaScriptsSansuChugaku5,
  ...mangaScriptsSansuChugaku6,
  ...mangaScriptsSansuChugaku7,
  ...mangaScriptsSansuChugaku8,
  ...mangaScriptsSansuChugaku9,
  ...mangaScriptsSansuChugaku10,
  ...mangaScriptsRikaChugaku4,
  ...mangaScriptsRikaChugaku5,
  ...mangaScriptsRikaChugaku6,
  ...mangaScriptsRikaChugaku7,
  ...mangaScriptsRikaChugaku8,
  ...mangaScriptsRikaChugaku9,
  ...mangaScriptsRikaChugaku10,
  ...mangaScriptsShakaiChugaku4,
  ...mangaScriptsShakaiChugaku5,
  ...mangaScriptsShakaiChugaku6,
  ...mangaScriptsShakaiChugaku7,
  ...mangaScriptsShakaiChugaku8,
  ...mangaScriptsShakaiChugaku9,
  ...mangaScriptsShakaiChugaku10,
  ...mangaScriptsKokugoChugaku10,
  ...mangaScriptsKokoMath10,
  ...mangaScriptsEigoChugaku10,
  ...mangaScriptsKokoEigo10,
  ...mangaScriptsKokoRikaButsuriSeibutsu10,
  ...mangaScriptsKokoShakaiChirishi10,
  ...mangaScriptsKokoRikaKagaku10,
  ...mangaScriptsKokoShakaiKomin10,
  ...mangaScriptsKokoKokugo10,
  ...mangaScriptsRikaChugaku11,
  ...mangaScriptsSansuChugaku11,
  ...mangaScriptsKokugoChugaku11,
  ...mangaScriptsShakaiChugaku11,
  ...mangaScriptsEigoChugaku11,
  ...mangaScriptsKokoMath11,
  ...mangaScriptsKokoRikaButsuriSeibutsu11,
  ...mangaScriptsKokoRikaKagaku11,
  ...mangaScriptsKokoEigo11,
  ...mangaScriptsKokoShakaiChirishi11,
  ...mangaScriptsKokoKokugo11,
  ...mangaScriptsKokoShakaiKomin11,
  ...mangaScriptsSansuChugaku12,
  ...mangaScriptsRikaChugaku12,
  ...mangaScriptsShakaiChugaku12,
  ...mangaScriptsKokugoChugaku12,
  ...mangaScriptsEigoChugaku12,
  ...mangaScriptsKokoMath12,
  ...mangaScriptsKokoRikaButsuriSeibutsu12,
  ...mangaScriptsKokoRikaKagaku12,
  ...mangaScriptsKokoEigo12,
  ...mangaScriptsKokoShakaiChirishi12,
  ...mangaScriptsKokoKokugo12,
  ...mangaScriptsKokoShakaiKomin12,
  ...mangaScriptsSansuChugaku13,
  ...mangaScriptsRikaChugaku13,
  ...mangaScriptsShakaiChugaku13,
  ...mangaScriptsKokugoChugaku13,
  ...mangaScriptsEigoChugaku13,
  ...mangaScriptsKokoMath13,
  ...mangaScriptsKokoRikaButsuriSeibutsu13,
  ...mangaScriptsKokoEigo13,
  ...mangaScriptsKokoRikaKagaku13,
  ...mangaScriptsKokoShakaiChirishi13,
  ...mangaScriptsKokoKokugo13,
  ...mangaScriptsKokoShakaiKomin13,
  ...mangaScriptsRikaChugaku14,
  ...mangaScriptsSansuChugaku14,
  ...mangaScriptsShakaiChugaku14,
  ...mangaScriptsKokugoChugaku14,
  ...mangaScriptsEigoChugaku14,
  ...mangaScriptsKokoMath14,
  ...mangaScriptsKokoRikaButsuriSeibutsu14,
  ...mangaScriptsKokoRikaKagaku14,
  ...mangaScriptsKokoEigo14,
  ...mangaScriptsKokoKokugo14,
  ...mangaScriptsKokoShakaiChirishi14,
  ...mangaScriptsKokoShakaiKomin14,
  ...mangaScriptsSansuChugaku15,
  ...mangaScriptsRikaChugaku15,
  ...mangaScriptsKokugoChugaku15,
  ...mangaScriptsShakaiChugaku15,
  ...mangaScriptsEigoChugaku15,
  ...mangaScriptsKokoRikaButsuriSeibutsu15,
  ...mangaScriptsKokoMath15,
  ...mangaScriptsKokoRikaKagaku15,
  ...mangaScriptsKokoEigo15,
  ...mangaScriptsKokoKokugo15,
  ...mangaScriptsKokoShakaiChirishi15,
  ...mangaScriptsKokoShakaiKomin15,
  ...mangaScriptsSansuChugaku16,
  ...mangaScriptsRikaChugaku16,
  ...mangaScriptsShakaiChugaku16,
  ...mangaScriptsKokugoChugaku16,
  ...mangaScriptsEigoChugaku16,
  ...mangaScriptsKokoMath16,
  ...mangaScriptsKokoRikaButsuriSeibutsu16,
  ...mangaScriptsKokoEigo16,
  ...mangaScriptsKokoRikaKagaku16,
  ...mangaScriptsKokoKokugo16,
  ...mangaScriptsKokoShakaiChirishi16,
  ...mangaScriptsKokoShakaiKomin16,
  ...mangaScriptsSansuChugaku17,
  ...mangaScriptsRikaChugaku17,
  ...mangaScriptsShakaiChugaku17,
  ...mangaScriptsKokugoChugaku17,
  ...mangaScriptsEigoChugaku17,
  ...mangaScriptsKokoMath17,
  ...mangaScriptsKokoRikaButsuriSeibutsu17,
  ...mangaScriptsKokoRikaKagaku17,
  ...mangaScriptsKokoEigo17,
  ...mangaScriptsKokoShakaiChirishi17,
  ...mangaScriptsKokoKokugo17,
  ...mangaScriptsSansuChugaku18,
  ...mangaScriptsRikaChugaku18,
  ...mangaScriptsShakaiChugaku18,
  ...mangaScriptsKokugoChugaku18,
  ...mangaScriptsEigoChugaku18,
  ...mangaScriptsKokoMath18,
  ...mangaScriptsKokoRikaButsuriSeibutsu18,
  ...mangaScriptsKokoEigo18,
  ...mangaScriptsKokoShakaiChirishi18,
  ...mangaScriptsKokoKokugo18,
  ...mangaScriptsKokoShakaiKomin18,
  ...mangaScriptsSansuChugaku19,
  ...mangaScriptsRikaChugaku19,
  ...mangaScriptsShakaiChugaku19,
  ...mangaScriptsKokugoChugaku19,
  ...mangaScriptsEigoChugaku19,
  ...mangaScriptsKokoMath19,
  ...mangaScriptsKokoRikaButsuriSeibutsu19,
  ...mangaScriptsKokoRikaKagaku19,
  ...mangaScriptsKokoEigo19,
  ...mangaScriptsKokoShakaiChirishi19,
  ...mangaScriptsKokoKokugo19,
  ...mangaScriptsKokoShakaiKomin19,
  ...mangaScriptsSansuChugaku20,
  ...mangaScriptsRikaChugaku20,
  ...mangaScriptsShakaiChugaku20,
  ...mangaScriptsKokugoChugaku20,
  ...mangaScriptsEigoChugaku20,
  ...mangaScriptsKokoMath20,
  ...mangaScriptsKokoRikaButsuriSeibutsu20,
  ...mangaScriptsKokoRikaKagaku20,
  ...mangaScriptsKokoEigo20,
  ...mangaScriptsKokoShakaiChirishi20,
  ...mangaScriptsKokoKokugo20,
  ...mangaScriptsSansuChugaku21,
  ...mangaScriptsRikaChugaku21,
  ...mangaScriptsShakaiChugaku21,
  ...mangaScriptsKokugoChugaku21,
  ...mangaScriptsEigoChugaku21,
  ...mangaScriptsKokoMath21,
  ...mangaScriptsKokoRikaButsuriSeibutsu21,
  ...mangaScriptsKokoRikaKagaku21,
  ...mangaScriptsKokoEigo21,
  ...mangaScriptsKokoShakaiChirishi21,
  ...mangaScriptsKokoKokugo21,
  ...mangaScriptsKokoShakaiKomin21,
  ...mangaScriptsSansuChugaku22,
  ...mangaScriptsRikaChugaku22,
  ...mangaScriptsShakaiChugaku22,
  ...mangaScriptsKokugoChugaku22,
  ...mangaScriptsEigoChugaku22,
  ...mangaScriptsKokoMath22,
  ...mangaScriptsKokoRikaButsuriSeibutsu22,
  ...mangaScriptsKokoRikaKagaku22,
  ...mangaScriptsKokoEigo22,
  ...mangaScriptsKokoShakaiChirishi22,
  ...mangaScriptsKokoKokugo22,
  ...mangaScriptsSansuChugaku23,
  ...mangaScriptsRikaChugaku23,
  ...mangaScriptsShakaiChugaku23,
  ...mangaScriptsKokugoChugaku23,
  ...mangaScriptsEigoChugaku23,
  ...mangaScriptsKokoMath23,
  ...mangaScriptsKokoRikaButsuriSeibutsu23,
  ...mangaScriptsKokoEigo23,
  ...mangaScriptsKokoShakaiChirishi23,
  ...mangaScriptsKokoKokugo23,
  ...mangaScriptsSansuChugaku24,
  ...mangaScriptsRikaChugaku24,
  ...mangaScriptsShakaiChugaku24,
  ...mangaScriptsKokugoChugaku24,
  ...mangaScriptsEigoChugaku24,
  ...mangaScriptsKokoMath24,
  ...mangaScriptsKokoRikaButsuriSeibutsu24,
  ...mangaScriptsKokoEigo24,
  ...mangaScriptsKokugoChugaku4,
  ...mangaScriptsKokugoChugaku5,
  ...mangaScriptsKokugoChugaku6,
  ...mangaScriptsKokugoChugaku7,
  ...mangaScriptsKokugoChugaku8,
  ...mangaScriptsKokugoChugaku9,
  ...mangaScriptsEigoChugaku4,
  ...mangaScriptsEigoChugaku5,
  ...mangaScriptsEigoChugaku6,
  ...mangaScriptsEigoChugaku7,
  ...mangaScriptsEigoChugaku8,
  ...mangaScriptsEigoChugaku9,
};

export function getMangaScript(id: string): MangaScript | undefined {
  return ALL_MANGA_SCRIPTS[id];
}
