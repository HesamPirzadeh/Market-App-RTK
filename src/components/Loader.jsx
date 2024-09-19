import { RevolvingDot } from "react-loader-spinner";

import styles from "../css/Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <RevolvingDot
        visible={true}
        height="100"
        width="100"
        color="#fe5d42"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
