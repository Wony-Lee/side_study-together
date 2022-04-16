import React from "react";
import styled from "@emotion/styled";

const Global = styled.div`
  position: fixed;
  max-width: 1024px;
  width: 100%;
  bottom: 0;
  @media (max-height: 860px) {
    position: relative;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border: 1px solid yellowgreen;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  border: 1px solid red;
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
        <MenuBox>MyPage</MenuBox>
      </Layout>
    </Global>
  );
};

export default FootBar;
