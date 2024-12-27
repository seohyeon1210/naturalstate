import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import MainBanner from './components/Main/MainBanner';
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [mainMessage, setMainMessage] = useState('');
    const location = useLocation(); // 현재 경로를 추적

    useEffect(() => {
        axios.get('/main')
            .then(response => setMainMessage(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Header />
            {location.pathname !== '/join' && (
                <>
                    <MainBanner />
                    <br />
                    <Main />
                    <div>
                        가장 먼저 보여지는 백엔드에서 가져온 데이터 확인 : {mainMessage}
                    </div>
                </>
            )}

            <Routes>
                <Route path="/join" element={<Join />} />
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