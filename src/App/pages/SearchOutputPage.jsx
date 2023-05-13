import React from "react";
import AccountCard from "../components/ui/accountСard";
import GroupComponent from "../components/ui/groupComponent";
import styles from "../scss/components/searchOutput.module.scss";
import Statistics from "../components/ui/statistics";

const SearchOutputPage = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            <div className={styles.wrapper}>
                <GroupComponent />

                <section className={styles.content}>
                    {arr.map((item) => (
                        <AccountCard key={item} />
                    ))}
                </section>
                <div className={styles.statistics}>
                    <Statistics />
                </div>
            </div>
        </>
    );
};

export default SearchOutputPage;
