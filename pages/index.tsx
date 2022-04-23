import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import GroupList from "../components/Content/GroupList";
import Frame from "../components/CreateStudy/Frame";
import LoginForm from "../components/Login/LoginForm";
import SignUp from "../components/SignUp/SignUp";
import TermsOfService from "../components/SignUp/TermsOfService";
import Modal from "../components/Modal/Modal";

const Home: NextPage = () => {
  return (
    <>
      <AppLayout>
        <GroupList />
      </AppLayout>
      <Modal title={"경고"} text={"가세요 지팡이도 부러뜨리기전에"} />
    </>
  );
};

export default Home;
