import React from "react";
import styles from "./advertiserProfile.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const AdvertiserProfile = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.advertiserProfile}>
                <div className={styles.links}>
                    <div className={styles.linksRight}>
                        <div>
                            <Link to={"../blgprofile"}>Блогер</Link>
                        </div>
                        <div>
                            <Link
                                className={styles.linksRightActive}
                                to={"../blgprofile"}
                            >
                                Профиль
                            </Link>
                        </div>
                    </div>
                    <div className={styles.linksMiddle}>
                        <div>
                            <Link
                                to={"../advprofile"}
                                className={styles.linksMiddleActive}
                            >
                                Рекламодатель
                            </Link>
                        </div>
                        <div>
                            <Link to={"../blgfinance"}>Финансы</Link>
                        </div>
                    </div>
                    <div className={styles.linksLeft}>
                        <div></div>
                        <div>
                            <Link to={"../advorder"}>Заказы</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.change}>Изменить профиль</div>
                <form action="" className={styles.formProfile}>
                    <div className={styles.formProfileAdvertiser}>
                        <label htmlFor="advertiser">Рекламодатель</label>
                        <input type="text" name="advertiser" id="advertiser" />
                    </div>
                    <div className={styles.formProfileINN}>
                        <label htmlFor="inn">ИНН</label>
                        <input type="text" name="inn" id="inn" />
                    </div>
                    <div className={styles.formProfileAdress}>
                        <label htmlFor="adress">Адрес</label>
                        <input type="text" name="adress" id="adress" />
                    </div>
                    <div className={styles.formProfilePhone}>
                        <label htmlFor="phone">Телефон</label>
                        <input type="text" name="phone" id="phone" />
                    </div>
                    <div className={styles.formProfileEmail}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={styles.formProfileWeb}>
                        <label htmlFor="website">Website</label>
                        <input type="url" name="website" id="website" />
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

export default AdvertiserProfile;
