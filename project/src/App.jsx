import { Routes, Route } from 'react-router-dom';
// import './App.css'
import Header from './templet/include/header/Header'
import Footer from './templet/include/footer/Footer'
import SignUp from './templet/include/member/SignUp';
import MyPage from './templet/include/member/MyPage';
import BoardList from './templet/include/board/BoardList';

function App() {

  return (
    <>
      <Header />
      <Routes>{/* 링크! */}
        <Route path="/" element={<div>Project</div>} />
        <Route path="/board" element={<BoardList/>} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/myPage" element={<MyPage />} />
        <Route path="/logout" element={<div>logout</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
