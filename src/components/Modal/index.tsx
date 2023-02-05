import { Dispatch, SetStateAction } from "react";
import imgRules from "../../assets/image-rules.svg";
import iconClose from "../../assets/icon-close.svg";

interface ModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: ModalProps) => {
  const closeModalHandler = () => {
    props.setShowModal(false);
  };
  const backgroundClickHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      props.setShowModal(false);
    }
  };
  return (
    <div
      role="modal"
      onClick={backgroundClickHandler}
      className="absolute z-20 flex justify-center items-center h-screen w-screen select-none backdrop-brightness-50 transition duration-700 ease-in"
    >
      <div
        role="modal-background"
        className="relative flex flex-col items-center justify-around z-40 h-full w-full mobile:max-w-[450px] mobile:max-h-[450px] rounded-xl bg-slate-100"
      >
        <h3
          role="modal-title"
          className="z-50 text-dark text-xl font-bold mobile:mr-auto mobile:ml-6 mobile:mt-6"
        >
          Rules
        </h3>
        <img
          role="modal-content"
          alt="img-rules"
          src={imgRules}
          className="z-50 object-contain mb-6"
        />
        <button
          onClick={closeModalHandler}
          className="mobile:absolute mobile:top-8 mobile:right-6"
        >
          <img alt="icon-close" src={iconClose} className="z-50" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
