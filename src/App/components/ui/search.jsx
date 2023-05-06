import React from "react";
import styles from "../../scss/components/search.module.scss";

const Search = () => {
    return (
        <div className={styles.search}>
            <input type="text" />
            <button>поиск</button>
        </div>
    );
};

export default Search;
