import "./Chapter01.css";
import { StyledP, StyledYellowP } from "./Chapter01.styles"; 
/*
  함수형 컴포넌트 사용시 주의할 점

  1. 함수형 컴포넌트에서 return시 반환할 ReactElement가
    두 개 이상이라면 반드시 하나 이상의 부모요소로 감싸주어야 함
*/
const Chapter01 = () => {
  const obj = {
    boardTitle: "제목",
    boardContent: "내용",
    boardWriter: "작성자",
    createDate: "작성일",
    boardNo: 1,
  };

  return (
    <>
      <p style={{ backgroundColor: "#00FFFF"}}>{obj.boardNo}</p>
      <p class="title">{obj.boardTitle}</p>
      <StyledP>{obj.boardContent}</StyledP>
      <p id="writer">{obj.boardWriter}</p>
      <StyledYellowP>{obj.createDate}</StyledYellowP>
    </>
  )
}

export default Chapter01;
