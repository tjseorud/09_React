//AJAX 요청을 보내서 응답을 받기
// 이번 타입 주제 => 유저정보 ==> 회원들의 정보
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid black;
  margin: 40px;
  background-color: ${props => (props.color ? props.color : 'white')};
`;

// const MemberInfo = ({memberId, memberName, email, color}) => {
const MemberInfo = (props) => {
  console.log(props);
  const {memberId, memberName, email, color} = props.member;
  //console.log(memberId, memberName, email);
  return (
    <>
      <StyledDiv color={color}>
        <h4>아이디 : {memberId}</h4>
        <strong>이름 : {memberName}</strong>
        <p>이메일 : {email}</p>
      </StyledDiv>
    </>
  )
};

const Chapter02 = () => {
  const response = [
    {
      'memberId': 'admin',
      'memberName': '짱구',
      'email': 'Wkdrn@kh.com',
      color: 'red',
    },
    {
      'memberId': 'user01',
      'memberName': '유리',
      'email': 'dbfl@kh.com',
      color: 'pink',
    },
    {
      'memberId': 'user02',
      'memberName': '철수',
      'email': 'cjftn@kh.com',
    },
  ];

  return (
    <>
        { response ? (
          response.map((e, i) => ( 
            <MemberInfo member={e} key={e.memberId} />
          ))
        ) : (
            <div>로딩중...</div>
          )
        }       

      {/* 요건 2절 */}
      {/* <MemberInfo {...response[0]}/>
      <MemberInfo {...response[1]}/>
      <MemberInfo {...response[2]}/> */}

      {/* 여긴 1절 */}
      {/* <styledDiv>
        <h4>아이디 : {response[0].memberId}</h4>
        <strong>이름 : {response[0].memberName}</strong>
        <p>이메일 : {response[0].email}</p>
      </styledDiv>
      <styledDiv>
        <h4>아이디 : {response[1].memberId}</h4>
        <strong>이름 : {response[1].memberName}</strong>
        <p>이메일 : {response[1].email}</p>
      </styledDiv>
      <styledDiv>
        <h4>아이디 : {response[2].memberId}</h4>
        <strong>이름 : {response[2].memberName}</strong>
        <p>이메일 : {response[2].email}</p>
      </styledDiv> */}
    </>
  );
}

export default Chapter02;
