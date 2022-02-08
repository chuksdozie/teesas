import React, { useState } from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import Icon from "../atoms/Icon";

const NavItem = (props) => {
  const { src, text } = props;
  const [hover, setHover] = useState(false);
  return (
    <A href="">
      <Div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Icon src={src} margin="0 7px" />
        <MainText
          color={hover ? "black" : "white"}
          margin="0 7px"
          text={text}
        />
      </Div>
    </A>
  );
};

export default NavItem;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 15px;
  margin: 0 15px;
  border-radius: 30px;
  &:hover {
    background: linear-gradient(to bottom, #edffdf 0%, #d4ffcf 100%);
  }
`;

const A = styled.a`
  text-decoration: none;
`;
