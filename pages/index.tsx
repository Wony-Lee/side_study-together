import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import GroupList from "../components/Content/GroupList";
import Frame from "../components/CreateStudy/Frame";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import TermsOfService from "../components/SignUp/TermsOfService";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <GroupList />

      <Frame />
      <TermsOfService />
      <SignUp />
      <Login />
    </AppLayout>
  );
};

export default Home;
