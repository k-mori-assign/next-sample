import styles from "./accordion.module.css";
import { useState, useReducer } from "react";

type Props = {
  title: string;
  list: string[];
};

export default function Accordion({ title, list }: Props) {
  const [showAccordion, toggleShowAccordion] = useReducer(
    (state) => !state,
    false
  );

  const [checkList, setCheckList] = useState<string[]>([]);

  const updateCheckList = (name: string) => {
    if (checkList.includes(name)) {
      setCheckList((prevState) => prevState.filter((item) => item !== name));
    } else {
      setCheckList((prevState) => [...prevState, name]);
    }
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={toggleShowAccordion}>
        {title}
        {!!checkList.length && (
          <span className={styles.checkListLength}>（{checkList.length}）</span>
        )}
      </div>
      <ul className={styles.list}>
        {list.map((item) => (
          <li
            className={`${styles.item} ${showAccordion ? styles.display : ""}`}
            key={item}
          >
            <p>{item}</p>
            <input
              className={styles.checkbox}
              style={{ display: showAccordion ? "" : "none" }}
              id={item}
              type="checkbox"
              onChange={() => updateCheckList(item)}
            ></input>
          </li>
        ))}
      </ul>
    </div>
  );
}
