import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  margin: 20px 0 20px 0;
  border: 1px solid black;
  width: 500px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  border: 1px solid red;
  box-sizing: border-box;
  .number {
    width: 30px;
    text-align: center;
    border: 1px solid gold;
    padding: 5px;
  }
  .title {
    width: 100%;
    text-align: center;
    padding: 5px;
    border: 1px solid blue;
  }
`;

const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border: 1px solid red;
`;

const Detail = styled.div<{ viewState: boolean }>`
  display: flex;
  flex-direction: column;
  height: 200px;
  border: 1px solid red;
  .top {
    width: 100%;
    height: 70%;
    padding: 10px;
    overflow: scroll;
    box-sizing: border-box;
    border: 1px solid skyblue;
  }
  .bottom {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid greenyellow;
    .count {
      width: 70%;
    }
    .item {
      display: flex;
      justify-content: end;
      width: 30%;
      button {
        padding: 15px;
        color: white;
        border: 0;
        border-radius: 12px;
        background: radial-gradient(skyblue, deepskyblue);

        &:active {
          color: mediumvioletred;
          background: radial-gradient(white, lightcoral);
        }
      }
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      height: 0px;
    }
    to {
      opacity: 1;
      height: 200px;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      height: 200px;
    }
    to {
      opacity: 0;
      height: 0px;
    }
  }
  animation-duration: 2s;
  animation-name: ${({ viewState }) => (viewState ? "fadeIn" : "fadeOut")};
`;

interface Props {
  id: number;
  title: string;
  onModal: () => void;
}

const GroupItem = ({ id, title, onModal }: Props) => {
  const [viewState, setViewState] = useState(false);

  const handleDetail = useCallback(() => {
    setViewState((prev) => (prev = !prev));
  }, []);
  return (
    <Layout>
      <Header>
        <p className={"number"}>{id}</p>
        <p className={"title"}>{title}</p>
      </Header>
      <Subject>
        <button onClick={handleDetail}>
          {viewState ? "닫기" : "자세히 보기"}
        </button>
      </Subject>
      {viewState && (
        <Detail viewState={viewState}>
          <div className={"top"}>
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
          </div>
          <div className={"bottom"}>
            <p className={"count"}>현재 인원 1/10</p>
            <div className={"item"}>
              <button onClick={onModal}>참가하기</button>
            </div>
          </div>
        </Detail>
      )}
    </Layout>
  );
};

export default GroupItem;
