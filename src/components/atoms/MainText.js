import React from "react";
import styled from "styled-components";

const MainText = (props) => {
  const { text, fontSize, color, fontWeight } = props;
  return (
    <Text
      color={color}
      fontSize={fontSize || "18px"}
      fontWeight={fontWeight || 400}
    >
      {text}
    </Text>
  );
};

export default MainText;

const Text = styled.text`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
