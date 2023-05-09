import React from "react";
import styles from "./advertiserOrder.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const AdvertiserOrder = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.AdvertiserOrder}>
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
                <div className={styles.change}>Разместить новый заказ</div>
                <div className={styles.table}>
                    <div className={styles.tableHead}>
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
                </div>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default AdvertiserOrder;
