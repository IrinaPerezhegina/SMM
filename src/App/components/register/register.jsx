import React from "react";
import styles from "./register.module.scss";
import GroupComponent from "../ui/groupComponent";
import Statistics from "../ui/statistics";

const Register = () => {
    return (
        <section className={styles.wrapper}>
            <GroupComponent />
            <div className={styles.register}>
                <span>Регистрация</span>
                <form className={styles.registerForm}>
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
                            placeholder="пароль 1"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password-check"
                            id="password"
                            placeholder="пароль 2"
                        />
                    </div>
                    <button>Зарегистрироваться</button>
                </form>
            </div>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </section>
    );
};

export default Register;
