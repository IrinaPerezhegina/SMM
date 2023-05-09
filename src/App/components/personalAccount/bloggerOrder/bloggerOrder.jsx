import React from "react";
import styles from "./bloggerOrder.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const BloggerOrder = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.bloggerOrder}>
                <div className={styles.links}>
                    <div className={styles.linksRight}>
                        <div>
                            <Link
                                to={"../blgprofile"}
                                className={styles.linksRightActive}
                            >
                                Блогер
                            </Link>
                        </div>
                        <div>
                            <Link to={"../blgprofile"}>Профиль</Link>
                        </div>
                    </div>
                    <div className={styles.linksMiddle}>
                        <div>
                            <Link to={"../advprofile"}>Рекламодатель</Link>
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
                <div className={styles.table}>
                    <div className={styles.tableHead}>
                        <div>Заказчик</div>
                        <div>Задание</div>
                        <div>Соцсеть</div>
                        <div>Регион</div>
                        <div>Сумма</div>
                        <div>Срок</div>
                        <div>Статус</div>
                        <div>Чат</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 1</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>100</div>
                        <div>01.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 2</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>200</div>
                        <div>02.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 3</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>300</div>
                        <div>03.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 4</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>400</div>
                        <div>04.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 5</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>500</div>
                        <div>05.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 6</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>600</div>
                        <div>06.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 7</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>700</div>
                        <div>07.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 8</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>800</div>
                        <div>08.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 9</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>900</div>
                        <div>09.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Компания 10</div>
                        <div>разместить фото и текст</div>
                        <div>Instagram</div>
                        <div>Москва</div>
                        <div>1000</div>
                        <div>10.03.2022</div>
                        <div>взять в работу</div>
                        <div>обсудить с заказчиком</div>
                    </div>
                </div>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default BloggerOrder;
