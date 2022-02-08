import React from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";
import MainText from "../atoms/MainText";
import { generalGreenGradient } from "../../resources/gradients/gradients";

const Subscribe = () => {
  return (
    <MainDiv>
      <SubDiv1>
        <LeftDiv>
          <Icon
            src="https://learn.teesas.com/front-assets/images/Group 13556.png"
            width="50px"
            height="50px"
          />
        </LeftDiv>
        <CenterDiv>
          <MainText
            text={`Make Your Child a Genius`}
            color={"white"}
            fontSize="18px"
          />
          <MainText
            text={`Access to High Quality Educational Video in National and Local
            Languages`}
            color={"white"}
            fontSize="18px"
          />
        </CenterDiv>
        <RightDiv>
          <a href="https://learn.teesas.com/subscription">
            <Button>Subscribe Now!</Button>
          </a>
        </RightDiv>
      </SubDiv1>
    </MainDiv>
  );
};

export default Subscribe;

const MainDiv = styled.div`
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubDiv1 = styled.div`
  border-radius: 5px;
  display: flex;
  width: 90%;
  background: ${generalGreenGradient};
  padding: 10px 0;
`;

const LeftDiv = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterDiv = styled.div`
  font-weight: 500;
  color: white;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const RightDiv = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 40px;
  color: green;
  font-size: 15px;
  font-weight: bold;
  background-color: white;
  border: 0;
  border-radius: 5px;
`;
