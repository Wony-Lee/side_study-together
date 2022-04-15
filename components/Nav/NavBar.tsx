import React from "react";
import styled from "@emotion/styled";
import NavItem from "./NavItem";

const NavBarUl = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  list-style: none;
`;

interface Props {}

const NavBar = () => {
  const sample = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <NavBarUl>
      {sample.map((item) => (
        <NavItem size={100 / sample.length} key={item.id} name={item.id} />
      ))}
    </NavBarUl>
  );
};

export default NavBar;
