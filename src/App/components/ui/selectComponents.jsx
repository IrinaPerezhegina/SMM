import React from "react";
import styles from "../../scss/components/selectComponents.module.scss";

const SelectComponents = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.category}>
                <select>
                    <option>Категории</option>
                </select>
            </div>
            <div className={styles.brand}>
                <select>
                    <option>Бренды</option>
                </select>
            </div>
            <div className={styles.age}>
                <select>
                    <option>Возраст</option>
                </select>
            </div>
            <div className={styles.gender}>
                <select>
                    <option>Пол</option>
                </select>
            </div>
            <div className={styles.region}>
                <select>
                    <option>Регион</option>
                </select>
            </div>
        </div>
    );
};

export default SelectComponents;
