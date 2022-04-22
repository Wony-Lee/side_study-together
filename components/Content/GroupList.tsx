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
    { id: 1, title: "타이틀1" },
    { id: 2, title: "타이틀2" },
    { id: 3, title: "타이틀3" },
    { id: 4, title: "타이틀4" },
    { id: 5, title: "타이틀5" },
    { id: 6, title: "타이틀6" },
  ];
  return (
    <Layout>
      {groupSample.map((item) => (
        <GroupItem key={item.id} id={item.id} title={item.title} />
      ))}
    </Layout>
  );
};

export default GroupList;
