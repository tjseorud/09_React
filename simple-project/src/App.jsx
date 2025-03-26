import Button from './components/modules/Button';
import FirstComponent from './components/modules/FirstComponent';
import { Lego, Gole } from "./components/modules/LegoAndGole";
import WhatIsReact from './components/chapter/WhatIsReact';
import WhatIsJSX from './components/chapter/WhatIsJSX';
import Chapter01 from './components/chapter/chapter01/Chapter01';
import Chapter02 from './components/chapter/chapter02/Chapter02';
import Chapter022 from './components/chapter/chapter02/Chapter02-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './templet/header/Header';
import Footer from './templet/footer/Footer';
import NavBar from './templet/navbar/Navbar';

function App() { 
  return (
    <>
      { false && <WhatIsReact /> && <WhatIsJSX /> }
      {/* 주석! */}
      { false && <Chapter01 /> && <Chapter02 /> && <Chapter022 /> }

      {/* <Header /> */}
      <NavBar />
      <Footer />

    </>
  )
}

export default App
