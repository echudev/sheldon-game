interface BackdropProps {
  showModal: boolean;
  openModalHandler: () => void;
}

const Backdrop = ({ showModal, openModalHandler }: BackdropProps) => {
  return (
    <div
      id="backdrop"
      role="presentation"
      onClick={openModalHandler}
      className={`absolute z-30 flex justify-center items-center h-screen w-screen select-none backdrop-brightness-50 
       transition-opacity ease-in duration-300 
      ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    ></div>
  );
};

export default Backdrop;
