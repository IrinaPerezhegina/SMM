import React from "react";
import styles from "../scss/components/admin.module.scss";

const Admin = () => {
    return (
        <section className={styles.admin}>
            <div className={styles.table}>
                <div className={styles.tableTitle}>
                    <span>Статистика</span>
                </div>
                <div className={styles.tableHead}>
                    <div>Рекламодатели</div>
                    <div>Блогеры</div>
                    <div>Финансы</div>
                    <div>Чат</div>
                </div>
                <div className={styles.tableBody}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.tableBody}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.tableBody}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.tableBody}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Admin;
