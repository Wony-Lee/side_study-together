import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Global = styled.div`
  max-width: 1024px;
  width: 100%;
  bottom: 0;
  position: fixed;

  @media (max-height: 860px) {
    position: relative;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 65px;
  cursor: pointer;
  &:hover {
    color: pink;
  }
`;

const FootBar = () => {
  return (
    <Global>
      <Layout>
        <MenuBox>전체보기</MenuBox>
        <MenuBox>뭘넣지?</MenuBox>
        <MenuBox>참여목록</MenuBox>
        <Link href={{ pathname: "/mypage", query: { name: "jisoo" } }}>
          <MenuBox>MyPage</MenuBox>
        </Link>
      </Layout>
    </Global>
  );
};

export default FootBar;
