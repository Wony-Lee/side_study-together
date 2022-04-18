import React from "react";
import styled from "@emotion/styled";
import GroupItem from "./GroupItem";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 760px;
  max-height: 760px;
  height: 100%;
  overflow-x: scroll;
  border: 1px solid blue;
`;

const GroupList = () => {
  const groupSample = [
    { id: 1, title: "title1" },
    { id: 2, title: "title2" },
    { id: 3, title: "title3" },
    { id: 4, title: "title4" },
    { id: 5, title: "title5" },
  ];
  return (
    <Layout>
      {groupSample.map((item) => (
        <GroupItem key={item.id} id={item.id} title={item.title} />
      ))}
      <div style={{ margin: 200, border: "1px solid red" }}>a</div>
      <div style={{ margin: 200, border: "1px solid red" }}>a</div>
      <div style={{ margin: 200, border: "1px solid red" }}>a</div>
    </Layout>
  );
};

export default GroupList;
