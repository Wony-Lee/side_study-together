import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import GroupList from "../components/Content/GroupList";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <GroupList />
    </AppLayout>
  );
};

export default Home;
