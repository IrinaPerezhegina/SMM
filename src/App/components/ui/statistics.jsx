import React from "react";
import styles from "../../scss/components/statistics.module.scss";

const Statistics = () => {
    return (
        <div className={styles.wrapper}>
            <div className="">
                <span>Охват</span>
                <span>81 358 879</span>
            </div>
            <div className="">
                <span>Блогеров</span>
                <span>542</span>
            </div>
            <div className="">
                {" "}
                <span>Постов</span>
                <span>7 236</span>
            </div>
        </div>
    );
};

export default Statistics;
