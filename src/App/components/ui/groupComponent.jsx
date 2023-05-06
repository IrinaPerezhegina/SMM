import React from "react";
import styles from "../../scss/components/groupComponent.module.scss";
import Search from "./search";
import SelectComponents from "./selectComponents";

const GroupComponent = () => {
    return (
        <div className={styles.wrapper}>
            <Search />
            <SelectComponents />
        </div>
    );
};

export default GroupComponent;
