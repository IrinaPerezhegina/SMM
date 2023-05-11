import React from "react";
import styles from "./advertiserAcceptance.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const AdvertiserAcceptance = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.AdvertiserAcceptance}>
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
                <div className={styles.company}>
                    <Link>Компания № 1</Link>
                    <Link>Название компании</Link>
                    <Link>Дата</Link>
                </div>
                <div className={styles.table}>
                    <div className={styles.tableCheckbox}>
                        <div className={styles.tableHead}>
                            <div>Соцсеть</div>
                            <div>Блогер</div>
                            <div>Тематика</div>
                            <div>Подписчики</div>
                            <div>Кол-во постов</div>
                            <div>Кол-во лайков</div>
                            <div>Бюджет</div>
                            <div>Преобладающая эмоция</div>
                            <div>Цена за подписчика, руб</div>
                            <div>
                                <Link>Ссылка на пост</Link>
                            </div>
                            <div>Принять все</div>
                            <div>Чат с блогером</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Tiktok</div>
                            <div>Аня 1</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>100</div>
                            <div>радость (30%)</div>
                            <div>1</div>
                            <div>link 1</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Instagram</div>
                            <div>Аня 2</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>200</div>
                            <div>грусть (20%)</div>
                            <div>1</div>
                            <div>link 2</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Tiktok</div>
                            <div>Аня 3</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>300</div>
                            <div>радость (30%)</div>
                            <div>1</div>
                            <div>link 3</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Instagram</div>
                            <div>Аня 4</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>400</div>
                            <div>грусть (20%)</div>
                            <div>1</div>
                            <div>link 4</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Tiktok</div>
                            <div>Аня 5</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>500</div>
                            <div>радость (30%)</div>
                            <div>1</div>
                            <div>link 5</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Instagram</div>
                            <div>Аня 6</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>600</div>
                            <div>грусть (20%)</div>
                            <div>1</div>
                            <div>link 6</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Tiktok</div>
                            <div>Аня 7</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>700</div>
                            <div>радость (30%)</div>
                            <div>1</div>
                            <div>link 7</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Instagram</div>
                            <div>Аня 8</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>800</div>
                            <div> грусть (20%)</div>
                            <div>1</div>
                            <div>link 8</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                        <div className={styles.tableBody}>
                            <div>Tiktok</div>
                            <div>Аня 9</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>900</div>
                            <div>радость (30%)</div>
                            <div>1</div>
                            <div>link 7</div>
                            <div> кнопка</div>
                            <div>
                                {" "}
                                <Link to={"chat"}>чат</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.order}>
                    <span>Итого </span>
                    <h4>Сумма</h4>
                </div>
                <div className={styles.btn}>
                    <button>Принять</button>
                </div>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default AdvertiserAcceptance;
