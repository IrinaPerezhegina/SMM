import React from "react";
import styles from "../App/scss/libs/index.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import BloggerProfilePage from "./pages/BloggerProfilePage";
import BloggerFinancePage from "./pages/BloggerFinancePage";
import BloggerOrderPage from "./pages/BloggerOrderPage";
import AdvertiserProfilePage from "./pages/AdvertiserProfilePage";
import AdvertiserOrderPage from "./pages/AdvertiserOrderPage";
import AdvertiserNewOrderPage from "./pages/AdvertiserNewOrderPage";

function App() {
    return (
        <div className={styles.wrapper}>
            <Routes>
                <Route path="" element={<MainPage />} />
            </Routes>
            <Routes>
                <Route path="register" element={<RegisterPage />} />
            </Routes>
            <Routes>
                <Route path="login" element={<LoginPage />} />
            </Routes>
            <Routes>
                <Route path="blgprofile" element={<BloggerProfilePage />} />
            </Routes>
            <Routes>
                <Route path="blgfinance" element={<BloggerFinancePage />} />
            </Routes>
            <Routes>
                <Route path="blgorder" element={<BloggerOrderPage />} />
            </Routes>
            <Routes>
                <Route path="advprofile" element={<AdvertiserProfilePage />} />
            </Routes>
            <Routes>
                <Route path="advorder" element={<AdvertiserOrderPage />} />
            </Routes>
            <Routes>
                <Route
                    path="advneworder"
                    element={<AdvertiserNewOrderPage />}
                />
            </Routes>
        </div>
    );
}

export default App;
