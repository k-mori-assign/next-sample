"use client";

import styles from "./page.module.css";
import Accordion from "./components/accordion";

export default function workExperience() {
  return (
    <div className={styles.workHistory}>
      <Accordion title="コンサルタント" list={List} />
      <Accordion title="財務アドバイザリー" list={List2} />
      <Accordion title="金融専門職" list={List3} />
    </div>
  );
}

const List = [
  "戦略コンサルタント",
  "業務コンサルタント",
  "ITコンサルタント",
  "組織人事コンサルタント",
  "製造/流通業界コンサルタント",
  "ヘルスケア業界コンサルタント",
  "情報通信/メディア業界コンサルタント",
  "金融業界コンサルタント",
  "官公庁コンサルタント",
];

const List2 = [
  "M&Aアドバイザリー",
  "ターンアラウンド",
  "資金調達",
  "カバレッジ",
];

const List3 = [
  "トレーダー",
  "クオンツ・アクチュアリー",
  "オペレーション",
  "ファンドマネージャー",
  "アナリスト",
];
