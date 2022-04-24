import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  margin: 20px 0 20px 0;
  border: 1px solid black;
  border-radius: 16px;
  width: 500px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  .number {
    width: 30px;
    text-align: center;
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
`;

const Detail = styled.div<{ viewState: boolean }>`
  display: flex;
  flex-direction: column;
  height: 200px;
  .top {
    width: 100%;
    height: 70%;
    padding: 10px;
    overflow: scroll;
    box-sizing: border-box;
  }
  .bottom {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;
    padding: 10px;
    box-sizing: border-box;
    @keyframes bottomFade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation-duration: 2s;
    animation-name: bottomFade;
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
      height: 0px;
    }
    to {
      height: 200px;
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
