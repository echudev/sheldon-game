import ButtonRules from "../../components/ButtonRules";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ButtonRules", () => {
  let show: boolean = false;
  const openModalHandler = (): void => {
    show = !show;
  };

  beforeEach(() => {
    render(<ButtonRules openModalHandler={openModalHandler} />);
  });

  test("should show button text on render", () => {
    expect(screen.getByText(/RULES/)).toBeDefined();
  });

  test("should toggle 'show' to true or false, on click", () => {
    const button = screen.getByText(/RULES/);
    fireEvent.click(button);
    expect(show).toBe(true);
    fireEvent.click(button);
    expect(show).toBe(false);
  });
});
