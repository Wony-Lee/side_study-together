import React from "react";
import styled from "@emotion/styled";
import GroupItem from "./GroupItem";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
`;

const GroupList = () => {
  const groupSample = [
    { id: 1, title: "1" },
    { id: 2, title: "2" },
    { id: 3, title: "3" },
    { id: 4, title: "4" },
    { id: 5, title: "5" },
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
