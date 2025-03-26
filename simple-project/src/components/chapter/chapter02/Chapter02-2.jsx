const ChildComponent = (props) => {
  console.log(props);
  return (
    <>
      <p>조심할점</p>
      {props.name}
      <p>공부하기</p>
    </>
  )
}

const Chapter022 = () => {
  /* 
    주의할 점

    React의 함수 컴포넌트는 항상 Pure해야 하기 때문에 절대로 props값을 변경해선 안됨!

    React의 사용목적 : WEB 애플리케이션의 UI(User Interface) => MVC(V) 
        필요한 값 입력받기, 요청 보내기, 요청 결과출력  만들용도로 사용
  */
  return (
    <>
      <ChildComponent name={1} age={15}/>
      <ChildComponent name={2} age={20}/>
    </>
  )
}

export default Chapter022;
