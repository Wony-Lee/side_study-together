import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import GroupList from "../components/Content/GroupList";
import Frame from "../components/CreateStudy/Frame";
import Login from "../components/Login/Login";
import TermsOfService from "../components/SignUp/TermsOfService";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <GroupList />
      <Frame />
      <Login />
      <TermsOfService />
    </AppLayout>
  );
};

export default Home;
