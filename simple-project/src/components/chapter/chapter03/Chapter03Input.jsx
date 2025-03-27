import { use, useState } from "react";


const Chapter03Input = () => {
  //사용자가 값을 입력할때 마다
  //적절한 메시지를 화면에 출력
  const [message, setMessage] = useState("값을 입력해주세요.");
  const [text, setText] = useState('');
  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setText(e.target.value);

    if(e.target.value.length > 10) {
      setMessage("너무 길어요.");
    } else{
      setMessage('');
    }
  };

  return (
    <>
      <h1>값을 입력받는 경우</h1>
      <input type="text" onChange={inputTextHandler} />
      <br />
      <span>입력한 값 : {text}</span>  
      <br />
      <span>안내메시지 : {message}</span>  
    </>
  );
};

export default Chapter03Input;
