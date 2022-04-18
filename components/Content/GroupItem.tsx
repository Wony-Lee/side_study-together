import React, { ChangeEvent, useCallback } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { SET_VIEW_OFF, SET_VIEW_ON } from "../../reducers/studyReducer";
import { RootState } from "../../reducers";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  min-height: 50px;
  width: 100%;
  margin: 10px;
  border: 1px solid red;
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;
const Title = styled.h2`
  border: 1px solid blue;
`;

const Description = styled.div<{ viewState: boolean }>`
  border: 1px solid blue;
  display: ${({ viewState }) => (viewState ? "flex" : "none")};
`;

interface Props {
  id: number;
  title: string;
  viewState: boolean;
}

const GroupItem = ({ id, title }: Props) => {
  const dispatch = useDispatch();
  const { viewState } = useSelector((state: RootState) => state.study);
  const handleViewDescription = useCallback(
    // (e: React.MouseEventHandler<HTMLDivElement>) => {
    () => {
      if (!viewState) {
        dispatch({
          type: SET_VIEW_ON,
        });
      }
      if (viewState) {
        dispatch({
          type: SET_VIEW_OFF,
        });
      }
    },
    [viewState]
  );
  return (
    <Layout>
      <Head onClick={handleViewDescription}>
        <Title id={id + "id"}>
          {id} {title}
        </Title>
      </Head>
      <Description viewState={viewState}>
        <div>Hello World</div>
      </Description>
    </Layout>
  );
};

export default GroupItem;
