import React from "react";
import styles from "./bloggerProfile.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const BloggerProfile = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.bloggerProfile}>
                <div className={styles.links}>
                    <div className={styles.linksRight}>
                        <div>
                            <Link to={"../blgprofile"}>Блогер</Link>
                        </div>
                        <div>
                            <Link to={"../blgprofile"}>Профиль</Link>
                        </div>
                    </div>
                    <div className={styles.linksMiddle}>
                        <div>
                            <Link>Рекламодатель</Link>
                        </div>
                        <div>
                            <Link to={"../blgfinance"}>Финансы</Link>
                        </div>
                    </div>
                    <div className={styles.linksLeft}>
                        <div></div>
                        <div>
                            <Link to={"../blgorder"}>Заказы</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.change}>Изменить профиль</div>
                <form action="" className={styles.formProfile}>
                    <div className={styles.formProfileEmail}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={styles.formProfileName}>
                        <label htmlFor="name">Имя</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className={styles.formProfileSurname}>
                        <label htmlFor="surname">Фамилия</label>
                        <input type="text" name="surname" id="surname" />
                    </div>
                    <div className={styles.formProfileInst}>
                        <label htmlFor="instagram">Instagram</label>
                        <input
                            className={styles.formProfileInstFirst}
                            type="text"
                            name="instagram"
                            id="instagram"
                            placeholder="nickname"
                        />
                        <input
                            className={styles.formProfileInstLast}
                            type="text"
                            name="inst-price"
                            id="inst-price"
                            placeholder="цена за пост"
                        />
                        <button className={styles.formProfileInstAcc}>
                            Разрешить доступ к статистике <span>аккаунта</span>
                        </button>
                        <button className={styles.formProfileInstApi}>
                            Описать порядок работы api
                        </button>
                    </div>
                    <div className={styles.formProfileTik}>
                        <label htmlFor="Tiktok">Tiktok</label>
                        <input
                            className={styles.formProfileTikFirst}
                            type="text"
                            name="tiktok"
                            id="tiktok"
                            placeholder="nickname"
                        />
                        <input
                            className={styles.formProfileTikLast}
                            type="text"
                            name="tik-price"
                            id="tik-price"
                            placeholder="цена за пост"
                        />
                        <button className={styles.formProfileTikAcc}>
                            Разрешить доступ к статистике <span>аккаунта</span>
                        </button>
                        <button className={styles.formProfileTikApi}>
                            Описать порядок работы api
                        </button>
                    </div>
                    <div className={styles.formProfilePassword}>
                        <label htmlFor="password">Сменить пароль</label>
                        <input type="password" name="password" id="password" />
                    </div>
                </form>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default BloggerProfile;
