import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import GroupComponent from "../ui/groupComponent";
import Statistics from "../ui/statistics";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, signIn } from "../../store/user";
import * as yup from "yup";

const nameRegex = /^[a-zA-Z0-9._@+-]*$/;
const validateSchema = yup.object().shape({
    password: yup
        .string()
        .required(`Поле 'Password' обязательно для заполнения`)
        .min(8),
    username: yup
        .string()
        .required(`Поле 'Username' обязательно для заполнения`)
        .matches(nameRegex, "Только буквы, цифры и символы @/./+/-/_.")
        .max(150)
});

const Login = () => {
    const dispatch = useDispatch();
    const registerError = useSelector(getAuthErrors());
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    console.log(registerError);

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        validateSchema
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));

        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return e;
        dispatch(signIn(data));
    };
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    return (
        <section className={styles.wrapper}>
            <GroupComponent />
            <div className={styles.login}>
                <span>Вход</span>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div>
                        <input
                            onChange={handleChange}
                            value={data.username}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="username"
                        />
                        <div
                            className={
                                errors.username
                                    ? styles.inputError
                                    : "invalid-feedback"
                            }
                        >
                            {errors.username}
                        </div>
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            value={data.password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="пароль"
                        />
                        <div
                            className={
                                errors.password
                                    ? styles.inputError
                                    : "invalid-feedback"
                            }
                        >
                            {errors.password}
                        </div>
                    </div>
                    {registerError && (
                        <p className={styles.loginError}>{registerError}</p>
                    )}

                    <input disabled={!isValid} type="submit" value="Войти" />

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
