import { Dispatch, SetStateAction } from "react";
import imgRules from "../../assets/image-rules.svg";
import iconClose from "../../assets/icon-close.svg";
import Backdrop from "../Backdrop";

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const handlerCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      role="modal-container"
      className={`absolute w-screen h-screen flex items-center justify-center z-40 ${
        showModal ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <Backdrop showModal={showModal} setShowModal={setShowModal} />
      <div
        role="modal-content"
        className={`absolute flex flex-col items-center justify-around z-40 h-full w-full mobile:max-w-[450px] mobile:max-h-[450px] rounded-xl bg-slate-100
        transition-all ease-out duration-300
         ${showModal ? "translate-y-0" : "translate-y-[-200%]"}`}
      >
        <h3
          role="modal-title"
          className="z-50 text-dark text-xl font-bold mobile:mr-auto mobile:ml-6 mobile:mt-6"
        >
          Rules
        </h3>
        <img
          role="modal-image"
          alt="img-rules"
          src={imgRules}
          className="z-50 object-contain mb-6"
        />
        <button
          onClick={handlerCloseModal}
          className="mobile:absolute mobile:top-8 mobile:right-8"
        >
          <img alt="icon-close" src={iconClose} className="z-50" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
