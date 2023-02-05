import Modal from "../../components/Modal";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Modal", () => {
  let showModal = false;

  function setShowModal() {
    showModal = !showModal;
  }

  beforeEach(() => {
    render(<Modal showModal={showModal} setShowModal={setShowModal} />);
  });

  test("Modal should be hidden at the start", () => {
    expect(screen.queryByRole("modal-title")).toBeDefined();
  });

  //   test("Modal should be shown when RULES button clicked", () => {
  //     const button = screen.getByText(/open/i);
  //     fireEvent.click(button);
  //     expect(screen.queryByText(/Score/i)).toBeDefined();
  //   });

  //   test("Modal should be hidden when x button clicked", () => {
  //     const button = screen.getByText(/open/i);
  //     fireEvent.click(button);
  //     expect(screen.queryByText(/Score/i)).toBeDefined();
  //   });

  //   test("Modal should be hidden when backdrop is clicked ONLY in big screens (>400px)", () => {
  //     const button = screen.getByText(/open/i);
  //     fireEvent.click(button);
  //     expect(screen.queryByText(/Score/i)).toBeDefined();
  //   });
});
