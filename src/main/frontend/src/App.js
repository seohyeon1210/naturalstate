import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [mainMessage, setmainMessage] = useState('')

  useEffect(() => {
    axios.get('/main')
        .then(response => setmainMessage(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <div>
        백엔드에서 가져온 데이터 확인 : {mainMessage}
      </div>
  );
}

export default App;