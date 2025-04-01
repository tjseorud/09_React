import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

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
      <br/>
      <form action="update-member" method="post">
          <div class="form-group">
              <label for="userId">* ID : </label>
              <input type="text" class="form-control" id="userId" value="" name="memberId" readonly /> <br/>

              <label for="userName">* Name : </label>
              <input type="text" class="form-control" id="userName" value="" name="memberName" required /> <br />

              <label for="email"> &nbsp; Email : </label>
              <input type="text" class="form-control" id="email" value="" name="email" /> <br/>
          </div> 
          <br/>
          <div align="center">
              <Button variant="outline-danger" onClick={deleteHandle}>탈퇴하기</Button>
              <Button variant="outline-success" onClick={updateHandle}>비밀번호 수정하기</Button>
              <Button type="submit" variant="primary" >수정하기</Button>
          </div>
      </form>

      <Modal show={show} onHide={deleteHandleClose} align="center">
        <Modal.Header closeButton>
          <Modal.Title>회원탈퇴</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="delete-member" method="post">
            <div align="center">
              정말로 탈퇴 하시겠습니까? <br />
            </div>
            <label for="userPwd">Password : </label>
            <input type="password" placeholder="Enter Password" id="userPwd" name="memberPw" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteHandleClose}>취소</Button>
          <Button variant="danger" type="submit" >탈퇴하기</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showPw} onHide={updateHandleClose} align="center">
        <Modal.Header closeButton>
          <Modal.Title>비밀번호 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="update-pw" method="post">
            <label for="userPwd">현재 Password : </label>
            <input type="password" placeholder="Enter Password" id="userPwd" name="memberPw" /> <br />

            <label for="userPwd">새 Password : </label>
            <input type="password" placeholder="Enter New Password" id="userPwd" name="memberPw" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={updateHandleClose}>취소</Button>
          <Button variant="success" type="submit" >수정하기</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyPage;
