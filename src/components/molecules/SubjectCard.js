import React from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";
import MainText from "../atoms/MainText";

const SubjectCard = (props) => {
  const { text, src, main, semi } = props;
  return (
    <Li main={main}>
      <A href="https://learn.teesas.com/subject/30">
        <Icon src={src} alt="icon" width="40px" height="40px" />
        <br />
        <MainText color={"white"} margin="0 3px" text={text} />
        <I semi={semi}></I>
      </A>
    </Li>
  );
};

export default SubjectCard;

const Li = styled.li`
  background: #08adf7;
  background: ${(props) => props.main};
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#08ADF7', endColorstr='#323EC8',GradientType=1 );
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 22%;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 1%;
  margin-bottom: 20px;
`;

const I = styled.i`
  background: #08adf7;
  background: ${(props) => props.semi};
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#08ADF7',endColorstr='#323EC8',GradientType=1 );
  width: 96px;
  height: 96px;
  position: absolute;
  border-radius: 50%;
  right: -48px;
  top: -48px;
`;

const A = styled.a`
  text-decoration: none;
  float: left;
  margin: 5px;
`;
