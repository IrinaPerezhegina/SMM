import React from "react";
import styles from "../App/scss/libs/index.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
    return (
        <div className={styles.wrapper}>
            <Routes>
                <Route path="" element={<MainPage />} />
            </Routes>
            <Routes>
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

export default App;
