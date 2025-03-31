import axios from "axios";
import { useState, useEffect } from "react";

const CommentList = (props) => {
  const [comment, setComment] = useState([]);
  //console.log(props);
  const id = props.id;

  useEffect(() => {
    axios
      .get(`http://localhost/busans/comments/${id}`)
      .then(result => {
        //console.log(result);
        setComment([...result.data]);
      });
  }, [props.success]);

  return (
    <>
      {
        comment != [] ? (
          comment.map((e, i) => {
            return (
              <div key={i} style={{padding: '10px'}}>
                <h4>{e.content}</h4>
                <h6>{e.createDate}</h6>
              </div>
            )
          })
        ) : (
          <h2>아직 댓글이 없어요.</h2>
        )
      }    
    </>
  );
};

export default CommentList;
