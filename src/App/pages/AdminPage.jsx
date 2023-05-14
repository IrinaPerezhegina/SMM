import React from "react";
import GroupComponent from "../components/ui/groupComponent";
import styles from "../scss/components/admin.module.scss";
import Admin from "../components/admin";
import Statistics from "../components/ui/statistics";
const AdminPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <GroupComponent />
                <Admin />
                <div className={styles.statistics}>
                    <Statistics />
                </div>
            </div>
        </>
    );
};

export default AdminPage;
