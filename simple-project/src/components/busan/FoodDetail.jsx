import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { StyledWrap, StyledTitle, StyledMainImg, StyledDescription, StyledOther, StyledMap  } from "./Foods.styles";
import { useNavigate } from "react-router-dom";
import CommentList from "./comment/CommentList";

const FoodDetail = () => {
  // const locattion = useLocation();
  // console.log(locattion.state);
  const {id} = useParams();
  const [load, isLoad] = useState(false);
  const [food, setFood] = useState({
    title: '',
    img: '',
    description: '',
    time: '',
    addr: '', 
    lat: '',
    lng: '',
  });
  // alert(id);
  const [content, setContent] = useState('');
  const [success, isSuccess] = useState(false);
  const navi = useNavigate();

  useEffect(() => {
    //window.scrollTo(0, 0);  // 화면 맨 위로 이동
    axios
      .get(`http://localhost/busans/${id}`)
      .then(result => {
        //console.log(result);
        const response = result.data.getFoodKr.item[0];
        //console.log(response);
        setFood({
          title: response.MAIN_TITLE,
          img: response.MAIN_IMG_THUMB,
          description: response.ITEMCNTNTS,
          time: response.USAGE_DAY_WEEK_AND_TIME,
          addr: response.ADDR1,
          lat: response.LAT,
          lng: response.LNG,
        });
        
        /*
          MAIN_TITLE               : 가게명
          MAIN_IMG_THUMB           : 메인 사진
          ITEMCNTNTS               : 소개글
          USAGE_DAY_WEEK_AND_TIME  : 영업시간
          ADDR1                    : 주소
          LAT                      : 위도
          LNG                      : 경도
        */
      
        //kakao api
        if(load) {
          var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = { 
              center: new window.kakao.maps.LatLng(response.LAT, response.LNG), // 지도의 중심좌표
              level: 3 // 지도의 확대 레벨
            };

          var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

          // 마커가 표시될 위치입니다 
          var markerPosition  = new window.kakao.maps.LatLng(response.LAT, response.LNG); 

          // 마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
            position: markerPosition
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);
        }

        isLoad(true);
      });
  }, [food.lat]);

  
  const submitHandler = (e) => {
    e.preventDefault(); //오타 주의! Form 지우기

    if(content.trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }
    /* 정규표현식! */
    axios
      .post(`http://localhost/busans/comments`, {
        seq: id,
        content: content,
      })
      .then(result => {
        console.log(result); 
        setContent("");
        isSuccess( !success);      
      });
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  if( !load) {
    return (
      <StyledWrap>
        <StyledTitle>데이터를 불러오는 중 입니다.</StyledTitle>
      </StyledWrap>
    )
  }

  return (
    <>
      <StyledWrap>
        <StyledTitle>{food.title}</StyledTitle>
        <StyledMainImg src={food.img} />
        <StyledDescription>{food.description}</StyledDescription>
        <StyledOther>{food.addr}</StyledOther>
        <StyledOther>{food.time}</StyledOther>
        <StyledMap id="map"></StyledMap>{/* 지도 */}
        <button onClick={() => navi(-1)}>뒤로가기</button>
        <div style={{width:'80%', height: '50px', margin: 'auto'}}>
          <form onSubmit={submitHandler}>
            <input type="text" onChange={contentHandler} placeholder="후기를 남겨주세요." />
            <button>후기 남기기!</button>
          </form>
        </div>  
        <CommentList id={id} success={success}></CommentList>{/* 댓글리스트 */}
      </StyledWrap>  
    </>
  );
}

export default FoodDetail;
