import React from "react";
import styles from "./header.module.scss";
import BtnEnter from "../ui/btnEnter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getAuthUsername, logOut } from "../../store/user";

const Header = () => {
    const dispatch = useDispatch();
    const getLoggedIn = useSelector(getIsLoggedIn());
    const authUsername = useSelector(getAuthUsername());

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
                        {!getLoggedIn ? (
                            <Link to={"/register"}> Зарегистрироваться</Link>
                        ) : (
                            <span>{authUsername}</span>
                        )}
                    </div>
                    {!getLoggedIn ? (
                        <Link to={"/login"}>
                            <BtnEnter />
                        </Link>
                    ) : (
                        <button
                            className={styles.logOut}
                            onClick={() => dispatch(logOut())}
                        >
                            Выйти
                        </button>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
