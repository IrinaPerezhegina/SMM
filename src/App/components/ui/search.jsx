import React from "react";
import styles from "../../scss/components/search.module.scss";
import { useLocation } from "react-router-dom";

const Search = () => {
    const search = useLocation();
    console.log(search.pathname);
    const data = search.pathname === "/search" ? "котики" : "";
    return (
        <div className={styles.search}>
            <input type="text" placeholder={data} />
            <button>поиск</button>
        </div>
    );
};

export default Search;
