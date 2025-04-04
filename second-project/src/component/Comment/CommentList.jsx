import { useEffect } from "react";
import { CommentAuthor, CommentContainer, CommentContent, CommentDate, CommentItem, Container, } from "../styles/Styles";
import axios from "axios";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/comments?boardNo=${boardNo}`)
      .then((response) => {
        setComments([...response.data]);
      });
  }, [success]);

  return (
    <CommentContainer>
      {comments.length === 0 ? 
        <CommentItem>
          <CommentAuthor>댓글이</CommentAuthor>
          <CommentContent>없어용</CommentContent>
          <CommentDate>0000-00-00</CommentDate>
        </CommentItem>
      : comments.map((comments) => {
          return (
            <CommentItem>
              <CommentAuthor>{comments.CommentAuthor}</CommentAuthor>
              <CommentContent>{comments.CommentContent}</CommentContent>
              <CommentDate>{comments.CommentDate}</CommentDate>
            </CommentItem>
          ) 
        })
      }
    </CommentContainer>
  );
};

export default CommentList;
