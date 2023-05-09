import React from "react";
import styles from "./advertiserNewOrder.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const AdvertiserNewOrder = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.AdvertiserNewOrder}>
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
                            <Link to={"../blgorder"}>Заказы</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.change} to={"../advneworder"}>
                    <Link to={"../advneworder"}>Разместить новый заказ</Link>
                </div>
                <form>
                    <div className={styles.formDataOrder}>
                        <label htmlFor="orderNumber">№ заказа</label>
                        <input
                            type="number"
                            name="orderNumber"
                            id="orderNumber"
                            placeholder="1"
                        />
                    </div>
                    <div className={styles.formDataCompany}>
                        <label htmlFor="company">Компания</label>
                        <input type="text" name="company" id="company" />
                    </div>
                    <div className={styles.formDataRegion}>
                        <label htmlFor="region">Регион</label>
                        <input type="text" name="region" id="region" />
                    </div>
                    <div className={styles.formDataDate}>
                        <label htmlFor="date">Срок исполнения</label>
                        <input
                            type="text"
                            name="date"
                            id="date"
                            placeholder="01.03.2022"
                        />
                    </div>
                    <div className={styles.formDataTask}>
                        <label htmlFor="task">Задание</label>
                        <input type="text" name="task" id="task" />
                    </div>
                    <div className={styles.formDataPhoto}>
                        <label htmlFor="photo">Фото</label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            placeholder="загрузить"
                        />
                    </div>
                    <div className={styles.formDataVideo}>
                        <label htmlFor="video">Видео</label>
                        <input
                            type="text"
                            name="video"
                            id="video"
                            placeholder="загрузить"
                        />
                    </div>
                    <div className={styles.formDataSocial}>
                        <label htmlFor="social">Соцсети</label>
                        <input type="url" name="social" id="social" />
                    </div>
                    <div className={styles.formDataAmount}>
                        <label htmlFor="amount">Сумма, руб.</label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            placeholder="20 000"
                        />
                    </div>
                    <div className={styles.formDataCount}>
                        <label htmlFor="count">Кол-во блогеров</label>
                        <input
                            type="number"
                            name="count"
                            id="count"
                            placeholder="10"
                        />
                    </div>
                    <div className={styles.formDataScope}>
                        <label htmlFor="scope">Охват</label>
                        <input
                            type="number"
                            placeholder="500"
                            name="scope"
                            id="scope"
                        />
                    </div>
                    <div className={styles.formDataBtn}>
                        <button>Разместить заказ</button>
                        <Link to={"choice"}>Выбрать блогеров</Link>
                    </div>
                </form>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default AdvertiserNewOrder;
