import React from "react";
import styles from "../../scss/components/accountCard.module.scss";
import card from "../../assets/main/cardPhoto.png";
const AccountCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={card} alt="card" />
            </div>
            <div className={styles.cardData}>
                <span>Аккаунт</span>
                <span>Кол-во подписчиков: </span>
                <span>Кол-во лайков: </span>
                <span>Кол-во постов</span>
                <span>Дата создания:</span>
            </div>
        </div>
    );
};

export default AccountCard;
