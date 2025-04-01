import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
        <Modal show={show} onHide={loginHandleClose} align="center">
          <Modal.Header closeButton>
            <Modal.Title>로그인</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="/login" method="post">
              <div>
                <label for="userId">ID : </label>
                <input type="text" placeholder="Enter ID" id="userId" name="memberId" /> <br />
                <label for="userPwd" >Password : </label>
                <input type="password" placeholder="Enter Password" id="userPwd" name="memberPw" />          
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={loginHandleClose}>취소</Button>
            <Button variant="primary" onClick="submit">로그인</Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    </>
  );
};

export default NavBar;
