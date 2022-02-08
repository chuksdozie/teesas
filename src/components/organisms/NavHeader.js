import React from "react";
import styled from "styled-components";
import { generalGreenGradient } from "../../resources/gradients/gradients";
import { navIcons } from "../../resources/icons/icons";
import NavItem from "../molecules/NavItem";

const text = [
  navIcons.home,
  navIcons.bookmark,
  navIcons.notification,
  navIcons.profile,
  navIcons.parentConnect,
  navIcons.subscription,
  navIcons.signOut,
];

const NavHeader = () => {
  return (
    <Div>
      {text.map((i, k) => (
        <NavItem key={k} text={i.text} src={i.hover} />
      ))}
    </Div>
  );
};

export default NavHeader;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: ${generalGreenGradient};
  padding: 10px 0;
  width: 100%;
`;
