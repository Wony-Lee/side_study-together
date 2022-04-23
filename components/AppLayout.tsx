import React from "react";
import styled from "@emotion/styled";
import NavBar from "./Nav/NavBar";
import FootBar from "./Footer/FootBar";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`;

const ContentWrap = styled.div`
  max-width: 1024px;
  width: 100%;
  overflow: scroll;
  height: 900px;
`;

const Content = styled.div`
  border: 1px solid gold;
`;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Layout>
      <ContentWrap>
        <NavBar />
        <Content>{children}</Content>
        <FootBar />
      </ContentWrap>
    </Layout>
  );
};

export default AppLayout;
