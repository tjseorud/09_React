import { useLocation } from "react-router-dom";

const FoodDetail = () => {
  const locattion = useLocation();
  console.log(locattion.state);
  return (
    <>
      <h2>상세보기</h2>
      
    </>
  );
}

export default FoodDetail;
