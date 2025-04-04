import { Input, Button } from "../../../styles/Styles";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const DeleteMember = () => {
  const { auth } = useContext(AuthContext);
  const [deleteMember, setDeleteMember] = useState("");
  const [error, setError] = useState("");

  const handleDeleteMember = () => {
    axios
      .delete("http://localhost/members", {
        deleteMember,
      }, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        }
      })
      .then(() => {
        alert("탈퇴 되었습니다.");
        window.location.href = "/";
      })
      .catch((error) => {
        setError(
          error.response.data["error-message"] || "탈퇴 중 오류가 발생했습니다."
        );
      });
  };

  return (
    <>
      <Input
        onChange={(e) => setDeleteMember(e.target.value)}
        type="text"
        placeholder="탈퇴를 원하시면 비밀번호를 입력해주세요."
        required
      />
      <Button 
        style={{ backgroundColor: "red" }} 
        type="button"
        onClick={handleDeleteMember}
      >
        탈퇴하기
      </Button>
    </>
  );
};

export default DeleteMember;
