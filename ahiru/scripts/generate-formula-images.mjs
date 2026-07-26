#!/usr/bin/env node
/**
 * Gemini（Nano Banana Pro / Flash Image）で「公式・まとめ」タブ（算数・理科）の
 * 図解イラストを生成します。教育向けのオリジナル・イラストで、
 * 文字・数字・ラベルは画像に焼き込まない（アプリ側でテキスト表示するため）。
 *
 * 使い方:
 *   export GEMINI_API_KEY="your-key"
 *   node scripts/generate-formula-images.mjs                 # Nano Banana Pro（高品質）
 *   node scripts/generate-formula-images.mjs --model flash   # 高速・低コスト
 *
 * 生成後、assets/formulas/ にPNGが保存され、
 * data/formulaImages.ts の require マッピング（label文字列 → 画像）が自動更新されます。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../assets/formulas');
const MAP_TS = path.join(__dirname, '../data/formulaImages.ts');

const MODELS = {
  flash: 'gemini-3.1-flash-image-preview',
  pro: 'gemini-3-pro-image-preview',
};

const MATH_STYLE =
  'Clean, precise educational geometry diagram for a Japanese elementary-school math textbook. ' +
  'Simple flat shape(s) on a plain white background, soft pastel fill color, thin dark outline. ' +
  'Square composition, centered, generous margin. ' +
  'ABSOLUTELY NO text, NO numbers, NO letters, NO labels, NO watermark anywhere in the image.';

const SCENE_STYLE =
  'Bright, friendly, original illustration for a Japanese elementary-school math word-problem, ' +
  'picture-book style, soft shading, simple shapes, cheerful colors. Square composition. ' +
  'ABSOLUTELY NO text, NO numbers, NO letters, NO signage, NO logos, NO real people, NO watermark.';

const RIKA_STYLE =
  'Clean, friendly, original educational illustration for a Japanese elementary/middle-school science textbook, ' +
  'like a premium picture-book diagram. Soft shading, clear and simple. Square composition. ' +
  'ABSOLUTELY NO text, NO numbers, NO labels, NO watermark, NO real brand logos, NO real people.';

const SHAKAI_STYLE =
  'Bright, engaging, original illustration for a Japanese elementary/middle-school social studies textbook ' +
  '(geography, history, or civics), like a premium infographic panel. Clean, simple, warm colors. Square composition. ' +
  'ABSOLUTELY NO text, NO numbers, NO letters, NO real national flags, NO real emblems or logos, NO watermark. ' +
  'For historical scenes: depict generic period-costumed figures or buildings/landscapes only — ' +
  'NO recognizable face or portrait of any specific real named historical figure, silhouette or distant/back view only.';

/**
 * key   : 画像ファイル名（拡張子なし）＝assets/formulas/{key}.png
 * label : data/formulas-*.ts の item.label と完全一致させる（UI照合キー）
 * prompt: 生成プロンプト
 */
