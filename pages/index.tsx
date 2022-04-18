import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import GroupList from "../components/Content/GroupList";
import Frame from "../components/CreateStudy/Frame";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <GroupList />
      <Frame />
    </AppLayout>
  );
};

export default Home;
