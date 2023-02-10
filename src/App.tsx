import { useState } from "react";
import { Outlet } from "react-router-dom";
import ButtonRules from "./components/ButtonRules";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="flex flex-col h-screen w-screen max-w-5xl items-center">
      <Header />
      <Outlet />
      <ButtonRules openModalHandler={openModalHandler} />
      <Modal showModal={showModal} openModalHandler={openModalHandler} />
    </div>
  );
}

export default App;
