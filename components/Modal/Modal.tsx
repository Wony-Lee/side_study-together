import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { SET_MODAL_OFF } from "../../reducers/studyReducer";

const Layout = styled.div<{ modalState: boolean }>`
  display: ${({ modalState }) => (modalState ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 200px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  border: 1px solid red;
  box-sizing: border-box;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20px;
  margin: 10px 0 0 0;
`;

interface Props {
  title?: string;
  text?: string;
}

const Modal = ({ title, text }: Props) => {
  const modalState = useSelector((state: RootState) => state.study)?.modalState;
  const dispatch = useDispatch();
  const handleModalOff = useCallback(() => {
    dispatch({
      type: SET_MODAL_OFF,
      payload: false,
    });
  }, [modalState]);
  return (
    <Layout modalState={modalState}>
      <Detail>
        <Header>{title}</Header>
        <Content>{text}</Content>
        <Footer>
          <button onClick={handleModalOff}>닫기</button>
        </Footer>
      </Detail>
    </Layout>
  );
};

export default Modal;
