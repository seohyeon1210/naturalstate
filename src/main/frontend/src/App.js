import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import MainBanner from './components/Main/MainBanner';
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainAlert from "./components/Main/MainAlert";
import SecondHeader from "./components/Header/SecondHeader";
import Login from "./components/Login/Login";
import CustomerService from "./components/CustomerService/CustomerService";
import StoreJoin from "./components/Join/StoreJoin";
import PostForm from "./components/customerService/PostForm";
import Footer from "./components/Footer/Footer";
import "./components/Main/Main.css"
import Cart from "./components/Cart/Cart";
import Delivery from "./components/deliveryManagement/deliveryManage";
import Terms from "./components/terms/terms";


function App() {
    const [mainMessage, setMainMessage] = useState('');
    const location = useLocation();

    useEffect(() => {
        axios.get('/main')
            .then(response => setMainMessage(response.data))
            .catch(error => console.log(error));
        window.scrollTo(0, 0);
    }, []);

    const isMainPage = location.pathname === '/' || location.pathname === '/main';

    return (
        <div id="app-wrapper">
            <MainAlert/>
            <Header/>
            {isMainPage && <SecondHeader/>}
            <div className="main-content">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <MainBanner/>
                                <br/>
                                <Main/>
                                <div>
                                    가장 먼저 보여지는 백엔드에서 가져온 데이터 확인: {mainMessage}
                                </div>
                            </>
                        }
                    />
                    <Route path="/storejoin" element={<StoreJoin/>}/>
                    <Route path="/join" element={<Join/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/customerservice" element={<CustomerService/>}/>
                    <Route path="/post" element={<PostForm/>}/>
                    <Route path="delivery" element={<deliveryManage/>}/>
                    <Route path="terms" element={<terms/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App/>
        </Router>
    );
}
