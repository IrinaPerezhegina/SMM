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
                        <Link>Выбрать блогеров</Link>
                    </div>
                </form>
                {/* <div className={styles.tableHead}>
                        <div>Название компании</div>
                        <div>Бюджет</div>
                        <div>Дата</div>
                        <div>Соцсеть</div>
                        <div>Статус исполнения</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 1</div>
                        <div>100</div>
                        <div>01.12.2022</div>
                        <div>Tiktok</div>
                        <div>100%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 2</div>
                        <div>200</div>
                        <div>01.12.2022</div>
                        <div>Instagram</div>
                        <div>90%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 3</div>
                        <div>300</div>
                        <div>01.12.2022</div>
                        <div>Tiktok+Instagram</div>
                        <div>80%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 4</div>
                        <div>400</div>
                        <div>01.12.2022</div>
                        <div>Tiktok</div>
                        <div>70%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 5</div>
                        <div>500</div>
                        <div>01.12.2022</div>
                        <div>Instagram</div>
                        <div>60%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 6</div>
                        <div>600</div>
                        <div>01.12.2022</div>
                        <div>Tiktok+Instagram</div>
                        <div>50%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 7</div>
                        <div>700</div>
                        <div>01.12.2022</div>
                        <div>Tiktok</div>
                        <div>40%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 8</div>
                        <div>800</div>
                        <div>01.12.2022</div>
                        <div>Tiktok+Instagram</div>
                        <div>30%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 9</div>
                        <div>900</div>
                        <div>01.12.2022</div>
                        <div>Instagram</div>
                        <div>20%</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Заказ 10</div>
                        <div>1000</div>
                        <div>01.12.2022</div>
                        <div>Tiktok</div>
                        <div>10%</div>
                    </div>
                </div> */}
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default AdvertiserNewOrder;
