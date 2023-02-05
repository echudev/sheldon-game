import ButtonRules from "./components/ButtonRules";
import Header from "./components/Header";
import TokenPicker from "./components/TokenPicker";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="relative flex flex-col h-screen w-screen max-w-5xl items-center">
      <Header />
      <TokenPicker />
      <ButtonRules openModalHandler={openModalHandler} />
      <Modal showModal={showModal} openModalHandler={openModalHandler} />
    </div>
  );
}

export default App;
