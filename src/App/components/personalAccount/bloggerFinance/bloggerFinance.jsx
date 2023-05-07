import React from "react";
import styles from "./bloggerFinance.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const BloggerFinance = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.bloggerFinance}>
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
                            <Link>Рекламодатель</Link>
                        </div>
                        <div>
                            <Link className={styles.linksMiddleActive}>
                                Финансы
                            </Link>
                        </div>
                    </div>
                    <div className={styles.linksLeft}>
                        <div></div>
                        <div>
                            <Link to={"../blorder"}>Заказы</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.change}>Изменить профиль</div>
                <form action="" className={styles.formFinance}>
                    <div className={styles.formFinanceBalance}>
                        <label htmlFor="balance">Ваш балансе</label>
                        <input type="number" name="balance" id="balance" />
                    </div>
                    <div className={styles.formFinanceInsert}>
                        <label htmlFor="insert">Внести деньги</label>
                        <input type="number" name="insert" id="insert" />
                    </div>
                    <div className={styles.formFinanceTakeout}>
                        <label htmlFor="takeout">Вывести деньги</label>
                        <input type="number" name="takeout" id="takeout" />
                    </div>
                    <div className={styles.formFinanceExtract}>
                        <label htmlFor="extract">Выписка</label>
                        <input type="number" name="extract" id="extract" />
                    </div>
                </form>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default BloggerFinance;
