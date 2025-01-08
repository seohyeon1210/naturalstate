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
import DeliveryPopup from "./components/DeliveryManagement/DeliveryPopup";
import Terms from "./components/Terms/Terms";
import Report from "./components/Report/Report";
import ProductWrite from "./components/Product/ProductWrite";
import ProductDetail from "./components/Product/ProductDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestProduct from "./components/Product/BestProduct";
import Event from "./components/CustomerService/Event";
import Notice from "./components/CustomerService/Notice";
import Inquiry from "./components/CustomerService/Inquiry";
import DeliveryList from "./components/DeliveryManagement/DeliveryList";
import WebTerms from "./components/Terms/WebTerms";
import RecommendedProduct from "./components/Product/RecommendedProduct";
import FruitsProduct from "./components/Product/FruitsProduct";
import GrainsProduct from "./components/Product/GrainsProduct";
import VegetablesProduct from "./components/Product/VegetablesProduct";

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
                    <Route path="/deliverypopup" element={<DeliveryPopup />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/productwrite" element={<ProductWrite />} />
                    <Route path="/productdetail" element={<ProductDetail />} />
                    <Route path="/bestproduct" element={<BestProduct/>}/>
                    <Route path="/recommendedproduct" element={<RecommendedProduct/>}/>
                    <Route path="/fruitsproduct" element={<FruitsProduct/>}/>
                    <Route path="/grainsproduct" element={<GrainsProduct/>}/>
                    <Route path="/vegetablesproduct" element={<VegetablesProduct/>}/>
                    <Route path="/events" element={<Event/>}/>
                    <Route path="/notice" element={<Notice/>}/>
                    <Route path="/Inquiry" element={<Inquiry/>}/>
                    <Route path="/deliverylist" element={<DeliveryList/>}/>
                    <Route path="/webterms" element={<WebTerms/>}/>
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
