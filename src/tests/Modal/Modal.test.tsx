import Modal from "../../components/Modal";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Modal", () => {
  let showModal: boolean = true;
  const openModalHandler = (): void => {
    showModal = !showModal;
  };

  beforeEach(() => {
    render(<Modal showModal={showModal} openModalHandler={openModalHandler} />);
  });

  test("Modal must show title, image content and close button", () => {
    const title = screen.queryByText(/Rules/i);
    const content = screen.queryByAltText("img-rules");
    const closeButton = screen.queryByAltText("icon-close");

    expect(title).toBeDefined();
    expect(content).toBeDefined();
    expect(closeButton).toBeDefined();
  });

  test("showModal should be false when close button is clicked", () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const closeButton = screen.queryByAltText("icon-close")!;
    fireEvent.click(closeButton);
    expect(showModal).toBe(false);
    fireEvent.click(closeButton);
    expect(showModal).toBe(true);
  });

  test("showModal should be false when backdrop is clicked", () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const backdrop = screen.queryByRole("presentation")!;
    fireEvent.click(backdrop);
    expect(showModal).toBe(false);
  });
});
