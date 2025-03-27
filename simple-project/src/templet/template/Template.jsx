import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Template = () => {
  const [pageNo, setPageNo] = useState(1);
  const [content, setContent] = useState([]);

  const clickToBtnHandler = () => {
    setPageNo(pageNo => pageNo + 1);
  };
  const navi = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost/spring/template?pageNo=${pageNo}`)
      .then((result) => {
        console.log(result);
        const response = result;
        console.log(response);
        setContent([...content, ...response]);  // 기존 데이터에 arr로 추가
      }
    );
  }, []);

  return (
    <>
      <h1>Template</h1>
      <div>
        {
          content.map(e => 
            <div key={e.SN}>
              
            </div>
          )
        }
      </div>
      <Button variant="primary" onClick={clickToBtnHandler}>
        더보기
      </Button>
    </>
  );
};

export default Template;
