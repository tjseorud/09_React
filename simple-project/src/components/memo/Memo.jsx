/* --useState 활용해보기 */
import { useState } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

const StyledWrap = styled.div`
  width: 1000px;
  height: 800px;
  margin: auto;
  padding: 25px auto;
  border: 1px solid gray;
  border-radius: 10px;
`;
const StyledTitle = styled.h1`
  font-size: 30px;
  color: magenta;
  text-align: center;
`;
const StyledHr = styled.div`
  width: 100%;
  margin: 50px 0px;
  border: 1px solid #000;
`;
const StyledMemo = styled.div`
  width: 250px;
  height: 150px;
  margin: 20px;
  padding: 7px;
  display: inline-block;
  box-shadow: 0px 0px 1px 2px lightgreen;
  border: 1px solid yellow;
  border-radius: 2px;
  background-color: lightyellow;
`;
const StyledContent = styled.div`
  width: 90%;
  height: 60%;
  margin: auto;
  padding: 7px;
  font-width: 10px;
  text-align: center;
`;
const StyledWriter = styled.div`
  width: 90%;
  height: 20%;
  margin: auto;
  font-width: right;
  text-align: right;
`;

const Memo = () => {
  //AJAX요청을 잘보내서 응답을 받았다느 가정하에 메모들이 반환됨(Table에서 조회됨)
  const [memos, setMemos] = useState([
    { 
      writer: '짱구',
      content: '짱구는 못말려',
    },
    { 
      writer: '유리',
      content: '토끼?',
    },
    { 
      writer: '맹구',
      content: '돌 수집하자',
    },
    { 
      writer: '철수',
      content: '안녕하세요',
    },
  ]);
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  //state : 컴포넌트에서 사용할 변수
  //state의 변화가 일어나면 컴포넌트가 재렌더링
  //useState() => [value, setVlaue] == value 인자로 전달한 초기값의 식별자
  //                                == setValue value를 변경할 수 있는 setter함수                  
  const inputContentHandler = (e) => {
    setContent(e.target.value);
  };
  const inputWriterHandler = (e) => {
    setWriter(e.target.value);
  };
  //추가하기 클릭시 memoState에 새롭게 요소 추가할 핸들러
  const addMemo = () => {
    const memo = { writer: writer, content: content };
    setMemos([...memos, memo]);
    setContent('');
    setWriter('');
  };

  return (
    <StyledWrap>
      <StyledTitle>메모장</StyledTitle>
      <StyledHr />
      {
        memos ? memos.map((memo, i) => (
          <StyledMemo key={i}>
            <StyledContent>{memo.content}</StyledContent>
            <StyledWriter>{memo.writer}</StyledWriter>
          </StyledMemo>
        )) : (
          <h2>메모가 없습니다.</h2>
        )
      }
      <StyledHr />
      <div>
        <h4>내용을 입력해주세요.</h4>
        <input type="text" onChange={inputContentHandler} value={content} />
        <br />
      </div>
      <div>
        <h4>작성자를 입력해주세요.</h4>
        <input type="text" onChange={inputWriterHandler} value={writer} />
        <br />
      </div>
      <Button variant="info" onClick={addMemo}>추가하기</Button>
      
    </StyledWrap>
  )
};

export default Memo;
