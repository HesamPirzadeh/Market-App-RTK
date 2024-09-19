import { FaListUl } from "react-icons/fa";
import { queryObject } from "../helpers/helpers";

import styles from "../css/Sidebar.module.css";
import category from "../constant/list";

function Sidebar({ setQuery, query }) {
  const CategoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => queryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
      <p>Categories</p>
      </div>
      <ul onClick={CategoryHandler}>
        {category.map((item) => (
          <li
            key={item.id}
            className={
              item.title.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
