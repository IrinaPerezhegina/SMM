import React from "react";
import styles from "./advertiserFinance.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const AdvertiserFinance = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.advertiserFinance}>
                <div className={styles.links}>
                    <div className={styles.linksRight}>
                        <div>
                            <Link to={"../blgprofile"}>Блогер</Link>
                        </div>
                        <div>
                            <Link
                                className={styles.linksRightActive}
                                to={"../advprofile"}
                            >
                                Профиль
                            </Link>
                        </div>
                    </div>
                    <div className={styles.linksMiddle}>
                        <div>
                            <Link to={"../advfinance"}>Рекламодатель</Link>
                        </div>
                        <div>
                            <Link to={"../advfinance"}>Финансы</Link>
                        </div>
                    </div>
                    <div className={styles.linksLeft}>
                        <div></div>
                        <div>
                            <Link to={"../advorder"}>Заказы</Link>
                        </div>
                    </div>
                </div>
                <form action="" className={styles.formFinance}>
                    <div className={styles.formFinanceTime}>
                        <label htmlFor="time">Период</label>
                        <input
                            type="text"
                            name="time"
                            placeholder="с начала года"
                            id="time"
                        />
                    </div>
                    <div className={styles.formFinanceСoming}>
                        <label htmlFor="coming">Приход</label>
                        <input
                            type="text"
                            name="coming"
                            id="coming"
                            placeholder="6 600 руб."
                        />
                    </div>
                    <div className={styles.formFinanceExpenditure}>
                        <label htmlFor="expenditure">Расход</label>
                        <input
                            type="text"
                            name="expenditure"
                            id="expenditure"
                            placeholder="5 450 руб."
                        />
                    </div>
                    <div className={styles.formFinanceBalance}>
                        <label htmlFor="balance">Баланс</label>
                        <input
                            type="text"
                            placeholder="1 150 руб."
                            name="balance"
                            id="balance"
                        />
                    </div>
                    <div className={styles.formFinancePayment}>
                        <label htmlFor="payment">Оплатить</label>
                        <input type="text" name="payment" id="payment" />
                    </div>
                </form>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default AdvertiserFinance;
