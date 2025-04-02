import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form, FloatingLabel, FormGroup } from "react-bootstrap";

const MyPage = () => {
  const navi = useNavigate(); 
  const [showPw, setShowPw] = useState(false);
  const [show, setShow] = useState(false);

  const updateHandleClose = () => setShowPw(false);
  const updateHandle = () => setShowPw(true);
  const deleteHandleClose = () => setShow(false);
  const deleteHandle = () => setShow(true);

  return (
    <>
      <h2>내정보</h2>
      <Form action="update-member" method="post">  
        <FormGroup className="mb-3">     
          <FloatingLabel controlId="userId" >* ID </FloatingLabel>
          <Form.Control type="text" id="userId" value="" name="memberId" readOnly /> 
          <br/>
          <FloatingLabel controlId="userName">* Name</FloatingLabel>
          <Form.Control type="text" id="userName" value="" name="memberName" required />          
        </FormGroup>
        <br />
        <Button variant="outline-danger" onClick={deleteHandle}>탈퇴하기</Button>
        <Button variant="outline-success" onClick={updateHandle}>비밀번호 수정하기</Button>
        <Button type="submit" variant="primary" >수정하기</Button>          
      </Form>

      <Modal 
        show={show} 
        onHide={deleteHandleClose} 
      >
        <Modal.Header closeButton>
          <Modal.Title>회원탈퇴</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="delete-member" method="post">
            <div align="center">
              정말로 탈퇴 하시겠습니까? <br />
            </div>
            <FloatingLabel controlId="password">Password </FloatingLabel>
            <Form.Control type="password" placeholder="Enter Password" id="password" name="password" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteHandleClose}>취소</Button>
          <Button variant="danger" type="submit" >탈퇴하기</Button>
        </Modal.Footer>
      </Modal>

      <Modal 
        show={showPw} 
        onHide={updateHandleClose} 
      >
        <Modal.Header closeButton>
          <Modal.Title>비밀번호 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="update-pw" method="post">
            <FloatingLabel controlId="currentPassword">현재 Password </FloatingLabel>
            <Form.Control type="password" placeholder="Enter Password" id="currentPassword" name="currentPassword" />
            <br />
            <FloatingLabel controlId="newPassword">새 Password </FloatingLabel>
            <Form.Control type="password" placeholder="Enter New Password" id="newPassword" name="newPassword" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={updateHandleClose}>취소</Button>
          <Button variant="success" type="submit" >변경하기</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyPage;
