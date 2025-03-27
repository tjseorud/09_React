import './App.css';
import WhatIsReact from './components/chapter/WhatIsReact';
import WhatIsJSX from './components/chapter/WhatIsJSX';
import Chapter01 from './components/chapter/chapter01/Chapter01';
import Chapter02 from './components/chapter/chapter02/Chapter02';
import Chapter022 from './components/chapter/chapter02/Chapter02-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './templet/header/Header';
import Footer from './templet/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Chapter03 from './components/chapter/chapter03/Chapter03';
import Chapter03Input from './components/chapter/chapter03/Chapter03Input';
import NavBar from './templet/navbar/Navbar';
import Chapter03B from './components/chapter/chapter03/Chapter03B';
import Memo from './components/memo/Memo';
import Foods from './components/busan/Foods';
import FoodDetail from './components/busan/FoodDetail';

/*
  URL을 이용해서
  url이 /chapter01일 경우 Chapter01 컴포넌트를 보여주고
        /chapter02일 경우 Chapter02 컴포넌트를 보여주고
        /일 경우 메인화면을 보여주고
  요청 url에 따라서

  터미널 : npm install react-router-dom
*/

function App() { 
  return (
    <>
      { false && <WhatIsJSX /> }
      {/* 주석! */}
      { false && <Chapter01 /> && <Chapter02 /> && <Chapter022 /> }

      <Header />
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<WhatIsReact />} />
        <Route path="/chap01" element={<Chapter01 />} />
        <Route path="/chap02" element={<Chapter02 />} />
        <Route path="/chap022" element={<Chapter022 />} />
        <Route path="/chap03" element={<Chapter03 />} />
        <Route path="/input" element={<Chapter03Input />} />
        <Route path="/chap03b" element={<Chapter03B />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods/:id" element={<FoodDetail />} />
        
        <Route path="/*" element={<h1>존재하지 않는 페이지 요청입니다.</h1>} />
      </Routes>      
      <Footer />

    </>
  )
}

export default App
