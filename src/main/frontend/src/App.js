import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import MainBanner from './components/Main/MainBanner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [mainMessage, setmainMessage] = useState('')

    useEffect(() => {
        axios.get('/main')
            .then(response => setmainMessage(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <div>
                <Header/>
            </div>

            <div>
                <MainBanner/>
            </div>

            <div>
                가장 먼저 보여지는 백엔드에서 가져온 데이터 확인 : {mainMessage}
            </div>
        </>
    );
}

export default App;