const PRODUCTS = [
  // ───────── 算数：面積・体積の基本 ─────────
  { key: 'sansu-rect-area', label: '長方形・正方形の面積', prompt: `A single flat rectangle shape, wider than it is tall. ${MATH_STYLE}` },
  { key: 'sansu-triangle-area', label: '三角形の面積', prompt: `A single flat triangle shape with a flat horizontal base. ${MATH_STYLE}` },
  { key: 'sansu-parallelogram-area', label: '平行四辺形の面積', prompt: `A single flat parallelogram (slanted rectangle) shape. ${MATH_STYLE}` },
  { key: 'sansu-trapezoid-area', label: '台形の面積', prompt: `A single flat trapezoid shape with a shorter top edge and longer bottom edge, both horizontal. ${MATH_STYLE}` },
  { key: 'sansu-rhombus-area', label: 'ひし形の面積', prompt: `A single flat rhombus (diamond) shape standing on one corner. ${MATH_STYLE}` },
  { key: 'sansu-circle-area', label: '円の面積と円周', prompt: `A single flat perfect circle shape. ${MATH_STYLE}` },
  { key: 'sansu-cuboid-volume', label: '直方体・立方体の体積', prompt: `A single 3D rectangular box (cuboid) drawn in simple isometric perspective, floating on white. ${MATH_STYLE}` },
  { key: 'sansu-cylinder-volume', label: '角柱・円柱の体積', prompt: `A single 3D cylinder drawn in simple isometric perspective, floating on white. ${MATH_STYLE}` },

  // ───────── 算数：速さ ─────────
  { key: 'sansu-speed-basic', label: '速さ・道のり・時間の関係', prompt: `A cheerful child walking briskly along a curving path in a park. ${SCENE_STYLE}` },
  { key: 'sansu-meeting-problem', label: '旅人算（出会い）', prompt: `Two cheerful children walking toward each other from opposite ends of a straight path, about to meet in the middle. ${SCENE_STYLE}` },
  { key: 'sansu-chasing-problem', label: '旅人算（追いかけ）', prompt: `Two cheerful children running in the same direction along a path, one child chasing after the other ahead. ${SCENE_STYLE}` },
  { key: 'sansu-river-boat', label: '流水算', prompt: `A small wooden rowboat on a flowing river, gentle current ripples visible on the water surface. ${SCENE_STYLE}` },
  { key: 'sansu-train-bridge', label: '通過算（鉄橋・トンネル）', prompt: `A friendly cartoon passenger train crossing a long bridge over a river. ${SCENE_STYLE}` },
  { key: 'sansu-trains-passing', label: '通過算（すれちがい・追いこし）', prompt: `Two friendly cartoon trains passing each other on parallel railway tracks, moving in opposite directions. ${SCENE_STYLE}` },
  { key: 'sansu-clock-hands', label: '時計算', prompt: `A large classic round analog clock face close-up, hour and minute hands at an angle to each other. ${SCENE_STYLE}` },

  // ───────── 算数：割合・比の基本 ─────────
  { key: 'sansu-ratio-basic', label: '割合の基本三公式', prompt: `A round pizza cut into equal slices, with one slice pulled slightly apart from the rest. ${SCENE_STYLE}` },
  { key: 'sansu-percent-bu', label: '百分率（％）と歩合の変換', prompt: `A tall glass measuring cup partially filled with colorful juice, showing a fill level. ${SCENE_STYLE}` },
  { key: 'sansu-ratio-property', label: '比の性質', prompt: `Two colorful ribbons of different lengths laid side by side on a table. ${SCENE_STYLE}` },
  { key: 'sansu-ratio-division', label: '比例配分', prompt: `A pile of gold coins being divided into two smaller piles of different sizes. ${SCENE_STYLE}` },
  { key: 'sansu-soutou-zan', label: '相当算', prompt: `A glass jar partially filled with colorful candy, showing part full and part empty. ${SCENE_STYLE}` },
  { key: 'sansu-salt-water', label: '食塩水の濃度', prompt: `A clear glass beaker of water with white salt crystals dissolving inside, small sparkles. ${SCENE_STYLE}` },
  { key: 'sansu-profit-loss', label: '売買損益', prompt: `A cheerful small fruit market stall with baskets of fruit and a shopping bag, no visible price tags or text. ${SCENE_STYLE}` },

  // ───────── 算数：数列・規則性 ─────────
  { key: 'sansu-arithmetic-nth', label: '等差数列の○番目', prompt: `A row of evenly spaced young trees planted along a straight path receding into the distance. ${SCENE_STYLE}` },
  { key: 'sansu-arithmetic-sum', label: '等差数列の和', prompt: `Colorful toy building blocks stacked into a staircase pattern, increasing in height. ${SCENE_STYLE}` },
  { key: 'sansu-count-items', label: '個数の求め方', prompt: `A row of evenly spaced colorful flags on poles along a straight path. ${SCENE_STYLE}` },
  { key: 'sansu-triangular-numbers', label: '三角数（1からの和）', prompt: `Small round dots arranged neatly into a triangular pattern, like bowling pins. ${SCENE_STYLE}` },
  { key: 'sansu-periodic-pattern', label: '周期算（あまりで見ぬく）', prompt: `A repeating pattern of colorful beads (red, blue, yellow) strung on a necklace. ${SCENE_STYLE}` },
  { key: 'sansu-fibonacci', label: 'フィボナッチ型（前2つの和）', prompt: `A beautiful spiral seashell (nautilus) with a natural spiral growth pattern. ${SCENE_STYLE}` },

  // ───────── 算数：場合の数 ─────────
  { key: 'sansu-product-rule', label: '積の法則', prompt: `A child's open closet showing a few shirts on hangers above and a few pairs of pants below. ${SCENE_STYLE}` },
  { key: 'sansu-sum-rule', label: '和の法則', prompt: `A child standing at a crossroads deciding between a bicycle path and a bus stop. ${SCENE_STYLE}` },
  { key: 'sansu-permutation', label: '順列（ならべ方）', prompt: `A group of cheerful children lining up in a single row, viewed from the side. ${SCENE_STYLE}` },
  { key: 'sansu-combination', label: '組み合わせ（選び方）', prompt: `A small group of cheerful children standing together, a few of them being picked out as representatives. ${SCENE_STYLE}` },
  { key: 'sansu-tree-diagram', label: '樹形図で数え上げ', prompt: `An abstract branching tree diagram illustration with simple round nodes and connecting lines, colorful. ${SCENE_STYLE}` },
  { key: 'sansu-grid-paths', label: '道順の数え方', prompt: `A simple city street grid viewed from above, with one highlighted path from a starting corner to an ending corner. ${SCENE_STYLE}` },

  // ───────── 算数：特殊算 ─────────
  { key: 'sansu-crane-turtle', label: 'つるかめ算', prompt: `Cranes and turtles together by the edge of a calm pond. ${SCENE_STYLE}` },
  { key: 'sansu-sum-diff', label: '和差算', prompt: `A balance scale with two different-sized weights on each side, slightly tilted. ${SCENE_STYLE}` },
  { key: 'sansu-surplus-deficit', label: '過不足算', prompt: `A child handing out candies to a line of friends, with an extra pile of candies to one side. ${SCENE_STYLE}` },
  { key: 'sansu-age-problem', label: '年齢算', prompt: `Simple silhouette illustration of a tall parent and a small child standing side by side, showing a height and age difference. ${SCENE_STYLE}` },
  { key: 'sansu-tree-planting', label: '植木算', prompt: `A row of young trees planted at even intervals along a straight garden path. ${SCENE_STYLE}` },
  { key: 'sansu-elimination', label: '消去算', prompt: `A wooden fruit basket containing red apples and orange oranges together. ${SCENE_STYLE}` },

  // ───────── 算数：仕事算・ニュートン算 ─────────
  { key: 'sansu-work-unit', label: '仕事算（全体を1とする）', prompt: `Two cheerful children working together to fill a large bucket with water using small buckets. ${SCENE_STYLE}` },
  { key: 'sansu-work-lcm', label: '仕事算（最小公倍数を使う）', prompt: `A small team of cheerful children painting a fence together. ${SCENE_STYLE}` },
  { key: 'sansu-person-days', label: 'のべ算（延べ人数）', prompt: `A group of cheerful workers building a small sandcastle together on a beach. ${SCENE_STYLE}` },
  { key: 'sansu-newton-problem', label: 'ニュートン算', prompt: `A long queue of cheerful people waiting in line at a ticket counter window. ${SCENE_STYLE}` },
  { key: 'sansu-tank-filling', label: '水そう算', prompt: `A bathtub or water tank filling up with water from a faucet, water level rising. ${SCENE_STYLE}` },

  // ───────── 算数：平面図形（角度・多角形） ─────────
  { key: 'sansu-triangle-angles', label: '三角形の内角の和', prompt: `A single flat triangle shape, simple and clean. ${MATH_STYLE}` },
  { key: 'sansu-exterior-angle', label: '三角形の外角', prompt: `A single flat triangle shape with one side extended outward past a corner as a dashed ray. ${MATH_STYLE}` },
  { key: 'sansu-polygon-interior', label: '多角形の内角の和', prompt: `A single flat regular pentagon shape. ${MATH_STYLE}` },
  { key: 'sansu-polygon-exterior', label: '多角形の外角の和', prompt: `A single flat regular hexagon shape. ${MATH_STYLE}` },
  { key: 'sansu-parallel-lines', label: '平行線の錯角・同位角', prompt: `Two parallel horizontal lines crossed diagonally by a single straight transversal line. ${MATH_STYLE}` },
  { key: 'sansu-regular-polygon-angle', label: '正多角形の1つの内角', prompt: `A single flat regular hexagon shape with equal sides clearly visible. ${MATH_STYLE}` },

  // ───────── 算数：相似と図形の面積比 ─────────
  { key: 'sansu-similar-sides', label: '相似な図形の辺の比', prompt: `Two flat triangles of the same shape but different sizes, placed side by side, one small and one large. ${MATH_STYLE}` },
  { key: 'sansu-similar-area', label: '相似な図形の面積比', prompt: `Two flat squares of the same shape but different sizes, placed side by side, one small and one large. ${MATH_STYLE}` },
  { key: 'sansu-similar-volume', label: '相似な立体の体積比', prompt: `Two 3D cubes of different sizes, one small and one large, placed side by side in simple isometric perspective. ${MATH_STYLE}` },
  { key: 'sansu-same-height-triangles', label: '高さが同じ三角形の面積比', prompt: `Two flat triangles sharing the same height, sitting on the same baseline, with different base widths. ${MATH_STYLE}` },
  { key: 'sansu-shadow-similar', label: '相似の利用（影・砂時計型）', prompt: `A tall tree casting a long shadow at sunset, with a small person standing nearby casting a shorter shadow, same direction. ${SCENE_STYLE}` },

  // ───────── 算数：数の性質 ─────────
  { key: 'sansu-factors-multiples', label: '約数と倍数', prompt: `Small colorful building blocks arranged in a neat rectangular grid of equal rows and columns. ${SCENE_STYLE}` },
  { key: 'sansu-prime-factorization', label: '素数と素因数分解', prompt: `An abstract branching tree diagram with round colorful nodes splitting downward, factor-tree style. ${SCENE_STYLE}` },
  { key: 'sansu-gcd', label: '最大公約数', prompt: `Two groups of colorful marbles being sorted into equal small piles of the same size. ${SCENE_STYLE}` },
  { key: 'sansu-lcm', label: '最小公倍数', prompt: `Two colorful gears of different sizes meshing together and turning. ${SCENE_STYLE}` },
  { key: 'sansu-fractions-reduce', label: '分数の通分・約分', prompt: `A round pizza cut into equal slices, with a few slices highlighted in a brighter color. ${SCENE_STYLE}` },
  { key: 'sansu-divisibility', label: '倍数の見分け方', prompt: `A colorful calendar grid of numbered squares arranged in neat rows and columns, abstract pattern only. ${SCENE_STYLE}` },

  // ───────── 理科：てこ・滑車・輪軸・ばね ─────────
  { key: 'rika-lever-balance', label: 'てこのつり合い（モーメント）', prompt: `A simple wooden seesaw balancing two different-sized weights, one on each side, resting on a central pivot. ${RIKA_STYLE}` },
  { key: 'rika-lever-rod-weight', label: '棒の重さがあるてこ', prompt: `A single uniform wooden rod balanced horizontally on a small triangular pivot stand, level and steady. ${RIKA_STYLE}` },
  { key: 'rika-fixed-pulley', label: '定滑車', prompt: `A single pulley wheel fixed to a ceiling beam, with a rope over it holding a weight on one end. ${RIKA_STYLE}` },
  { key: 'rika-movable-pulley', label: '動滑車', prompt: `A pulley system where the pulley wheel itself moves, lifted by two strands of rope holding a weight below it. ${RIKA_STYLE}` },
  { key: 'rika-wheel-axle', label: '輪軸（りんじく）', prompt: `A wheel-and-axle mechanism, a large wheel attached to a smaller central hub, like a ship's steering wheel. ${RIKA_STYLE}` },
  { key: 'rika-spring-extension', label: 'ばねののび（フックの法則）', prompt: `A coiled metal spring hanging vertically from a stand, stretched down by a small weight attached at the bottom. ${RIKA_STYLE}` },

  // ───────── 理科：電気・回路 ─────────
  { key: 'rika-series-circuit', label: '直列つなぎの電流', prompt: `A simple illustrated electric circuit with one battery and two light bulbs connected in a single loop, bulbs glowing dim. ${RIKA_STYLE}` },
  { key: 'rika-parallel-circuit', label: '並列つなぎの電流', prompt: `A simple illustrated electric circuit with one battery and two light bulbs on separate branching loops, bulbs glowing bright. ${RIKA_STYLE}` },
  { key: 'rika-battery-series', label: '電池の直列つなぎ', prompt: `A simple illustrated electric circuit with two batteries connected end to end powering one brightly glowing light bulb. ${RIKA_STYLE}` },
  { key: 'rika-ohms-law', label: 'オームの法則（中学）', prompt: `A simple illustrated electric circuit with a battery, a coiled resistor, and a round gauge meter. ${RIKA_STYLE}` },
  { key: 'rika-electromagnet', label: '電磁石の強さ', prompt: `A coil of copper wire wrapped around an iron nail, with small metal paperclips sticking to one end. ${RIKA_STYLE}` },
  { key: 'rika-compass-current', label: '電流の向きとN極（右手・方位磁針）', prompt: `A small compass with its needle deflected, placed near a straight wire coil carrying current. ${RIKA_STYLE}` },

  // ───────── 理科：光と音 ─────────
  { key: 'rika-light-reflection', label: '光の反射の法則', prompt: `A beam of light hitting a flat mirror at an angle and bouncing off at a matching angle, shown as two clean light rays. ${RIKA_STYLE}` },
  { key: 'rika-light-refraction', label: '光の屈折', prompt: `A drinking straw standing in a clear glass of water, appearing bent at the water surface. ${RIKA_STYLE}` },
  { key: 'rika-convex-lens-focus', label: '凸レンズと焦点', prompt: `A round magnifying glass lens focusing parallel rays of sunlight into a single small bright point. ${RIKA_STYLE}` },
  { key: 'rika-convex-lens-image', label: '凸レンズの像（実像）', prompt: `A round convex lens on a stand projecting an upside-down image of a small object onto a screen behind it. ${RIKA_STYLE}` },
  { key: 'rika-sound-speed', label: '音の速さ', prompt: `A dramatic lightning bolt striking in the distance over a landscape, with visible sound wave ripples spreading outward. ${RIKA_STYLE}` },
  { key: 'rika-pitch-loudness', label: '音の高さ・大きさ', prompt: `A close-up of a vibrating guitar string, motion blur showing the vibration, warm stage lighting. ${RIKA_STYLE}` },

  // ───────── 理科：力と運動（浮力・密度・圧力・振り子）追加分 ─────────
  { key: 'rika-density', label: '密度', prompt: `A wooden block floating on water next to a metal ball sinking to the bottom of a clear glass tank. ${RIKA_STYLE}` },
  { key: 'rika-buoyancy', label: '浮力（アルキメデスの原理）', prompt: `A ball fully submerged in a clear glass tank of water, with visible ripples and displaced water at the surface. ${RIKA_STYLE}` },
  { key: 'rika-floating-object', label: '水にうく物の浮力', prompt: `A wooden log floating calmly on a lake, most of it above the waterline, gentle ripples around it. ${RIKA_STYLE}` },
  { key: 'rika-pressure', label: '圧力', prompt: `A sharp thumbtack pressing into a soft cushioned surface, close-up comparison view. ${RIKA_STYLE}` },
  { key: 'rika-pendulum', label: '振り子の周期', prompt: `A simple pendulum, a round weight hanging from a string, swinging in an arc from a fixed stand. ${RIKA_STYLE}` },

  // ───────── 理科：水溶液・溶解度・濃度 ─────────
  { key: 'rika-dissolve-weight', label: '水溶液のとける量と重さ', prompt: `A clear glass beaker with sugar cubes dissolving into water, gentle swirling visible. ${RIKA_STYLE}` },
  { key: 'rika-concentration', label: '濃度（質量パーセント濃度）', prompt: `A clear glass beaker of water with white salt crystals dissolving at the bottom, small sparkles in the liquid. ${RIKA_STYLE}` },
  { key: 'rika-solubility', label: '溶解度', prompt: `A glass beaker of warm water with crystals dissolving and gentle steam rising from the surface. ${RIKA_STYLE}` },
  { key: 'rika-saturated-solution', label: '飽和水溶液', prompt: `A glass beaker with clearly visible crystal clusters settled at the bottom of a clear liquid, cooling. ${RIKA_STYLE}` },
  { key: 'rika-filtration', label: 'ろ過のしかた', prompt: `A glass funnel lined with filter paper set into a beaker, cloudy liquid being poured through with a glass stirring rod. ${RIKA_STYLE}` },

  // ───────── 理科：気体・燃焼・中和 ─────────
  { key: 'rika-oxygen', label: '酸素の性質と集め方', prompt: `A glowing wooden splint reigniting with a small flame inside a test tube of gas, bright spark. ${RIKA_STYLE}` },
  { key: 'rika-carbon-dioxide', label: '二酸化炭素の性質と集め方', prompt: `A flask with bubbling reaction connected by a tube to a test tube of clear limewater that is turning cloudy white. ${RIKA_STYLE}` },
  { key: 'rika-hydrogen', label: '水素の性質', prompt: `A test tube collecting gas bubbles over water in a basin, connected to a small reaction flask, light and airy. ${RIKA_STYLE}` },
  { key: 'rika-ammonia', label: 'アンモニアの性質と集め方', prompt: `An inverted test tube collecting rising gas above a small heated flask, wisps suggesting a pungent gas. ${RIKA_STYLE}` },
  { key: 'rika-combustion', label: 'ものが燃える3条件', prompt: `A single lit candle with a warm glowing flame on a small table, close-up view. ${RIKA_STYLE}` },
  { key: 'rika-litmus', label: '酸性・中性・アルカリ性（リトマス紙）', prompt: `Strips of litmus paper dipped in small dishes of liquid, one strip turning red and another turning blue. ${RIKA_STYLE}` },
  { key: 'rika-neutralization', label: '中和', prompt: `Two beakers of colored liquid, one pink and one clear, being poured together into a third beaker turning a neutral pale green. ${RIKA_STYLE}` },

  // ───────── 理科：天体 ─────────
  { key: 'rika-sun-daily-path', label: '太陽の1日の動き（日周運動）', prompt: `A wide sky showing the arc of the sun's path from sunrise to sunset over a calm landscape horizon. ${RIKA_STYLE}` },
  { key: 'rika-solar-altitude', label: '南中高度と季節', prompt: `A split scene comparing a high summer sun and a low winter sun above the same landscape, warm and cool tones. ${RIKA_STYLE}` },
  { key: 'rika-moon-phases', label: '月の満ち欠け', prompt: `A dark night sky showing a sequence of the moon in several different phases from new moon to full moon. ${RIKA_STYLE}` },
  { key: 'rika-star-trails', label: '星の1日の動き', prompt: `A deep night sky showing circular star trail streaks rotating around one bright fixed star. ${RIKA_STYLE}` },
  { key: 'rika-star-yearly-shift', label: '星の1年の動き（年周運動）', prompt: `Four small night-sky scenes side by side representing spring, summer, autumn, and winter, each with a slightly different starry constellation view. ${RIKA_STYLE}` },

  // ───────── 理科：気象 ─────────
  { key: 'rika-humidity', label: '湿度', prompt: `A foggy, steamy windowpane with condensation, cozy warm room visible faintly behind it. ${RIKA_STYLE}` },
  { key: 'rika-dew-point', label: '露点（ろてん）', prompt: `Small water droplets condensing on the outside surface of a cold glass of water. ${RIKA_STYLE}` },
  { key: 'rika-cloud-rain', label: '雲・雨のでき方', prompt: `Fluffy white and grey clouds forming above a green landscape, with gentle rain falling below. ${RIKA_STYLE}` },
  { key: 'rika-cold-front', label: '寒冷前線', prompt: `Dark dramatic storm clouds with heavy rain falling over a landscape, strong contrast. ${RIKA_STYLE}` },
  { key: 'rika-warm-front', label: '温暖前線', prompt: `A soft overcast grey sky with a gentle light drizzle over a wide calm landscape. ${RIKA_STYLE}` },
  { key: 'rika-japan-seasons', label: '日本の四季と気団', prompt: `A simple stylized landscape showing snowy mountains on one side and a warm humid coastline on the other, representing contrasting seasonal air. ${RIKA_STYLE}` },

  // ───────── 理科：植物 ─────────
  { key: 'rika-photosynthesis', label: '光合成', prompt: `A vivid green leaf in bright sunlight with tiny sparkling oxygen bubbles and visible leaf veins, close-up. ${RIKA_STYLE}` },
  { key: 'rika-plant-respiration', label: '呼吸（植物）', prompt: `A simple healthy potted green plant on a windowsill, calm and clean illustration. ${RIKA_STYLE}` },
  { key: 'rika-transpiration', label: '蒸散', prompt: `A green plant with small water droplets evaporating from its leaves, roots visible below the soil absorbing water. ${RIKA_STYLE}` },
  { key: 'rika-seed-germination', label: '種子の発芽の条件', prompt: `A cross-section view of soil showing a seed sprouting with a small green shoot above and a root below. ${RIKA_STYLE}` },
  { key: 'rika-flower-structure', label: '花のつくり', prompt: `A large blooming flower cross-section clearly showing petals, stamens, and a central pistil. ${RIKA_STYLE}` },
  { key: 'rika-monocot-dicot', label: '双子葉類と単子葉類', prompt: `Two young plant seedlings side by side, one with two round broad leaves and one with a single thin blade-like leaf. ${RIKA_STYLE}` },

  // ───────── 理科：動物・人体 ─────────
  { key: 'rika-digestive-tract', label: '消化管の順路', prompt: `A simple human body silhouette with the digestive tract illustrated inside, from mouth through stomach to intestines, textbook diagram style. ${RIKA_STYLE}` },
  { key: 'rika-digestive-enzyme', label: '消化酵素（消化液）', prompt: `A bowl of steaming rice with a gentle glowing highlight suggesting starch breaking down, warm and appetizing. ${RIKA_STYLE}` },
  { key: 'rika-small-intestine-villi', label: '小腸のつくり（柔毛）', prompt: `A close-up cross-section illustration of the small intestine's inner wall, covered in tiny finger-like folds (villi). ${RIKA_STYLE}` },
  { key: 'rika-blood-circulation', label: '血液の循環', prompt: `A simple human body silhouette showing the heart and blood vessels circulating between the heart, lungs, and body, textbook diagram style. ${RIKA_STYLE}` },
  { key: 'rika-arterial-venous-blood', label: '動脈血と静脈血', prompt: `A close-up split comparison of bright vivid red blood on one side and darker deep red blood on the other, inside simple vessel shapes. ${RIKA_STYLE}` },
  { key: 'rika-lungs', label: '肺のつくりと呼吸', prompt: `A cross-section illustration of human lungs showing branching airways ending in clusters of small air sacs. ${RIKA_STYLE}` },
  { key: 'rika-vertebrate-classification', label: 'セキツイ動物の分類', prompt: `Five friendly animals standing together representing each vertebrate group: a fish, a frog, a lizard, a bird, and a small mammal. ${RIKA_STYLE}` },

  // ───────── 社会：日本の地形・気候 ─────────
  { key: 'shakai-japan-territory', label: '日本の位置と国土', prompt: `A stylized aerial map illustration of the Japanese archipelago surrounded by blue ocean, island chain view. ${SHAKAI_STYLE}` },
  { key: 'shakai-mountains', label: '日本の山地・山脈', prompt: `A dramatic range of tall Japanese mountains with steam rising from a hot spring in a valley below. ${SHAKAI_STYLE}` },
  { key: 'shakai-rivers-plains', label: '川と平野・地形', prompt: `An aerial landscape view of a river flowing from steep mountains through a fan-shaped orchard valley down to a flat river-mouth delta by the sea. ${SHAKAI_STYLE}` },
  { key: 'shakai-currents-coast', label: '海流と海岸', prompt: `Ocean waves where a warm current and a cool current visibly meet, small fishing boats nearby, dramatic sky. ${SHAKAI_STYLE}` },
  { key: 'shakai-climate-zones', label: '日本の気候区分', prompt: `A single landscape split between a snowy mountain coastline on one side and a sunny mild coastline on the other, representing contrasting climates. ${SHAKAI_STYLE}` },
  { key: 'shakai-monsoon-typhoon', label: '季節風（モンスーン）と梅雨・台風', prompt: `A dramatic swirling typhoon cloud system viewed from above over the ocean near a coastline. ${SHAKAI_STYLE}` },
  { key: 'shakai-disaster-prevention', label: '自然災害と防災', prompt: `A calm hillside Japanese neighborhood with a clear elevated evacuation path and safety signage shapes (no text), reassuring tone. ${SHAKAI_STYLE}` },

  // ───────── 社会：日本の農業・水産業 ─────────
  { key: 'shakai-rice-farming', label: '稲作（米づくり）', prompt: `A golden rice paddy field ready for harvest with mountains in the background, autumn light. ${SHAKAI_STYLE}` },
  { key: 'shakai-forcing-retarding', label: '促成栽培と抑制栽培', prompt: `A split scene: a warm greenhouse full of vegetables on one side, a cool misty highland vegetable field on the other. ${SHAKAI_STYLE}` },
  { key: 'shakai-livestock-farming', label: '畑作・畜産の地域', prompt: `Wide green Hokkaido farmland with dairy cows grazing and a red barn in the distance. ${SHAKAI_STYLE}` },
  { key: 'shakai-orchard-regions', label: '果樹栽培の産地', prompt: `A sunny orchard with rows of trees bearing ripe red apples. ${SHAKAI_STYLE}` },
  { key: 'shakai-fisheries', label: '日本の水産業', prompt: `A calm fishing harbor at dawn with small boats and fishing nets. ${SHAKAI_STYLE}` },
  { key: 'shakai-food-self-sufficiency', label: '食料自給率と輸入', prompt: `A wooden dinner table set with a mix of rice, bread, and vegetables, symbolizing food from many sources. ${SHAKAI_STYLE}` },

  // ───────── 社会：日本の工業・貿易 ─────────
  { key: 'shakai-pacific-belt', label: '太平洋ベルトと工業地帯', prompt: `A coastal industrial skyline with factories and cargo cranes along a bay at dusk. ${SHAKAI_STYLE}` },
  { key: 'shakai-three-industrial-zones', label: '三大工業地帯', prompt: `An automobile factory assembly line with robotic arms building a car body. ${SHAKAI_STYLE}` },
  { key: 'shakai-industry-types', label: '工業の種類（重化学・軽工業）', prompt: `A split scene comparing a traditional textile weaving mill and a modern machinery factory. ${SHAKAI_STYLE}` },
  { key: 'shakai-trade-change', label: '日本の貿易の変化', prompt: `A large cargo ship stacked with colorful shipping containers at a busy port. ${SHAKAI_STYLE}` },
  { key: 'shakai-trade-partners-ports', label: '主な貿易相手と貿易港', prompt: `A split scene of a cargo airplane at an airport and a container ship at a harbor, side by side. ${SHAKAI_STYLE}` },
  { key: 'shakai-energy-power', label: 'エネルギーと発電', prompt: `Solar panels and wind turbines on a green hillside under a clear sky. ${SHAKAI_STYLE}` },

  // ───────── 社会：世界の国々・時差 ─────────
  { key: 'shakai-continents-oceans', label: '六大陸と三大洋', prompt: `A stylized globe floating in space showing simplified continents and blue oceans. ${SHAKAI_STYLE}` },
  { key: 'shakai-latitude-longitude', label: '緯度と経度', prompt: `A globe with visible latitude and longitude grid lines wrapping around it. ${SHAKAI_STYLE}` },
  { key: 'shakai-standard-time', label: '日本の標準時と時差の考え方', prompt: `A wall of several round clock faces each showing a slightly different time, world-clock style. ${SHAKAI_STYLE}` },
  { key: 'shakai-timezone-same-side', label: '時差の計算（同じ側）', prompt: `A globe half-lit by sunlight with two small city marker pins connected by a curved line. ${SHAKAI_STYLE}` },
  { key: 'shakai-timezone-cross-side', label: '時差の計算（東経と西経）', prompt: `A globe showing day on one side and night on the other, with a glowing dividing line. ${SHAKAI_STYLE}` },
  { key: 'shakai-date-line', label: '日付変更線', prompt: `A globe centered on the Pacific Ocean with a glowing curved line running north-south across it. ${SHAKAI_STYLE}` },
  { key: 'shakai-world-religions', label: '世界の宗教・文化', prompt: `A skyline silhouette showing a temple, a church, and a mosque standing together peacefully at sunset. ${SHAKAI_STYLE}` },

  // ───────── 社会：古代〜中世 ─────────
  { key: 'shakai-taika-reform', label: '聖徳太子と大化の改新', prompt: `An ancient Japanese Asuka-period wooden palace hall with a tiled roof, no people. ${SHAKAI_STYLE}` },
  { key: 'shakai-nara-period', label: '奈良時代と律令国家', prompt: `A respectful distant view of a grand ancient wooden temple hall housing a huge seated bronze Buddha statue. ${SHAKAI_STYLE}` },
  { key: 'shakai-heian-sekkan', label: '平安時代と摂関政治', prompt: `An elegant Heian-period aristocratic mansion with a garden pond, shinden-zukuri architecture style, no people. ${SHAKAI_STYLE}` },
  { key: 'shakai-kokufu-culture', label: '国風文化', prompt: `A Heian-period noblewoman in flowing multi-layered kimono robes, seen from behind, writing with an ink brush by a garden window. ${SHAKAI_STYLE}` },
  { key: 'shakai-kamakura-shogunate', label: '鎌倉幕府の成立', prompt: `A samurai warrior in traditional armor standing before a modest wooden hall, seen from a distance or side view. ${SHAKAI_STYLE}` },
  { key: 'shakai-mongol-invasion', label: '元寇と鎌倉幕府の衰え', prompt: `Samurai figures on a stormy beach facing distant war ships on rough seas. ${SHAKAI_STYLE}` },
  { key: 'shakai-muromachi-onin', label: '室町幕府と応仁の乱', prompt: `The golden pavilion of a Muromachi-period temple reflecting in a calm garden pond. ${SHAKAI_STYLE}` },

  // ───────── 社会：近世 ─────────
  { key: 'shakai-unification', label: '天下統一（信長・秀吉）', prompt: `A grand Japanese castle with tall stone walls on a hill under a dramatic sky, Momoyama-period style. ${SHAKAI_STYLE}` },
  { key: 'shakai-edo-shogunate', label: '江戸幕府の成立', prompt: `An Edo-period castle town with a stone bridge crossing a moat toward castle walls. ${SHAKAI_STYLE}` },
  { key: 'shakai-daimyo-control', label: '大名の統制（武家諸法度・参勤交代）', prompt: `A long procession of samurai retainers walking along a historic highway between pine trees, distant view. ${SHAKAI_STYLE}` },
  { key: 'shakai-status-farmers', label: '身分制度と農民', prompt: `A peaceful Edo-period farming village with terraced rice fields and thatched-roof houses. ${SHAKAI_STYLE}` },
  { key: 'shakai-sakoku', label: '鎖国', prompt: `A small fan-shaped artificial island in a harbor with old sailing ships anchored nearby, Nagasaki Dejima style. ${SHAKAI_STYLE}` },
  { key: 'shakai-three-reforms-edo', label: '江戸の三大改革', prompt: `An Edo-period town street lined with wooden merchant shops and hanging paper lanterns at dusk. ${SHAKAI_STYLE}` },
  { key: 'shakai-edo-culture', label: '江戸時代の文化', prompt: `An original woodblock-print-style illustration of a great ocean wave curling over a distant mountain, ukiyo-e inspired. ${SHAKAI_STYLE}` },

  // ───────── 社会：近代 ─────────
  { key: 'shakai-opening-meiji', label: '開国と明治維新', prompt: `A large black steam warship approaching a traditional Japanese coastal fishing town, viewed from the shore. ${SHAKAI_STYLE}` },
  { key: 'shakai-meiji-reforms', label: '明治の三大改革（学制・徴兵令・地租改正）', prompt: `A Meiji-era Western-style brick schoolhouse building with children walking toward it, distant view. ${SHAKAI_STYLE}` },
  { key: 'shakai-constitution-meiji', label: '自由民権運動と大日本帝国憲法', prompt: `A grand Meiji-era Western-style government building with columns, under a clear sky. ${SHAKAI_STYLE}` },
  { key: 'shakai-sino-russo-wars', label: '日清戦争と日露戦争', prompt: `Historic warships at sea under a dramatic stormy sky, distant naval scene, no flags or text. ${SHAKAI_STYLE}` },
  { key: 'shakai-taisho-democracy', label: '第一次世界大戦と大正デモクラシー', prompt: `A bustling Taisho-era city street with early automobiles, streetcars, and modern brick buildings. ${SHAKAI_STYLE}` },
  { key: 'shakai-war-path-showa', label: '昭和の戦争への道', prompt: `A somber wartime cityscape silhouette against a darkening sky, respectful and non-graphic. ${SHAKAI_STYLE}` },

  // ───────── 社会：現代 ─────────
  { key: 'shakai-postwar-reform', label: '終戦と戦後改革', prompt: `A hopeful postwar Japanese city scene with rebuilding construction cranes and new buildings rising. ${SHAKAI_STYLE}` },
  { key: 'shakai-constitution-japan', label: '日本国憲法の制定', prompt: `The Japanese National Diet Building exterior under a clear blue sky. ${SHAKAI_STYLE}` },
  { key: 'shakai-international-return', label: '国際社会への復帰', prompt: `A world map globe illustration with Japan highlighted and gentle connecting lines reaching to other regions. ${SHAKAI_STYLE}` },
  { key: 'shakai-economic-growth', label: '高度経済成長', prompt: `A 1960s Japanese city skyline with a sleek bullet train speeding past on elevated tracks. ${SHAKAI_STYLE}` },
  { key: 'shakai-modern-challenges', label: '現代の日本と課題', prompt: `A warm modern Japanese neighborhood scene showing both elderly residents and a young family together, symbolic of demographic change. ${SHAKAI_STYLE}` },

  // ───────── 社会：憲法と人権 ─────────
  { key: 'shakai-constitution-supreme', label: '憲法は国の最高法規', prompt: `A stone pillar engraved with abstract scales-of-justice symbol, standing on a pedestal, dignified and symbolic. ${SHAKAI_STYLE}` },
  { key: 'shakai-pacifism', label: '三大原則の柱・平和主義', prompt: `A white dove flying over a peaceful sunlit landscape. ${SHAKAI_STYLE}` },
  { key: 'shakai-human-rights-types', label: '基本的人権の種類', prompt: `A diverse group of simple silhouette figures of different ages standing together peacefully, symbolic unity. ${SHAKAI_STYLE}` },
  { key: 'shakai-social-rights', label: '社会権と生存権', prompt: `A warm cozy family home interior scene, symbolic of livelihood and wellbeing. ${SHAKAI_STYLE}` },
  { key: 'shakai-three-duties', label: '国民の三大義務', prompt: `A small community scene showing a school building and a workplace together under a bright sky. ${SHAKAI_STYLE}` },
  { key: 'shakai-new-rights', label: '新しい人権', prompt: `A person sitting in a cozy room looking at a glowing laptop screen, symbolic of information and privacy. ${SHAKAI_STYLE}` },

  // ───────── 社会：三権分立と政治のしくみ ─────────
  { key: 'shakai-three-powers', label: '三権分立', prompt: `Three grand government buildings arranged in a triangular composition, symbolic of balanced power. ${SHAKAI_STYLE}` },
  { key: 'shakai-diet-structure', label: '国会のしくみ', prompt: `The Japanese National Diet Building exterior, grand and formal, clear sky. ${SHAKAI_STYLE}` },
  { key: 'shakai-cabinet-system', label: '内閣と議院内閣制', prompt: `A formal government meeting room with a long table and empty chairs, symbolic cabinet meeting. ${SHAKAI_STYLE}` },
  { key: 'shakai-courts-three-trials', label: '裁判所と三審制', prompt: `A solemn courthouse building exterior with tall stone pillars. ${SHAKAI_STYLE}` },
  { key: 'shakai-supreme-court', label: '違憲審査権と憲法の番人', prompt: `A dignified Supreme Court building exterior with grand steps leading up to it. ${SHAKAI_STYLE}` },
  { key: 'shakai-local-government', label: '地方自治と直接請求権', prompt: `A friendly small-town hall building with community members chatting nearby. ${SHAKAI_STYLE}` },
  { key: 'shakai-elections', label: '選挙と参政権', prompt: `A row of simple voting booths with a ballot box in a community hall. ${SHAKAI_STYLE}` },

  // ───────── 社会：経済・財政・税 ─────────
  { key: 'shakai-supply-demand', label: '需要と供給と価格', prompt: `A busy fresh outdoor market stall piled with colorful fruits and vegetables. ${SHAKAI_STYLE}` },
  { key: 'shakai-inflation-deflation', label: '景気とインフレ・デフレ', prompt: `A lively shopping street scene with people carrying bags, symbolic of economic activity. ${SHAKAI_STYLE}` },
  { key: 'shakai-bank-of-japan', label: '日本銀行の役割', prompt: `A grand formal classical bank building exterior with tall columns. ${SHAKAI_STYLE}` },
  { key: 'shakai-national-budget', label: '財政と国の予算', prompt: `Neat stacks of coins next to a ledger book and calculator, symbolic of budgeting. ${SHAKAI_STYLE}` },
  { key: 'shakai-tax-types', label: '税金の種類（直接税・間接税）', prompt: `A small shop counter with a cash register and a shopping basket, symbolic of paying tax at checkout. ${SHAKAI_STYLE}` },
  { key: 'shakai-progressive-tax-welfare', label: '累進課税と社会保障', prompt: `A caring nurse gently assisting an elderly person in a bright warm room, symbolic of social security. ${SHAKAI_STYLE}` },

  // ───────── 社会：国際社会・国連 ─────────
  { key: 'shakai-un-structure', label: '国際連合のしくみ', prompt: `A generic modern glass international conference building exterior with a blue sky, no flags or emblems. ${SHAKAI_STYLE}` },
  { key: 'shakai-un-assembly-council', label: '総会と安全保障理事会', prompt: `A large circular assembly hall with many rows of delegate seats around a central podium, symbolic UN-style chamber. ${SHAKAI_STYLE}` },
  { key: 'shakai-veto-power', label: '常任理事国の拒否権', prompt: `A round table meeting with several simple figures seated, one hand raised in objection, symbolic negotiation scene. ${SHAKAI_STYLE}` },
  { key: 'shakai-un-agencies', label: '国連の専門機関', prompt: `Children sitting together studying with books and a small globe on the table, warm and hopeful. ${SHAKAI_STYLE}` },
  { key: 'shakai-pko-cooperation', label: 'PKOと国際協力', prompt: `Peacekeepers in blue helmets helping build a well in a friendly village setting, humanitarian scene. ${SHAKAI_STYLE}` },
  { key: 'shakai-sdgs-environment', label: '地球環境問題とSDGs', prompt: `A healthy green Earth globe glowing softly, surrounded by small icons of solar panels and wind turbines, symbolic sustainability. ${SHAKAI_STYLE}` },
];

