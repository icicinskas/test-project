import { useContext } from "react";
import MainContext from "../context/MainContext";

import Modal from "../components/Modal";
import Movies from "../components/Movies";

const AppPage = () => {
  const { modal } = useContext(MainContext);
  return (
    <div>
      <Movies />
      {modal && <Modal />}
    </div>
  );
};

export default AppPage;
