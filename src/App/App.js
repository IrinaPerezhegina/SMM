import React from "react";
import styles from "../App/scss/libs/index.scss";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
        </div>
    );
}

export default App;