async function generateImage(apiKey, modelId, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Gemini API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  for (const part of parts) {
    if (part.inlineData?.data) return Buffer.from(part.inlineData.data, 'base64');
  }
  throw new Error('No image in response');
}

let sharpMod = null;
async function loadSharp() {
  if (sharpMod !== null) return sharpMod;
  try {
    sharpMod = (await import('sharp')).default;
  } catch {
    sharpMod = false;
  }
  return sharpMod;
}

async function toPng(buffer) {
  const sharp = await loadSharp();
  if (!sharp) return null;
  return sharp(buffer)
    .resize(640, 640, { fit: 'cover' })
    .png({ compressionLevel: 9, quality: 82 })
    .toBuffer();
}

function writeMap(generatedKeys) {
  const lines = PRODUCTS.filter((p) => generatedKeys.has(p.key)).map(
    (p) => `  ${JSON.stringify(p.label)}: require('../assets/formulas/${p.key}.png'),`
  );
  const content = `// このファイルは scripts/generate-formula-images.mjs による自動生成です。
// 公式・まとめの item.label 文字列 → イラスト画像（assets/formulas/*.png）のマッピング。
// 画像が未生成の項目は、アプリ側でベクター図形／ステップ表示にフォールバックします。
import { ImageSourcePropType } from 'react-native';

export const formulaImages: Record<string, ImageSourcePropType> = {
${lines.join('\n')}
};
`;
  fs.writeFileSync(MAP_TS, content, 'utf8');
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY を設定してください: https://aistudio.google.com/apikey');
    process.exit(1);
  }
  const modelArg = process.argv.includes('--model')
    ? process.argv[process.argv.indexOf('--model') + 1]
    : 'pro';
  const modelId = MODELS[modelArg] ?? MODELS.pro;

  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`Model: ${modelId} (Nano Banana ${modelArg === 'pro' ? 'Pro' : '2'})`);
  console.log(`Output: ${OUT_DIR}`);
  console.log(`Total: ${PRODUCTS.length} images\n`);

  const generated = new Set();
  for (const p of PRODUCTS) {
    if (fs.existsSync(path.join(OUT_DIR, `${p.key}.png`))) generated.add(p.key);
  }

  let i = 0;
  for (const p of PRODUCTS) {
    i++;
    const outPath = path.join(OUT_DIR, `${p.key}.png`);
    if (generated.has(p.key)) {
      console.log(`[${i}/${PRODUCTS.length}] ${p.key} already exists, skipping`);
      continue;
    }
    process.stdout.write(`[${i}/${PRODUCTS.length}] Generating ${p.key} (${p.label})... `);
    try {
      const raw = await generateImage(apiKey, modelId, p.prompt);
      const png = await toPng(raw);
      fs.writeFileSync(outPath, png ?? raw);
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      generated.add(p.key);
      console.log(`OK (${kb}KB${png ? ', png640' : ', raw'})`);
    } catch (err) {
      console.log('FAILED');
      console.error(`  ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 2000));
    if (i % 10 === 0) writeMap(generated); // 途中経過も保存
  }

  writeMap(generated);
  console.log(`\nDone. ${generated.size}/${PRODUCTS.length} images. data/formulaImages.ts を更新しました。`);
}

main();
