import styled from 'styled-components';

export const StyledWrap = styled.div`
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
export const StyledTitle = styled.h1`
  margin: 45px 0px;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  color: cornflowerblue;
`;
export const StyledInnerWrap = styled.div`
  width: 1100px;
  height: auto;
  min-height: 800px;
  margin: auto;
  padding: 12px;
  border: 1px solid cornflowerblue;
  border-radius: 12px;
`;
export const StyledCard = styled.div`
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
export const StyledImg = styled.img`
  width: 300px;
  height: 180px;
  margin: 10px 0px;
  border-radius: 5px;
`;
export const StyledStoreName = styled.h3`
  margin: 0px;
  font-size: 20px; 
  font-weight: bold;
  text-align: center;
`;
export const StyledMoreBtn = styled.div`
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

export const StyledMainImg = styled.img`
  width: 85%;
  height: 550px;
  border-radius: 5px;
`;
export const StyledDescription = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 20px;
  font-size: 19px;
  font-weight: bold;
  text-align: left;
`;
export const StyledOther = styled.div`
  margin: 20px 0px;
  font-size: 14px;
  text-align: center;
`;
export const StyledMap = styled.div`
  width: 85%;
  height: 600px;
  margin: auto;
  border: 1px solid cornflowerblue;
  border-radius: 5px;
`;
