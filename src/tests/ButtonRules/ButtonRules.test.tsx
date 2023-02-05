import ButtonRules from "../../components/ButtonRules";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ButtonRules", () => {
  let show: boolean = false;
  const setShowModal = () => {
    let show = !show;
  };
  beforeEach(() => {
    render(<ButtonRules setShowModal={setShowModal} />);
  });

  test("should show button text on render", () => {
    expect(screen.getByText(/RULES/)).toBeDefined();
  });

  test("should change show to true on click", () => {
    const button = screen.getByText(/RULES/);
    fireEvent.click(button);
    expect(show).toBe(true);
  });
});
