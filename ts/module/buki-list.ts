export type Buki = {
    id: number;
    ja: string;
    en: string;
    original: string;
    season: string;
    rank: number;
    sub: string;
    sp: string;
    type: string;
};
export const bukiList:Buki[] = [
    { id: 0, ja: "ボールドマーカー", en: "Sploosh-o-matic", original: "ボールドマーカー", season: "0", rank: 9, sub: "curlingbomb", sp: "ultrahanko", type: "shooter",  },
    { id: 1, ja: "ボールドマーカーネオ", en: "Neo Sploosh-o-matic", original: "ボールドマーカー", season: "3", rank: 13, sub: "jumpbeacon", sp: "megaphone51", type: "shooter",  },
    { id: 10, ja: "わかばシューター", en: "Splattershot Jr.", original: "わかばシューター", season: "0", rank: 1, sub: "splashbomb", sp: "greatbarrier", type: "shooter",  },
    { id: 11, ja: "もみじシューター", en: "Custom Splattershot Jr.", original: "シャープマーカー", season: "0", rank: 6, sub: "torpedo", sp: "hopsonar", type: "shooter",  },
    { id: 20, ja: "シャープマーカー", en: "Splash-o-matic", original: "シャープマーカー", season: "0", rank: 16, sub: "quickbomb", sp: "kanitank", type: "shooter",  },
    { id: 21, ja: "シャープマーカーネオ", en: "Neo Splash-o-matic", original: "シャープマーカー", season: "3", rank: 21, sub: "kyubanbomb", sp: "tripletornado", type: "shooter",  },
    { id: 30, ja: "プロモデラーMG", en: "Aerospray MG", original: "プロモデラーMG", season: "0", rank: 5, sub: "tansanbomb", sp: "sameride", type: "shooter",  },
    { id: 31, ja: "プロモデラーRG", en: "Aerospray RG", original: "プロモデラーMG", season: "2", rank: 18, sub: "sprinkler", sp: "nicedama", type: "shooter",  },
    { id: 40, ja: "スプラシューター", en: "Splattershot", original: "スプラシューター", season: "0", rank: 2, sub: "kyubanbomb", sp: "ultrashot", type: "shooter",  },
    { id: 41, ja: "スプラシューターコラボ", en: "Tentatek Splattershot", original: "スプラシューター", season: "2", rank: 10, sub: "splashbomb", sp: "tripletornado", type: "shooter",  },
    { id: 45, ja: "ヒーローシューター レプリカ", en: "Hero Shot Replica", original: "スプラシューター", season: "0", rank: 1, sub: "kyubanbomb", sp: "ultrashot", type: "shooter",  },
    { id: 50, ja: ".52ガロン", en: ".52 Gal", original: ".52ガロン", season: "0", rank: 11, sub: "splashshield", sp: "megaphone51", type: "shooter",  },
    // { id: 50, ja: ".52ガロン", en: ".52 Gal", original: ".52ガロン", season: "0", rank: 11, sub: "splashshield", sp: "megaphone51", type: "shooter",  },
    { id: 60, ja: "N-ZAP85", en: "N-ZAP '85", original: "N-ZAP85", season: "0", rank: 6, sub: "kyubanbomb", sp: "energystand", type: "shooter",  },
    { id: 61, ja: "N-ZAP89", en: "N-ZAP '89", original: "N-ZAP85", season: "3", rank: 11, sub: "robotbomb", sp: "decoy", type: "shooter",  },
    { id: 70, ja: "プライムシューター", en: "Splattershot Pro", original: "プライムシューター", season: "0", rank: 9, sub: "linemarker", sp: "kanitank", type: "shooter",  },
    { id: 71, ja: "プライムシューターコラボ", en: "Forge Splattershot Pro", original: "プライムシューター", season: "2", rank: 20, sub: "kyubanbomb", sp: "nicedama", type: "shooter",  },
    { id: 80, ja: ".96ガロン", en: ".96 Gal", original: ".96ガロン", season: "0", rank: 17, sub: "sprinkler", sp: "kyuinki", type: "shooter",  },
    { id: 81, ja: ".96ガロンデコ", en: ".96 Gal Deco", original: ".96ガロン", season: "3", rank: 23, sub: "splashshield", sp: "teioika", type: "shooter",  },
    { id: 90, ja: "ジェットスイーパー", en: "Jet Squelcher", original: "ジェットスイーパー", season: "0", rank: 15, sub: "linemarker", sp: "kyuinki", type: "shooter",  },
    { id: 91, ja: "ジェットスイーパーカスタム", en: "Custom Jet Squelcher", original: "ジェットスイーパー", season: "3", rank: 20, sub: "poisonmist", sp: "amefurashi", type: "shooter",  },
    { id: 100, ja: "スペースシューター", en: "Splattershot Nova", original: "スペースシューター", season: "2", rank: 8, sub: "pointsensor", sp: "megaphone51", type: "shooter",  },
    { id: 101, ja: "スペースシューターコラボ", en: "Annaki Splattershot Nova", original: "スペースシューター", season: "4", rank: 12, sub: "trap", sp: "jetpack", type: "shooter",  },
    { id: 200, ja: "ノヴァブラスター", en: "Luna Blaster", original: "ノヴァブラスター", season: "0", rank: 13, sub: "splashbomb", sp: "shokuwander", type: "blaster",  },
    { id: 201, ja: "ノヴァブラスターネオ", en: "Luna Blaster Neo", original: "ノヴァブラスター", season: "2", rank: 24, sub: "tansanbomb", sp: "ultrahanko", type: "blaster",  },
    { id: 210, ja: "ホットブラスター", en: "Blaster", original: "ホットブラスター", season: "0", rank: 3, sub: "robotbomb", sp: "greatbarrier", type: "blaster",  },
    // { id: 210, ja: "ホットブラスター", en: "Blaster", original: "ホットブラスター", season: "0", rank: 3, sub: "robotbomb", sp: "greatbarrier", type: "blaster",  },
    { id: 220, ja: "ロングブラスター", en: "Range Blaster", original: "ロングブラスター", season: "0", rank: 11, sub: "kyubanbomb", sp: "hopsonar", type: "blaster",  },
    { id: 230, ja: "クラッシュブラスター", en: "Clash Blaster", original: "クラッシュブラスター", season: "0", rank: 22, sub: "splashbomb", sp: "ultrashot", type: "blaster",  },
    { id: 231, ja: "クラッシュブラスターネオ", en: "Clash Blaster Neo", original: "クラッシュブラスター", season: "3", rank: 25, sub: "curlingbomb", sp: "decoy", type: "blaster",  },
    { id: 240, ja: "ラピッドブラスター", en: "Rapid Blaster", original: "ラピッドブラスター", season: "0", rank: 7, sub: "trap", sp: "tripletornado", type: "blaster",  },
    { id: 241, ja: "ラピッドブラスターデコ", en: "Rapid Blaster Deco", original: "ラピッドブラスター", season: "3", rank: 10, sub: "torpedo", sp: "jetpack", type: "blaster",  },
    { id: 250, ja: "Rブラスターエリート", en: "Rapid Blaster Pro", original: "Rブラスターエリート", season: "0", rank: 26, sub: "poisonmist", sp: "kyuinki", type: "blaster",  },
    { id: 251, ja: "Rブラスターエリートデコ", en: "Rapid Blaster Pro Deco", original: "Rブラスターエリート", season: "4", rank: 29, sub: "linemarker", sp: "megaphone51", type: "blaster",  },
    { id: 260, ja: "S-BLAST92", en: "S-BLAST '92", original: "S-BLAST92", season: "4", rank: 20, sub: "sprinkler", sp: "sameride", type: "blaster",  },
    // { id: 260, ja: "S-BLAST92", en: "S-BLAST '92", original: "S-BLAST92", season: "4", rank: 20, sub: "sprinkler", sp: "sameride", type: "blaster",  },
    { id: 300, ja: "L3リールガン", en: "L-3 Nozzlenose", original: "L3リールガン", season: "0", rank: 13, sub: "curlingbomb", sp: "kanitank", type: "shooter",  },
    { id: 301, ja: "L3リールガンD", en: "L-3 Nozzlenose D", original: "L3リールガン", season: "3", rank: 19, sub: "quickbomb", sp: "ultrahanko", type: "shooter",  },
    { id: 310, ja: "H3リールガン", en: "H-3 Nozzlenose", original: "H3リールガン", season: "0", rank: 24, sub: "pointsensor", sp: "energystand", type: "shooter",  },
    { id: 311, ja: "H3リールガンD", en: "H-3 Nozzlenose D", original: "H3リールガン", season: "4", rank: 27, sub: "splashshield", sp: "greatbarrier", type: "shooter",  },
    { id: 400, ja: "ボトルガイザー", en: "Squeezer", original: "ボトルガイザー", season: "0", rank: 19, sub: "splashshield", sp: "ultrashot", type: "shooter",  },
    // { id: 400, ja: "ボトルガイザーフォイル", en: "Squeezer", original: "ボトルガイザー", season: "0", rank: 19, sub: "splashshield", sp: "ultrashot", type: "shooter",  },
    { id: 1000, ja: "カーボンローラー", en: "Carbon Roller", original: "カーボンローラー", season: "0", rank: 6, sub: "robotbomb", sp: "shokuwander", type: "roller",  },
    { id: 1001, ja: "カーボンローラーデコ", en: "Carbon Roller Deco", original: "カーボンローラー", season: "2", rank: 22, sub: "quickbomb", sp: "ultrashot", type: "roller",  },
    { id: 1010, ja: "スプラローラー", en: "Splat Roller", original: "スプラローラー", season: "0", rank: 2, sub: "curlingbomb", sp: "greatbarrier", type: "roller",  },
    { id: 1011, ja: "スプラローラーコラボ", en: "Krak-On Splat Roller", original: "スプラローラー", season: "3", rank: 7, sub: "jumpbeacon", sp: "teioika", type: "roller",  },
    { id: 1020, ja: "ダイナモローラー", en: "Dynamo Roller", original: "ダイナモローラー", season: "0", rank: 12, sub: "sprinkler", sp: "energystand", type: "roller",  },
    { id: 1021, ja: "ダイナモローラーテスラ", en: "Gold Dynamo Roller", original: "ダイナモローラー", season: "5", rank: 17, sub: "splashbomb", sp: "decoy", type: "roller",  },
    { id: 1030, ja: "ヴァリアブルローラー", en: "Flingza Roller", original: "ヴァリアブルローラー", season: "0", rank: 20, sub: "trap", sp: "missile", type: "roller",  },
    // { id: 1030, ja: "ヴァリアブルローラー", en: "Flingza Roller", original: "ヴァリアブルローラー", season: "0", rank: 20, sub: "trap", sp: "missile", type: "roller",  },
    { id: 1040, ja: "ワイドローラー", en: "Big Swig Roller", original: "ワイドローラー", season: "2", rank: 16, sub: "splashshield", sp: "kyuinki", type: "roller",  },
    { id: 1041, ja: "ワイドローラーコラボ", en: "Big Swig Roller Express", original: "ワイドローラー", season: "4", rank: 18, sub: "linemarker", sp: "amefurashi", type: "roller",  },
    { id: 1100, ja: "パブロ", en: "Inkbrush", original: "パブロ", season: "0", rank: 7, sub: "splashbomb", sp: "megaphone51", type: "brush",  },
    { id: 1101, ja: "パブロ・ヒュー", en: "Inkbrush Nouveau", original: "パブロ", season: "2", rank: 15, sub: "trap", sp: "ultrahanko", type: "brush",  },
    { id: 1110, ja: "ホクサイ", en: "Octobrush", original: "ホクサイ", season: "0", rank: 4, sub: "kyubanbomb", sp: "shokuwander", type: "brush",  },
    { id: 1111, ja: "ホクサイ・ヒュー", en: "Octobrush Nouveau", original: "ホクサイ", season: "5", rank: 9, sub: "jumpbeacon", sp: "amefurashi", type: "brush",  },
    { id: 1120, ja: "フィンセント", en: "Painbrush", original: "フィンセント", season: "4", rank: 14, sub: "curlingbomb", sp: "hopsonar", type: "brush",  },
    // { id: 1120, ja: "フィンセント", en: "Painbrush", original: "フィンセント", season: "4", rank: 14, sub: "curlingbomb", sp: "hopsonar", type: "brush",  },
    { id: 2000, ja: "スクイックリンα", en: "Squiffer", original: "スクイックリンα", season: "0", rank: 8, sub: "pointsensor", sp: "greatbarrier", type: "charger",  },
    // { id: 2000, ja: "スクイックリンα", en: "Squiffer", original: "スクイックリンα", season: "0", rank: 8, sub: "pointsensor", sp: "greatbarrier", type: "charger",  },
    { id: 2010, ja: "スプラチャージャー", en: "Splat Charger", original: "スプラチャージャー", season: "0", rank: 2, sub: "splashbomb", sp: "kyuinki", type: "charger",  },
    { id: 2011, ja: "スプラチャージャーコラボ", en: "Z+F Splat Charger", original: "スプラチャージャー", season: "3", rank: 9, sub: "splashshield", sp: "tripletornado", type: "charger",  },
    { id: 2020, ja: "スプラスコープ", en: "Splatterscope", original: "スプラスコープ", season: "0", rank: 10, sub: "splashbomb", sp: "kyuinki", type: "charger",  },
    { id: 2021, ja: "スプラスコープコラボ", en: "Z+F Splatterscope", original: "スプラスコープ", season: "3", rank: 15, sub: "splashshield", sp: "tripletornado", type: "charger",  },
    { id: 2030, ja: "リッター4K", en: "E-liter 4K", original: "リッター4K", season: "0", rank: 18, sub: "trap", sp: "hopsonar", type: "charger",  },
    { id: 2040, ja: "4Kスコープ", en: "E-liter 4K Scope", original: "4Kスコープ", season: "0", rank: 27, sub: "trap", sp: "hopsonar", type: "charger",  },
    // { id: 2030, ja: "リッター4K", en: "E-liter 4K", original: "リッター4K", season: "0", rank: 18, sub: "trap", sp: "hopsonar", type: "charger",  },
    // { id: 2040, ja: "4Kスコープ", en: "E-liter 4K Scope", original: "4Kスコープ", season: "0", rank: 27, sub: "trap", sp: "hopsonar", type: "charger",  },
    { id: 2050, ja: "14式竹筒銃・甲", en: "Bamboozler 14", original: "14式竹筒銃・甲", season: "0", rank: 23, sub: "robotbomb", sp: "megaphone51", type: "charger",  },
    { id: 2060, ja: "ソイチューバー", en: "Goo Tuber", original: "ソイチューバー", season: "0", rank: 25, sub: "torpedo", sp: "missile", type: "charger",  },
    { id: 2061, ja: "ソイチューバーカスタム", en: "Custom Goo Tuber", original: "ソイチューバー", season: "5", rank: 28, sub: "tansanbomb", sp: "ultrahanko", type: "charger",  },
    { id: 2070, ja: "R-PEN/5H", en: "Snipewriter 5H", original: "R-PEN/5H", season: "2", rank: 14, sub: "sprinkler", sp: "energystand", type: "charger",  },
    // { id: 2070, ja: "R-PEN/5H", en: "Snipewriter 5H", original: "R-PEN/5H", season: "2", rank: 14, sub: "sprinkler", sp: "energystand", type: "charger",  },
    { id: 3000, ja: "バケットスロッシャー", en: "Slosher", original: "バケットスロッシャー", season: "0", rank: 3, sub: "splashbomb", sp: "tripletornado", type: "slosher",  },
    { id: 3001, ja: "バケットスロッシャーデコ", en: "Slosher Deco", original: "バケットスロッシャー", season: "2", rank: 12, sub: "linemarker", sp: "shokuwander", type: "slosher",  },
    { id: 3010, ja: "ヒッセン", en: "Tri-Slosher", original: "ヒッセン", season: "0", rank: 10, sub: "poisonmist", sp: "jetpack", type: "slosher",  },
    { id: 3011, ja: "ヒッセン・ヒュー", en: "Tri-Slosher Nouveau", original: "ヒッセン", season: "3", rank: 17, sub: "tansanbomb", sp: "energystand", type: "slosher",  },
    { id: 3020, ja: "スクリュースロッシャー", en: "Sloshing Machine", original: "スクリュースロッシャー", season: "0", rank: 14, sub: "tansanbomb", sp: "nicedama", type: "slosher",  },
    { id: 3021, ja: "スクリュースロッシャーネオ", en: "Sloshing Machine Neo", original: "スクリュースロッシャー", season: "5", rank: 21, sub: "pointsensor", sp: "ultrashot", type: "slosher",  },
    { id: 3030, ja: "オーバーフロッシャー", en: "Bloblobber", original: "オーバーフロッシャー", season: "0", rank: 19, sub: "sprinkler", sp: "amefurashi", type: "slosher",  },
    { id: 3031, ja: "オーバーフロッシャーデコ", en: "Bloblobber Deco", original: "オーバーフロッシャー", season: "5", rank: 20, sub: "linemarker", sp: "teioika", type: "slosher",  },
    { id: 3040, ja: "エクスプロッシャー", en: "Explosher", original: "エクスプロッシャー", season: "0", rank: 29, sub: "pointsensor", sp: "amefurashi", type: "slosher",  },
    // { id: 3040, ja: "エクスプロッシャー", en: "Explosher", original: "エクスプロッシャー", season: "0", rank: 29, sub: "pointsensor", sp: "amefurashi", type: "slosher",  },
    { id: 3050, ja: "モップリン", en: "Dread Wringer", original: "モップリン", season: "5", rank: 15, sub: "kyubanbomb", sp: "sameride", type: "slosher",  },
    // { id: 3050, ja: "モップリン", en: "Dread Wringer", original: "モップリン", season: "5", rank: 15, sub: "kyubanbomb", sp: "sameride", type: "slosher",  },
    { id: 4000, ja: "スプラスピナー", en: "Mini Splatling", original: "スプラスピナー", season: "0", rank: 12, sub: "quickbomb", sp: "ultrahanko", type: "splatling",  },
    { id: 4001, ja: "スプラスピナーコラボ", en: "Zink Mini Splatling", original: "スプラスピナー", season: "2", rank: 25, sub: "poisonmist", sp: "greatbarrier", type: "splatling",  },
    { id: 4010, ja: "バレルスピナー", en: "Heavy Splatling", original: "バレルスピナー", season: "0", rank: 4, sub: "sprinkler", sp: "hopsonar", type: "splatling",  },
    { id: 4011, ja: "バレルスピナーデコ", en: "Heavy Splatling Deco", original: "バレルスピナー", season: "4", rank: 15, sub: "pointsensor", sp: "teioika", type: "splatling",  },
    { id: 4020, ja: "ハイドラント", en: "Hydra Splatling", original: "ハイドラント", season: "0", rank: 20, sub: "robotbomb", sp: "nicedama", type: "splatling",  },
    { id: 4030, ja: "クーゲルシュライバー", en: "Ballpoint Splatling", original: "クーゲルシュライバー", season: "0", rank: 30, sub: "tansanbomb", sp: "jetpack", type: "splatling",  },
    { id: 4031, ja: "クーゲルシュライバー・ヒュー", en: "Ballpoint Splatling Nouveau", original: "クーゲルシュライバー", season: "5", rank: 30, sub: "trap", sp: "kyuinki", type: "splatling",  },
    { id: 4040, ja: "ノーチラス47", en: "Nautilus 47", original: "ノーチラス47", season: "0", rank: 28, sub: "pointsensor", sp: "amefurashi", type: "splatling",  },
    // { id: 4040, ja: "ノーチラス47", en: "Nautilus 47", original: "ノーチラス47", season: "0", rank: 28, sub: "pointsensor", sp: "amefurashi", type: "splatling",  },
    { id: 4050, ja: "イグザミナー", en: "Heavy Edit Splatling", original: "イグザミナー", season: "5", rank: 13, sub: "curlingbomb", sp: "energystand", type: "splatling",  },
    { id: 5000, ja: "スパッタリー", en: "Dapple Dualies", original: "スパッタリー", season: "0", rank: 14, sub: "jumpbeacon", sp: "energystand", type: "dualies",  },
    { id: 5001, ja: "スパッタリー・ヒュー", en: "Dapple Dualies Nouveau", original: "スパッタリー", season: "2", rank: 26, sub: "torpedo", sp: "sameride", type: "dualies",  },
    { id: 5010, ja: "スプラマニューバー", en: "Splat Dualies", original: "スプラマニューバー", season: "0", rank: 3, sub: "kyubanbomb", sp: "kanitank", type: "dualies",  },
    // { id: 5010, ja: "スプラマニューバー", en: "Splat Dualies", original: "スプラマニューバー", season: "0", rank: 3, sub: "kyubanbomb", sp: "kanitank", type: "dualies",  },
    { id: 5020, ja: "ケルビン525", en: "Glooga Dualies", original: "ケルビン525", season: "0", rank: 21, sub: "splashshield", sp: "nicedama", type: "dualies",  },
    // { id: 5020, ja: "ケルビン525", en: "Glooga Dualies", original: "ケルビン525", season: "0", rank: 21, sub: "splashshield", sp: "nicedama", type: "dualies",  },
    { id: 5030, ja: "デュアルスイーパー", en: "Dualie Squelchers", original: "デュアルスイーパー", season: "0", rank: 8, sub: "splashbomb", sp: "hopsonar", type: "dualies",  },
    { id: 5031, ja: "デュアルスイーパーカスタム", en: "Custom Dualie Squelchers", original: "デュアルスイーパー", season: "4", rank: 16, sub: "jumpbeacon", sp: "decoy", type: "dualies",  },
    { id: 5040, ja: "クアッドホッパーブラック", en: "Tetra Dualies", original: "クアッドホッパーブラック", season: "0", rank: 17, sub: "robotbomb", sp: "sameride", type: "dualies",  },
    { id: 5041, ja: "クアッドホッパーホワイト", en: "Light Tetra Dualies", original: "クアッドホッパーブラック", season: "4", rank: 24, sub: "sprinkler", sp: "shokuwander", type: "dualies",  },
    { id: 6000, ja: "パラシェルター", en: "Splat Brella", original: "パラシェルター", season: "0", rank: 5, sub: "sprinkler", sp: "tripletornado", type: "brella",  },
    { id: 6001, ja: "パラシェルターソレーラ", en: "Sorella Brella", original: "パラシェルター", season: "5", rank: 19, sub: "robotbomb", sp: "jetpack", type: "brella",  },
    { id: 6010, ja: "キャンピングシェルター", en: "Tenta Brella", original: "キャンピングシェルター", season: "0", rank: 16, sub: "jumpbeacon", sp: "kyuinki", type: "brella",  },
    { id: 6011, ja: "キャンピングシェルターソレーラ", en: "Tenta Sorella Brella", original: "キャンピングシェルター", season: "4", rank: 22, sub: "trap", sp: "ultrashot", type: "brella",  },
    { id: 6020, ja: "スパイガジェット", en: "Undercover Brella", original: "スパイガジェット", season: "0", rank: 18, sub: "trap", sp: "sameride", type: "brella",  },
    // { id: 6020, ja: "スパイガジェット", en: "Undercover Brella", original: "スパイガジェット", season: "0", rank: 18, sub: "trap", sp: "sameride", type: "brella",  },
    { id: 7010, ja: "トライストリンガー", en: "Tri-Stringer", original: "トライストリンガー", season: "0", rank: 4, sub: "poisonmist", sp: "megaphone51", type: "stringer",  },
    { id: 7011, ja: "トライストリンガーコラボ", en: "Inkline Tri-Stringer", original: "トライストリンガー", season: "5", rank: 11, sub: "sprinkler", sp: "decoy", type: "stringer",  },
    { id: 7020, ja: "LACT-450", en: "REEF-LUX 450", original: "LACT-450", season: "0", rank: 10, sub: "curlingbomb", sp: "missile", type: "stringer",  },
    // { id: 7020, ja: "LACT-450", en: "REEF-LUX 450", original: "LACT-450", season: "0", rank: 10, sub: "curlingbomb", sp: "missile", type: "stringer",  },
    { id: 8000, ja: "ジムワイパー", en: "Splatana Stamper", original: "ジムワイパー", season: "0", rank: 15, sub: "quickbomb", sp: "shokuwander", type: "splatana",  },
    // { id: 8000, ja: "ジムワイパー", en: "Splatana Stamper", original: "ジムワイパー", season: "0", rank: 15, sub: "quickbomb", sp: "shokuwander", type: "splatana",  },
    { id: 8010, ja: "ドライブワイパー", en: "Splatana Wiper", original: "ドライブワイパー", season: "0", rank: 5, sub: "torpedo", sp: "ultrahanko", type: "splatana",  },
    { id: 8011, ja: "ドライブワイパーデコ", en: "Splatana Wiper Deco", original: "ドライブワイパー", season: "4", rank: 10, sub: "jumpbeacon", sp: "missile", type: "splatana",  },
]
