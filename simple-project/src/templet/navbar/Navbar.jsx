import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navi = useNavigate();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navi("/")}>
            icon
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link onClick={() => navi("/chap01")}>Ch01</Nav.Link>
            <Nav.Link onClick={() => navi("/chap02")}>Ch02</Nav.Link>
            <Nav.Link onClick={() => navi("/chap022")}>Ch022</Nav.Link>
            <Nav.Link onClick={() => navi("/chap03")}>Ch03</Nav.Link>
            <Nav.Link onClick={() => navi("/Input")}>Input</Nav.Link>
            <Nav.Link href="/chap03b">Ch03B</Nav.Link>
            <Nav.Link href="/memo">Memo</Nav.Link>
            <Nav.Link href="/">?</Nav.Link>
            <Button variant="primary" >
              로그인
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
