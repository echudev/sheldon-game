import { Dispatch, SetStateAction } from "react";

interface BtnProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ButtonRules = (props: BtnProps) => {
  const openModalHandler = () => {
    props.setShowModal(true);
  };
  return (
    <button
      onClick={openModalHandler}
      className="mt-auto border-2 rounded-lg border-gray-400 
      text-md py-1 px-8 m-10 
      bottom-0 desktop:absolute desktop:right-0
      hover:brightness-125 transition"
    >
      RULES
    </button>
  );
};

export default ButtonRules;
