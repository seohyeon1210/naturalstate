import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import MainBanner from "./components/Main/MainBanner";
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainAlert from "./components/Main/MainAlert";
import SecondHeader from "./components/Header/SecondHeader";
import Login from "./components/Login/Login";
import CustomerService from "./components/CustomerService/CustomerService";
import StoreJoin from "./components/Join/StoreJoin";
import PostForm from "./components/CustomerService/PostForm";
import Footer from "./components/Footer/Footer";
import "./components/Main/Main.css";
import Cart from "./components/Cart/Cart";
import DeliveryManage from "./components/DeliveryManagement/DeliveryManage";
import Terms from "./components/Terms/Terms";
import Report from "./components/Report/Report";
import ProductWrite from "./components/Product/ProductWrite";
import ProductDetail from "./components/Product/ProductDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestProduct from "./components/Product/BestProduct";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    // 로그인 상태를 관리
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    // 로그인 성공 시 호출
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // 로그아웃 시 호출
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
    };

    // Main 페이지에만 SecondHeader 표시
    const isMainPage = location.pathname === '/' || location.pathname === '/main';

    return (
        <div id="app-wrapper">
            <MainAlert />
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            {isMainPage && <SecondHeader />}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<><MainBanner /><Main /></>} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/storejoin" element={<StoreJoin />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/customerservice" element={<CustomerService />} />
                    <Route path="/post" element={<PostForm />} />
                    <Route path="/delivery" element={<DeliveryManage />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/productwrite" element={<ProductWrite />} />
                    <Route path="/productdetail" element={<ProductDetail />} />
                    <Route path="/bestproduct" element={<BestProduct/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
