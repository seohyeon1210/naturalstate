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
import PostForm from "./components/customerService/PostForm"; // PostForm 컴포넌트로 변경


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
        <>
            <MainAlert />
            <Header />
            {isMainPage && <SecondHeader />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <MainBanner />
                            <br />
                            <Main />
                            <div>
                                가장 먼저 보여지는 백엔드에서 가져온 데이터 확인: {mainMessage}
                            </div>
                        </>
                    }
                />
                <Route path="/storejoin" element={<StoreJoin />} />
                <Route path="/join" element={<Join />} />
                <Route path="/login" element={<Login />} />
                <Route path="/customerservice" element={<CustomerService />} />
                <Route path="/post" element={<PostForm />} />      /*PostForm URL 매핑 (/post로 매핑) */
            </Routes>
        </>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
