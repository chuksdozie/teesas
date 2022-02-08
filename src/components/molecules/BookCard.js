import React from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";
import { generalGreenGradient } from "../../resources/gradients/gradients";
import MainText from "../atoms/MainText";

const BookCard = () => {
  return (
    <A href="https://learn.teesas.com/product-details/46">
      <MainDiv>
        <Icon
          src="https://teesas.s3.amazonaws.com/ebook/1625760324image.jpg"
          width="170px"
          height="180px"
        />
        <BottomDiv class="e-nook-txt">
          <MainText
            text="NINI ILE (In the ..."
            fontSize=""
            fontWeight="700"
            color="white"
          />
          <MainText
            text="Ko nipa Ajoke, awon molebi re, bi o se n kini ati..."
            fontSize="13px"
            fontWeight="400"
            color="white"
          />
        </BottomDiv>
      </MainDiv>
    </A>
  );
};

export default BookCard;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 250px;
  border: 1px solid green;
`;

const A = styled.a`
  text-decoration: none;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: ${generalGreenGradient};
`;
