import { BoardContent, BoardWriter, Container, Title, Button, ImageContainer, ImagePreview, Form, Input, } from "../styles/Styles";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CommentForm from "../Comment/CommentForm";

const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const navi = useNavigate();
  const { auth } = useContext(AuthContext);
  const [error, setError] = useState(false);

  useEffect(() => {

    axios
      .get(`http://localhost/boards/${id}`)
      .then((response) => {
        console.log(response);
        setBoard(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const handleBack = () => {
    navi(-1);
  };

  if(loading) {
    return (
      <Container>
        <Title>게시글을 불러오는 중 입니다...</Title>
      </Container>
    );
  };

  if(error) {
    return (
      <Container>
        <Title>게시글을 찾을 수 없습니다.</Title>
      </Container>
    );
  };

  const handleDelete = (e) => {
    e.preventDefault(); //기본 이벤트 제거

    if(confirm("정말로 삭제하시겠습니까?")) {
      axios
        .delete(`http://localhost/boards/${id}`,{
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        })
        .then(() => {
          setBoard({
            boardTitle: "삭제 중 입니다...",
            boardContent: "삭제 중 입니다...",
            boardWriter: "삭제 중 입니다...",  
          });

          setTimeout(() => {
            alert("삭제 되었습니다.");
            navi("/boards");
          }, 3600);
        });
    }
  };

  return (
    <>
      <Container>
        <Title>{board.boardTitle}</Title>
        <BoardWriter>작성자: {board.boardWriter}</BoardWriter>
        <BoardContent>{board.boardContent}</BoardContent>
        {board.boardFileUrl ? (
          <ImageContainer>
            <ImagePreview src={board.boardFileUrl} alt="이미지" />
          </ImageContainer>
        ) : (
          <div></div>
        )}
        
        <Form onSubmit={handleDelete}>
          {board.boardWriter === auth.memberId &&(
            <>
              <Button style={{ background: "green" }}>
                수정하기 버튼이다옹
              </Button>
              <Button style={{ background: "crimson" }}>
                삭제하기 다옹
              </Button>
            </>
          )}
          
          <Button onClick={handleBack}>뒤로가기 다옹</Button>
        </Form>
      </Container>
      <CommentForm boardN0={id} />
    </>
  );
};

export default BoardDetail;
