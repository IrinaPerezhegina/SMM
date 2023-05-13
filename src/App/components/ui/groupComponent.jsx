import React from "react";
import styles from "../../scss/components/groupComponent.module.scss";
import Search from "./search";
import SelectComponents from "./selectComponents";
import { useLocation } from "react-router-dom";

const GroupComponent = () => {
    const search = useLocation();
    const data =
        search.pathname === "/search" ? "Выдача по слову «котики»" : "";
    return (
        <div className={styles.wrapper}>
            <Search />
            {search.pathname === "/search" && <span>{data} </span>}
            <SelectComponents />
        </div>
    );
};

export default GroupComponent;
