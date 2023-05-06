import React from "react";
import styles from "./main.module.scss";

import GroupComponent from "../ui/groupComponent";

import hand from "../../../App/assets/main/bd58815194b5fffd923a49857909db5c 1.png";
import Statistics from "../ui/statistics";

const Main = () => {
    return (
        <section className={styles.wrapper}>
            <GroupComponent />
            <div className={styles.content}>
                <div className={styles.contentText}>
                    <h1>SMMPlaneta</h1>
                    <span>решения и возможности</span>
                    <ul>
                        <li>Поиск автора</li>
                        <li>Открытие сообщества</li>
                        <li>Захват контента</li>
                        <li>Адаптация и подбор персонала</li>
                        <li>Управляй этим</li>
                    </ul>
                    <div className={styles.contentStatistics}>
                        <Statistics />
                    </div>
                </div>
                <div className={styles.contentImg}>
                    <img src={hand} alt="hand" />
                </div>
            </div>
        </section>
    );
};

export default Main;
