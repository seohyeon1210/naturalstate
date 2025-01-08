import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// CSS import
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/Main/Main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Header, Footer import
import Header from "./components/Header/Header";
import MainBanner from "./components/Main/MainBanner";
import SecondHeader from "./components/Header/SecondHeader";
import Footer from "./components/Footer/Footer";

// Main, User import
import MainAlert from "./components/Main/MainAlert";
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import Login from "./components/Login/Login";
import StoreJoin from "./components/Join/StoreJoin";

// CustomerService import
import CustomerService from "./components/CustomerService/CustomerService";
import PostForm from "./components/CustomerService/PostForm";
import WebTerms from "./components/Terms/WebTerms";
import Terms from "./components/Terms/Terms";
import Report from "./components/Report/Report";
import Event from "./components/CustomerService/Event";
import Notice from "./components/CustomerService/Notice";
import Inquiry from "./components/CustomerService/Inquiry";

// Cart import
import Cart from "./components/Cart/Cart";

// Product import
import ProductWrite from "./components/Product/ProductWrite";
import ProductDetail from "./components/Product/ProductDetail";
import BestProduct from "./components/Product/BestProduct";
import RecommendedProduct from "./components/Product/RecommendedProduct";
import FruitsProduct from "./components/Product/FruitsProduct";
import GrainsProduct from "./components/Product/GrainsProduct";
import VegetablesProduct from "./components/Product/VegetablesProduct";

// User mypage import
import Mypage from "./components/Mypage/Mypage";
import DeliveryList from "./components/Mypage/DeliveryList";
import ProductPage from "./components/Product/ProductPage";

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
    const isMainPage = location.pathname === '/' || location.pathname === '/main' || location.pathname === '/productpage' || location.pathname === '/bestproduct' || location.pathname === '/recommendedproduct' || location.pathname === '/fruitsproduct' || location.pathname === '/grainsproduct' || location.pathname === '/vegetablesproduct';

    return (
        <div id="app-wrapper">
            <MainAlert />
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            {isMainPage && <SecondHeader />}
            <div className="main-content">
                <Routes>
                    {/*메인*/}
                    <Route path="/" element={<><MainBanner /><Main /></>} />

                    {/*회원가입, 로그인, 입점신청*/}
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/storejoin" element={<StoreJoin />} />
                    
                    {/*고객센터*/}
                    <Route path="/customerservice" element={<CustomerService />} />
                    <Route path="/post" element={<PostForm />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/events" element={<Event/>}/>
                    <Route path="/notice" element={<Notice/>}/>
                    <Route path="/inquiry" element={<Inquiry/>}/>
                    <Route path="/webterms" element={<WebTerms/>}/>
                    
                    {/*상품*/}
                    <Route path="/productwrite" element={<ProductWrite />} />
                    <Route path="/productdetail" element={<ProductDetail />} />
                    <Route path="/productpage" element={<ProductPage/>}/>
                    <Route path="/bestproduct" element={<BestProduct/>}/>
                    <Route path="/recommendedproduct" element={<RecommendedProduct/>}/>
                    <Route path="/fruitsproduct" element={<FruitsProduct/>}/>
                    <Route path="/grainsproduct" element={<GrainsProduct/>}/>
                    <Route path="/vegetablesproduct" element={<VegetablesProduct/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    
                    {/*마이페이지*/}
                    <Route path="/mypage/*" element={<Mypage />} />
                    <Route path="/mypage/deliverylist" element={<DeliveryList />} />

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
