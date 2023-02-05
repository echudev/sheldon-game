import { Dispatch, SetStateAction } from "react";

interface BackdropProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Backdrop = ({ showModal, setShowModal }: BackdropProps) => {
  const handlerClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div
      role="dialog"
      onClick={handlerClick}
      className={`absolute z-30 flex justify-center items-center h-screen w-screen select-none backdrop-brightness-50 
       transition-opacity ease-in duration-300 
      ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    ></div>
  );
};

export default Backdrop;
