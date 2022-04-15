import React from "react";
import styled from "@emotion/styled";

const NavLi = styled.li<{ size: number }>`
  width: ${({ size }) => size}%;
`;

interface Props {
  size: number;
  name: number;
}

const NavItem = ({ size, name }: Props) => {
  return <NavLi size={size}>{name}</NavLi>;
};

export default NavItem;
