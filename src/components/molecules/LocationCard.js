import React from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";
import MainText from "../atoms/MainText";

const LocationCard = () => {
  return (
    <MainDiv>
      <Icon
        src="https://learn.teesas.com/front-assets/images/icon19.png"
        width="30px"
        height="30px"
      />
      <SubDiv>
        <A href="https://learn.teesas.com/teesas_place"> Teesas Place</A>
        <MainText
          text="Know more about how we are making an impact on the future of learning."
          fontSize="10px"
          fontWeight="400"
        />
      </SubDiv>
    </MainDiv>
  );
};

export default LocationCard;

const MainDiv = styled.div`
  display: flex;
  width: 80%;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 10px;
`;

const SubDiv = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 10px;
`;

const A = styled.a`
  text-decoration: none;
  font-weight: 500;
`;
