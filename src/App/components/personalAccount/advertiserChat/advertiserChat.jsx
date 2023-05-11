import React from "react";
import styles from "./advertiserChat.module.scss";
import GroupComponent from "../../ui/groupComponent";
import Statistics from "../../ui/statistics";
import { Link } from "react-router-dom";

const AdvertiserChat = () => {
    return (
        <div className={styles.wrapper}>
            <GroupComponent />
            <section className={styles.AdvertiserChat}>
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
                    <div className={styles.tableHead}>
                        <div>Соцсеть</div>
                        <div>Блогер</div>
                        <div>Тематика</div>
                        <div>Подписчики</div>
                        <div>Кол-во постов</div>
                        <div>Кол-во лайков</div>

                        <div>Преобладающая эмоция</div>
                        <div>Цена за подписчика, руб</div>
                        <div>
                            <Link>Ссылка на пост</Link>
                        </div>
                        <div>Принять все</div>
                    </div>
                    <div className={styles.tableBody}>
                        <div>Tiktok</div>
                        <div>Аня 1</div>
                        <div>еда</div>
                        <div>100</div>
                        <div>200</div>
                        <div>200</div>
                        <div>радость (30%)</div>
                        <div>1</div>

                        <div>link 1</div>

                        <div className={styles.check}>
                            <label htmlFor="1"></label>
                            <input type="checkbox" name="all" id="all" />
                        </div>
                    </div>
                </div>

                <form className={styles.chat}>
                    <div className={styles.chatData}>
                        <label htmlFor="chat">Чат</label>
                        <textarea
                            id="chat"
                            name="chat"
                            placeholder="блогер-клиент"
                        ></textarea>
                    </div>
                    <div className={styles.chatActions}>
                        <label htmlFor="input-file">
                            <input
                                type="file"
                                name="input-file"
                                id="input-file"
                            />
                            <span>Прикрепить файл</span>
                        </label>
                        <button>Отправить</button>
                    </div>
                </form>
            </section>
            <div className={styles.statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default AdvertiserChat;
