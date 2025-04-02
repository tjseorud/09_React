import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Nav, Navbar, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

const NavBar = () => {
  const navi = useNavigate(); 
  const [show, setShow] = useState(false);

  const loginHandleClose = () => setShow(false);
  const loginHandle = () => setShow(true);

  return (
    <>
      <Navbar>
        <Nav className="me-auto">
          <Nav.Link className="navbar-link" onClick={() => navi("/")}>🥕</Nav.Link>
          <Nav.Link className="navbar-link" onClick={() => navi("/")}>Home</Nav.Link>
          <Nav.Link className="navbar-link" onClick={() => navi("/board")}>게시글</Nav.Link>
          <Button variant="primary" onClick={() => navi("/signUp")}>회원가입</Button>
          <Button variant="secondary" onClick={loginHandle}>로그인</Button>       
          <Button variant="primary" onClick={() => navi("/myPage")}>내정보</Button>
          <Button variant="primary" onClick={() => navi("/logout")}>로그아웃</Button>      
        </Nav>
      </Navbar>
      
      <Modal 
        show={show} 
        onHide={loginHandleClose} 
      >
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="/login" method="post">
            <FloatingLabel controlId="memberId" >ID</FloatingLabel>
            <Form.Control type="text" placeholder="Enter ID" id="memberId" name="memberId" />
            <br/>
            <FloatingLabel controlId="memberPw" >Password</FloatingLabel>
            <Form.Control type="password" placeholder="Enter Password" id="memberPw" name="memberPw" />          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={loginHandleClose}>취소</Button>
          <Button variant="primary" onClick="submit">로그인</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
