import { Button, Form, FloatingLabel } from "react-bootstrap";

const SignUp = () => {
  return (
    <>
      <h2>회원가입</h2>
      <Form action="signup" method="post">
        <div class="form-group" id="signup-form">
          <FloatingLabel controlId="memberId">* ID  </FloatingLabel>
          <Form.Control type="text" class="form-control" id="memberId" placeholder="Please Enter ID" name="memberId" required /> 
          <br />
          <br />
          <FloatingLabel controlId="memberPw">* Password  </FloatingLabel>
          <Form.Control type="password" class="form-control" id="memberPw" placeholder="Please Enter Password" name="memberPw" required /> 
          <br />

          {/* <FloatingLabel controlId="checkPwd">* Password Check : </FloatingLabel>
          <Form.Control type="password" class="form-control" id="checkPwd" placeholder="Please Enter Password" required /> <br /> */}

          <FloatingLabel controlId="memberName">* Name  </FloatingLabel>
          <Form.Control type="text" class="form-control" id="memberName" placeholder="Please Enter Name" name="memberName" required />   
        </div> 
        <br />
        <Button onClick="submit" variant="primary">회원가입</Button>
        <Button onClick="reset" variant="outline-secondary">초기화</Button>
      </Form>
    </>
  );
};

export default SignUp;
