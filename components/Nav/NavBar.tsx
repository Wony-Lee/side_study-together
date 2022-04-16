import React from "react";
import styled from "@emotion/styled";
import NavItem from "./NavItem";

const Layout = styled.div`
  display: flex;
  border: 3px solid gold;
  height: 50px;
`;

const NavBarUl = styled.ul`
  display: flex;
  width: 100%;
  text-align: center;
  list-style: none;
`;

const NavUl = styled.ul`
  display: flex;
  li {
    padding: 10px;
    border: 1px solid red;
    margin-right: 10px;
    &:hover {
      color: pink;
      cursor: pointer;
    }
  }
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 50%;
  border: 1px solid red;
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  border: 1px solid blue;
`;

interface Props {}

const NavBar = () => {
  return (
    <Layout>
      <LeftBlock>dsa</LeftBlock>
      <RightBlock>
        <NavUl>
          <li>등록하기</li>
          <li>로그인</li>
        </NavUl>
      </RightBlock>
      {/*<NavBarUl>*/}
      {/*{sample.map((item) => (*/}
      {/*  <NavItem size={100 / sample.length} key={item.id} name={item.id} />*/}
      {/*))}*/}
      {/*</NavBarUl>*/}
    </Layout>
  );
};

export default NavBar;
