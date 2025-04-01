import { Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <>
      <h2>회원가입</h2>
      <form action="signup" method="post">
        <div class="form-group" id="signup-form">
          <label for="userId">* ID : </label>
          <input type="text" class="form-control" id="userId" placeholder="Please Enter ID" name="memberId" required /> <br />
          <br />
          <label for="userPwd">* Password : </label>
          <input type="password" class="form-control" id="userPwd" placeholder="Please Enter Password" name="memberPw" required /> <br />

          {/* <label for="checkPwd">* Password Check : </label>
          <input type="password" class="form-control" id="checkPwd" placeholder="Please Enter Password" required /> <br /> */}

          <label for="userName">* Name : </label>
          <input type="text" class="form-control" id="userName" placeholder="Please Enter Name" name="memberName" required /> <br />

          <label for="email"> &nbsp; Email : </label>
          <input type="text" class="form-control" id="email" placeholder="Please Enter Email" name="email" /> <br /> 
        </div> 
        <br />
        <div class="btns" align="center">
          <Button onClick="submit" variant="primary">회원가입</Button>
          <Button onClick="reset" variant="outline-secondary">초기화</Button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
