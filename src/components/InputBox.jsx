import { IoIosSearch } from "react-icons/io";
import { queryObject } from "../helpers/helpers";
import styles from "../css/InputBox.module.css"


function InputBox({ input, setInput, setQuery }) {
  const searchHanlder = () => {
    setQuery((query) => queryObject(query, { input }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHanlder}>
        <IoIosSearch />
      </button>
    </div>
  );
}

export default InputBox;
