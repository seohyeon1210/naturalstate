import React, { useEffect, useState } from 'react';
import MyButton from './MyButton';  // MyButton 컴포넌트 가져오기
import './customerService.css'; // CSS 파일 가져오기

function App() {
  return (
    <div className="App">
      <h1>안녕안녕 여긴 고객센터 페이지야</h1>
      <h2>여기선 문의를 할수있어</h2>
      <div id="root"></div>
      <MyButton />
    </div>
  );
}

export default App;