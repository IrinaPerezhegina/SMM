import React from "react";
import styles from "./login.module.scss";
import GroupComponent from "../ui/groupComponent";
import Statistics from "../ui/statistics";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className={styles.wrapper}>
            <GroupComponent />
            <div className={styles.login}>
                <span>Вход</span>
                <form className={styles.loginForm}>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="пароль"
                        />
                    </div>
                    <Link to={"../blgprofile"}>
                        <button>Войти</button>
                    </Link>
                    <div className={styles.link}>
                        <Link>Забыли пароль?</Link>
                        <Link>Восстановить</Link>
                    </div>
                </form>
            </div>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </section>
    );
};

export default Login;
