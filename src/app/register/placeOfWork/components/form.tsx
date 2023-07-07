"use client";

import styles from "./form.module.css";
import { useState } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";

registerLocale("ja", ja);

type Props = {
  number: number;
};

export default function placeOfWork({ number }: Props) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className={styles.form}>
      <p className={styles.number}>{number}社目</p>
      <div>
        <label className={styles.companyNameLabel}>企業名</label>
        <input
          className={styles.companyNameInput}
          placeholder="企業名"
          type="text"
        ></input>
      </div>
      <div className={styles.dates}>
        <div>
          <label className={styles.startDateLabel}>入社年月</label>
          <DatePicker
            className={styles.datePicker}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showMonthYearPicker
            dateFormat="yyyy年MM月"
            locale="ja"
            renderCustomHeader={renderCustomHeader}
          />
        </div>
        <div>
          <label className={styles.endDateLabel}>退社年月</label>
          <DatePicker
            className={styles.datePicker}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showMonthYearPicker
            dateFormat="yyyy年MM月"
            locale="ja"
            renderCustomHeader={renderCustomHeader}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}

const renderCustomHeader = ({
  date,
  changeYear,
}: {
  date: Date;
  changeYear: (year: number) => void;
}) => {

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button
        onClick={() => changeYear(date.getFullYear() - 1)}
        style={{ border: "none", marginLeft: "5px", cursor: "pointer" }}
      >
        {"<"}
      </button>
      <select
        value={date.getFullYear()}
        onChange={(e) => changeYear(parseInt(e.target.value))}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <option key={i} value={date.getFullYear() - i}>
            {date.getFullYear() - i}
          </option>
        ))}
      </select>
      <button
        onClick={() => changeYear(date.getFullYear() + 1)}
        style={{ border: "none", marginRight: "5px", cursor: "pointer" }}
      >
        {">"}
      </button>
    </div>
  );
};
