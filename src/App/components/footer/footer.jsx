import React from "react";
import styles from "./footer.module.scss";
import telegram from "../../../App/assets/header/telegram.svg";
import phone from "../../../App/assets/header/phone.svg";
import viber from "../../../App/assets/header/viber.svg";

const Footer = () => {
    return (
        <>
            <footer className={styles.footerWrapper}>
                <div className={styles.footerCompany}>
                    <h2>О компании</h2>
                    <div className={styles.footerLinks}>
                        <ul>
                            <li>
                                <a href="#">Партнёрская программа</a>
                            </li>
                            <li>
                                <a href="#">Вакансии</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerMenu}>
                    <h2>Меню</h2>
                    <div className={styles.footerMenuLinks}>
                        <div>
                            <ul>
                                <li>
                                    <a href="#">Расчёт стоимости</a>
                                </li>
                                <li>
                                    <a href="#">Услуги</a>
                                </li>
                                <li>
                                    <a href="#">Виджеты</a>
                                </li>
                                <li>
                                    <a href="#">Интеграции</a>
                                </li>
                                <li>
                                    <a href="#">Наши клиенты</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href="#">Кейсы</a>
                                </li>
                                <li>
                                    <a href="#">Благодарственные письма</a>
                                </li>
                                <li>
                                    <a href="#">Сертификаты</a>
                                </li>
                                <li>
                                    <a href="#">Блог на Youtube</a>
                                </li>
                                <li>
                                    <a href="#">Вопрос / Ответ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerСontacts}>
                    <div>
                        <h2>Контакты</h2>
                    </div>
                    <div>
                        <span>+7 555 555-55-55</span>
                    </div>

                    <div className={styles.footerСontactsImg}>
                        <a href="#">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="#">
                            <img src={phone} alt="phone" />
                        </a>
                        <a href="#">
                            <img src={viber} alt="viber" />
                        </a>
                    </div>
                    <h4> Москва, Путевой проезд 3c1, к 902</h4>
                    <div className={styles.footerRules}>
                        <h6>©WELBEX 2022. Все права защищены.</h6>
                        <a className={styles.footerRulesLink}>
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
