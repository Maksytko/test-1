import { useEffect, useState } from "react";
import FilterListItem from "../FilterListItem";

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
        <ul>
          {items.map((item) => (
            <FilterListItem text={item} key={item} />
          ))}
        </ul>
      )}
    </>
  );
}

export default FilterList;
