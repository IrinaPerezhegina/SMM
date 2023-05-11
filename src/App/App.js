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
import AdvertiserFinancePage from "./pages/AdvertiserFinancePage";
import AdvertiserOrderChoicePage from "./pages/AdvertiserOrderChoicePage";
import AdvertiserAcceptancePage from "./pages/AdvertiserAcceptancePage";
import AdvertiserChatPage from "./pages/AdvertiserChatPage";

function App() {
    return (
        <div className={styles.wrapper}>
            <Routes>
                <Route path="" element={<MainPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="blgprofile" element={<BloggerProfilePage />} />
                <Route path="blgfinance" element={<BloggerFinancePage />} />
                <Route path="blgorder" element={<BloggerOrderPage />} />
                <Route path="advprofile" element={<AdvertiserProfilePage />} />
                <Route path="advorder" element={<AdvertiserOrderPage />} />
                <Route
                    path="advneworder"
                    element={<AdvertiserNewOrderPage />}
                />
                <Route
                    path="advneworder/choice"
                    element={<AdvertiserOrderChoicePage />}
                />
                <Route path="advfinance" element={<AdvertiserFinancePage />} />
                <Route
                    path="advneworder/advacceptance"
                    element={<AdvertiserAcceptancePage />}
                />
                <Route
                    path="advneworder/advacceptance/chat"
                    element={<AdvertiserChatPage />}
                />
            </Routes>
        </div>
    );
}

export default App;
