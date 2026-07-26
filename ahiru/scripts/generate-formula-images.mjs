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
