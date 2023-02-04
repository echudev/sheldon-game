import TokenPicker from "../../components/TokenPicker";
import { render, screen } from "@testing-library/react";

describe("TokenPicker", () => {
  beforeEach(() => {
    render(<TokenPicker />);
  });
  test("Component must be rendered at start, while userPick is false", () => {
    expect(screen.getByRole(/main/i)).toBeDefined();
  });
  test("All 5 token variants must be displayed", () => {
    //   expect(screen.queryByText(/content/i)).toBeNull();
  });
  test("When userPick is true, TokenPiker component must not be rendered anymore", () => {
    // expect(screen.queryByText(/content/i)).toBeNull();
  });

  //   test("should show the content when button open is clicked", () => {
  //     const button = screen.getByText(/open/i);
  //     fireEvent.click(button);
  //     expect(screen.queryByText(/content/i)).toBeDefined();
  //   });

  //   test("should hide the content when button open is clicked twice", () => {
  //     const button = screen.getByText(/open/i);
  //     fireEvent.click(button);
  //     fireEvent.click(button);
  //     expect(screen.queryByText(/content/i)).toBeNull();
  //   });
});
