import ButtonRules from "./components/ButtonRules";
import Header from "./components/Header";
import TokenPicker from "./components/TokenPicker";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative flex flex-col h-screen w-screen max-w-5xl items-center">
      <Header />
      <TokenPicker />
      <ButtonRules setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
