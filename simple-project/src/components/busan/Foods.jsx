import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledWrap = styled.div`
  width: 1200px;
  height: auto;
  min-height: 1100px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border: 1px solid cornflowerblue;
  border-radius: 12px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
`;
const StyledTitle = styled.h1`
  margin: 45px 0px;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  color: cornflowerblue;
`;
const StyledInnerWrap = styled.div`
  width: 1100px;
  height: auto;
  min-height: 800px;
  margin: auto;
  padding: 12px;
  border: 1px solid cornflowerblue;
  border-radius: 12px;
`;
const StyledCard = styled.div`
  width: 330px;
  height: 240px;
  margin: 9px 9px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  display: inline-block;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
    opacity: 0.9;
  }
`;
const StyledImg = styled.img`
  width: 300px;
  height: 180px;
  margin: 10px 0px;
  border-radius: 5px;
`;
const StyledStoreName = styled.h3`
  font-size: 20px; 
  font-weight: bold;
  text-align: center;
  margin: 0px;
`;
const StyledMoreBtn = styled.div`
  width: 120px;
  height: 80px;
  margin: auto;
  margin-top: 35px;
  line-height: 80px;
  text-align: center;
  border: 1px dotted cornflowerblue;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  color: cornflowerblue;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
    opacity: 0.9;
    background-color: cornflowerblue;
    color: white;
  }
`;


const Foods = () => {
  const [pageNo, setPageNo] = useState(1);
  const [foods, setFoods] = useState([]);
  const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지

  const clickToBtnHandler = () => {
    setPageNo(pageNo => pageNo + 1);
  };

  const navi = useNavigate();

  useEffect(() => {
    /* fetch(`http://localhost/spring/busans?pageNo=${pageNo}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(err => console.err("에러 발생 : " + err))
      .finally(console.log("무조건 실행")); 
    */
    /* axios({
      url: `http://localhost/spring/busans?pageNo=${pageNo}`,
      method: 'get',
    }).then((result) => console.log(result)); 
    */
    axios.get(`http://localhost/spring/busans?pageNo=${pageNo}`)
      .then((result) => {
        //console.log(result);
        const response = result.data.getFoodKr.item;
        console.log(response);
        setFoods([...foods, ...response]);  // 기존 데이터에 arr로 추가
        
        if(response.length < 9) {
          setHasMore(false);
        }
      }
    );
  }, []);

  return (
    <>
      <StyledWrap>
        <StyledTitle>부산의 맛집 알아보기</StyledTitle>
        <StyledInnerWrap>
          {
            foods.length === 0 ? (
              <h2>목록을 불러오는 중 입니다..</h2>
            ) : (
              foods.map(e => 
                <StyledCard 
                  key={e.UC_SEQ} 
                  onClick={() => navi(
                    `/foods/${e.UC_SEQ}`,
                    {state: e},
                  )}
                >
                  <StyledImg src={e.MAIN_IMG_THUMB} />
                  <br />
                  <StyledStoreName>
                    {e.MAIN_TITLE}
                  </StyledStoreName>
                </StyledCard>
              )                
            )
          };
        </StyledInnerWrap>
        { 
          hasMore && (
            <StyledMoreBtn onClick={clickToBtnHandler}>
              더보기 ▽
            </StyledMoreBtn>
          )
        };
      </StyledWrap>
    </>
  );
}

export default Foods;
