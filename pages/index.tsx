import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import GroupList from "../components/Content/GroupList";
import Form from "../components/MakeForm/Form";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <GroupList />
      <Form />
    </AppLayout>
  );
};

export default Home;
