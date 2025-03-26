const WhatIsJSX = () => {
  return (
    <>
      <h2>JSX란?</h2>
      <pre>
        JSX(JavaScriptXML)는 JavaScript + XML을 사용한 JavaScript 확장 문법
        <br />
        리엑트 문법 : React.createElement('h1', null, 'Hello, React!')<br />
        JSX 문법 : &lt;h1&gt;Hello, React!&lt;/h1&gt; <br />
        JSX문법을 사용해서 JavaScript코드를 내부에서 Reaclt의 "Element"를 생성할 수 있으며, <br />
        JavaScript의 모든 기능을 이용할 수 있고, U.I를 구현할 때 Reaclt와 함께 사용하길 권장됨
        <hr />
        ReactElement란?
        <br />
        Component의 구성하는 요소 <br />
        화면에 만들어내고 싶은(기술할) 요소를 작성하여 Reaclt가 브라우저에 렌더링할 수 있게 해줌
        <br />
        특징 : 불변객체 
        <br /><br />

        React는 index.html파일 안에 있는 root라는 id속성값을 가진 div요소 안에서 모든 요소를 관리
        <br />
        main.jsx에서 root.render()를 호출해서 element를 전달
        <br />
        React를 이용해서 UI를 변경하는 방법은 ReactElement를 만들어서 root.render()의 인자값으로 전달하는 방법뿐
      </pre>
    </>
  )
}

export default WhatIsJSX;
