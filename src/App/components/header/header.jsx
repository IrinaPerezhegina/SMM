import React from "react";
import styles from "./header.module.scss";
import BtnEnter from "../ui/btnEnter";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className={styles.wrapper}>
                <div className={styles.logo}>
                    <h4>SMMPlaneta</h4>
                    <h3>более 50000 блогеров</h3>
                </div>
                <div className={styles.link}>
                    <div>
                        <Link to={"/"}>Контакты</Link>
                    </div>
                    <div>
                        <Link to={"/"}> Зарегистрироваться</Link>
                    </div>
                    <Link to={"/"}>
                        <BtnEnter />
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Header;
