import React from 'react';
import './App.css';  // CSS 스타일 파일 가져오기

// MyButton 컴포넌트를 사용하려면 별도의 파일로 분리하거나 App.js 안에 포함시킬 수 있습니다.
import MyButton from './MyButton';  // MyButton 컴포넌트 가져오기

function App() {
  return (
    <div className="App">
      <h1>안녕안녕 여긴 고객센터 페이지야</h1>
      <h2>여기선 문의를 할수있어</h2>
      <MyButton />
    </div>
  );
}

export default App;
