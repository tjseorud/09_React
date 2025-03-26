import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>로그인</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="loginForm">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your ID"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginForm">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            autoFocus
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        취소
      </Button>
      <Button variant="primary" onClick={handleClose}>
        로그인
      </Button>
    </Modal.Footer>
  </Modal>

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">MOCA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">공지사항</Nav.Link>
            <Nav.Link href="#">자유게시판</Nav.Link>

            <Button variant="primary" onClick={handleShow}>
              로그인
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
