import React from "react";
import styles from "./advertiserOrderChoice.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const AdvertiserOrderChoice = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.AdvertiserOrderChoice}>
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
                            <div className={styles.check}>
                                <label htmlFor="all">выбрать всех</label>
                                <input type="checkbox" name="all" id="all" />
                            </div>
                            <div>Соцсеть</div>
                            <div>Блогер</div>
                            <div>Тематика</div>
                            <div>Подписчики</div>
                            <div>Кол-во постов</div>
                            <div>Кол-во лайков</div>
                            <div>Преобладающая эмоция</div>
                            <div>Цена за пост, руб</div>
                            <div>Цена за подписчика, руб</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Tiktok</div>
                            <div>Аня 1</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>радость (30%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Instagram</div>
                            <div>Аня 2</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>грусть (20%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Tiktok</div>
                            <div>Аня 3</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>радость (30%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Instagram</div>
                            <div>Аня 4</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>грусть (20%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Tiktok</div>
                            <div>Аня 5</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>радость (30%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Instagram</div>
                            <div>Аня 6</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>грусть (20%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Tiktok</div>
                            <div>Аня 7</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>радость (30%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Instagram</div>
                            <div>Аня 8</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>грусть (20%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.item}>
                                <label htmlFor="1"></label>
                                <input type="checkbox" name="1" id="1" />
                            </div>
                            <div>Tiktok</div>
                            <div>Аня 9</div>
                            <div>еда</div>
                            <div>100</div>
                            <div>200</div>
                            <div>200</div>
                            <div>радость (30%)</div>
                            <div>100</div>
                            <div>1</div>
                        </div>
                    </div>
                </div>
                <div className={styles.order}>
                    <span>Сумма заказа </span>
                    <h4>40 000 руб.</h4>
                </div>
                <div className={styles.btn}>
                    <button>Заказать</button>
                </div>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default AdvertiserOrderChoice;
