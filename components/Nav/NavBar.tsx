import React from "react";
import styled from "@emotion/styled";
import NavItem from "./NavItem";
import Link from "next/link";

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
  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: pink;
    }
  }
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
      <LeftBlock>
        <Link href={"/"}>Logo</Link>
      </LeftBlock>
      <RightBlock>
        <NavUl>
          <Link href={"/createStudy"}>
            <li>등록하기</li>
          </Link>
          <Link href={"/login"}>
            <li>로그인</li>
          </Link>
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
