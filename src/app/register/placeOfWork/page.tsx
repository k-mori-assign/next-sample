"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import Form from './components/form'

export default function placeOfWork() {
  return (
    <div className={styles.placeOfWork}>
      <Form number={1}
      />
      <Form number={2}
      />
      <br />
      <Link href="/register/workExperience">次へ</Link>
    </div>
  );
}
