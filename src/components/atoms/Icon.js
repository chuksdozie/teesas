import React from "react";
import styled from "styled-components";
import { navIcons } from "../../resources/icons/icons";

const Icon = (props) => {
  const { src, width, height, margin } = props;
  return (
    <IconImg
      src={src || navIcons.home.hover}
      width={width || "15px"}
      height={height || "15px"}
      margin={margin}
    />
  );
};

export default Icon;

const IconImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
