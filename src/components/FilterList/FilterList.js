import { useEffect, useState } from "react";
import style from "./FilterList.module.css";

import ResetButton from "../ResetButton";

function FilterList({ filter }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data = [];
    if (filter.co) {
      data = [...data, ...filter.co];
    }

    if (filter.pos) {
      data = [...data, ...filter.pos];
    }

    setItems(data);
  }, [filter?.co, filter?.pos]);

  return (
    <>
      {items.length !== 0 && (
        <>
          <ul className={style.list}>
            {items.map((item) => (
              <li className={style.item} key={item}>
                <p className={style.text}>{item}</p>
              </li>
            ))}
          </ul>
          <ResetButton />
        </>
      )}
    </>
  );
}

export default FilterList;
