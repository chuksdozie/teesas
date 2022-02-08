import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import Icon from "../atoms/Icon";
import { logo, maleAvatar } from "../../resources/images/images";
import DropDown from "../atoms/DropDown";

const TopHeader = () => {
  return (
    <Div>
      <LeftDiv>
        <A href="https://teesas.com/">
          <Icon src={logo} alt="Logo" width="auto" height="40px" />
        </A>
      </LeftDiv>
      <RightDiv>
        <Span>
          <A href="https://api.whatsapp.com/send?phone=+2348160525401&text=Hello%2C%20I%20saw%20your%20teesas%20project%2C%20I%20am%20contacting%20you%20to">
            <Icon
              src="https://learn.teesas.com/front-assets/images/wp-icon.png"
              width="22px"
              height="22px"
              margin="0 5px"
            />

            <MainText text="Enquire Now" />
          </A>
        </Span>
        <Span>
          <Icon src={maleAvatar} width="35px" height="35px" margin="0 5px" />
          <MainText text="student" />
        </Span>
        <DropDown />
      </RightDiv>
    </Div>
  );
};

export default TopHeader;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: linear-gradient(to bottom, #edffdf 0%, #d4ffcf 100%);
  padding: 10px 0;
  width: 100%;
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 250px;
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30px;
  width: 40%;
  padding: 0 20px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
`;
