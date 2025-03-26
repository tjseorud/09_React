import './App.css'
import Button from './components/modules/Button';
import FirstComponent from './components/modules/FirstComponent';
import { Lego, Gole } from "./components/modules/LegoAndGole";
import WhatIsReact from './components/chapter/WhatIsReact';
import WhatIsJSX from './components/chapter/WhatIsJSX';
import Chapter01 from './components/chapter/chapter01/Chapter01';
import Chapter02 from './components/chapter/chapter02/Chapter02';
import Chapter022 from './components/chapter/chapter02/Chapter02-2';

function App() { 
  return (
    <>
      { false && <WhatIsReact /> && <WhatIsJSX /> }
      {/* 주석! */}
      {/* <Chapter01 /> */}
      <Chapter02 />
      {/* <Chapter022 /> */}
    </>
  )
}

export default App
