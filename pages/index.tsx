import type { NextPage } from "next";
import GroupList from "../components/Content/GroupList";
import Modal from "../components/Modal/Modal";

const Home: NextPage = () => {
  return (
    <>
      <GroupList />
      <Modal title={"경고"} text={"가세요 지팡이도 부러뜨리기전에"} />
    </>
  );
};

export default Home;
