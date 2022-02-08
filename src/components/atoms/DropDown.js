import React from "react";
import styled from "styled-components";

const DropDown = () => {
  return (
    <Menu>
      <li className="dropdown">
        <a href="1" className="dropbtn">
          Dropdown
        </a>
        <div className="dropdown-content">
          <a href="1">Grade 1</a>
          <a href="1">Grade 2</a>
          <a href="1">Grade 3</a>
          <a href="1">Grade 4</a>
          <a href="1">Grade 5</a>
        </div>
      </li>
    </Menu>
  );
};

export default DropDown;

const Menu = styled.ul`
  /* main UL component called: "Menu" */
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: green;
  border-radius: 8px;

  /* main LI */
  & > li {
    float: left;

    & > a {
      display: inline-block;
      color: white;
      text-align: center;
      border-radius: 5px;
      padding: 10px 16px;
      text-decoration: none;

      &:hover {
        background-color: #333;
      }
    }
  }

  /* dropdown LI */
  & > .dropdown {
    display: inline-block;

    & > .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      & > a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        &:hover {
          background-color: #f1f1f1;
        }
      }
    }

    &:hover .dropdown-content {
      display: block;
    }
  }
`;
