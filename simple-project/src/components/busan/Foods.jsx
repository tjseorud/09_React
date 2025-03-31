import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledWrap, StyledTitle, StyledInnerWrap, StyledCard, StyledImg, StyledStoreName, StyledMoreBtn } from "./Foods.styles";

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
    axios
      .get(`http://localhost/busans?pageNo=${pageNo}`)
      .then((result) => {
        //console.log(result);
        const response = result.data.getFoodKr.item;
        console.log(response);
        setFoods([...foods, ...response]);  // 기존 데이터에 arr로 추가
        
        if(response.length < 9) {
          setHasMore(false);
        }
      });
  }, [pageNo]);

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
                <StyledCard key={e.UC_SEQ} onClick={() => 
                  navi(
                    `/foods/${e.UC_SEQ}`, {state: e},
                  )
                }>
                  <StyledImg src={e.MAIN_IMG_THUMB} />
                  <br />
                  <StyledStoreName>
                    {e.MAIN_TITLE}
                  </StyledStoreName>
                </StyledCard>
              )                
            )
          }
        </StyledInnerWrap>
        { 
          hasMore && (
            <StyledMoreBtn onClick={clickToBtnHandler}>
              더보기 ▽
            </StyledMoreBtn>
          )
        }
      </StyledWrap>
    </>
  );
}

export default Foods;
