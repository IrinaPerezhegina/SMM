import React, { useEffect, useState } from "react";
import styles from "./register.module.scss";
import GroupComponent from "../ui/groupComponent";
import Statistics from "../ui/statistics";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { getAuthErrors, getIsLoggedIn, signUp } from "../../store/user";
import { useNavigate } from "react-router-dom";

const nameRegex = /^[a-zA-Z0-9._@+-]*$/;
const nameRegexPassword = /^(?=.*[a-z])/;
const validateSchema = yup.object().shape({
    role: yup.string().required(`Поле 'Role' обязательно для заполнения`),
    username: yup
        .string()
        .required(`Поле 'Username' обязательно для заполнения`)
        .matches(nameRegex, "Только буквы, цифры и символы @/./+/-/_.")
        .max(150),
    password2: yup
        .string()
        .required(`Поле 'Password' обязательно для заполнения`)
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    password: yup
        .string()
        .required(`Поле 'Password' обязательно для заполнения`)
        .min(8, "Минимальная длина 8 символов")
        .matches(nameRegexPassword, "Пароль должен содержать строчную букву"),
    last_name: yup
        .string()
        .required(`Поле 'Surname' обязательно для заполнения`),
    first_name: yup.string().required(`Поле 'Name' обязательно для заполнения`),
    email: yup
        .string()
        .required(`Поле 'Email' обязательно для заполнения`)
        .email()
});

const Register = () => {
    const isLogged = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registerError = useSelector(getAuthErrors());
    const [data, setData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
        username: "",
        role: ""
    });

    useEffect(() => {
        if (isLogged) {
            navigate(-1);
        }
    }, [isLogged]);
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
        dispatch(signUp(data));
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
            <div className={styles.register}>
                <span>Регистрация</span>
                <form className={styles.registerForm} onSubmit={handleSubmit}>
                    <div>
                        <input
                            onChange={handleChange}
                            value={data.email}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                        />
                        <div
                            className={
                                errors.email
                                    ? styles.inputError
                                    : "invalid-feedback"
                            }
                        >
                            {errors.email}
                        </div>
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            value={data.first_name}
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="Name"
                        />
                        <div
                            className={
                                errors.first_name
                                    ? styles.inputError
                                    : "invalid-feedback"
                            }
                        >
                            {errors.first_name}
                        </div>
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            value={data.last_name}
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Surname"
                        />
                        <div
                            className={
                                errors.last_name
                                    ? styles.inputError
                                    : "invalid-feedback"
                            }
                        >
                            {errors.last_name}
                        </div>
                    </div>

                    <div>
                        <input
                            onChange={handleChange}
                            value={data.password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="пароль 1"
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
                    <div>
                        <input
                            onChange={handleChange}
                            value={data.password_check}
                            type="password"
                            name="password2"
                            id="password2"
                            placeholder="пароль 2"
                        />
                        <div
                            className={
                                errors.password2
                                    ? styles.inputError
                                    : "invalid-feedback"
                            }
                        >
                            {errors.password2}
                        </div>
                    </div>
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
                    <div className={styles.registerSelect}>
                        <select
                            onChange={handleChange}
                            value={data.value}
                            id="role"
                            name="role"
                        >
                            <option value="">role</option>
                            <option value={"blogger"}>Blogger</option>
                            <option value={"advertiser"}>Advertiser</option>
                        </select>
                        <div
                            className={
                                errors.role
                                    ? styles.inputError
                                    : "invalid-feedback"
                            }
                        >
                            {errors.role}
                        </div>
                    </div>
                    {registerError &&
                        registerError.map((item) => (
                            <p className={styles.registerError} key={item}>
                                {item}
                            </p>
                        ))}
                    <input
                        disabled={!isValid}
                        type="submit"
                        value="Зарегистрироваться"
                    />
                </form>
            </div>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </section>
    );
};

export default Register;
