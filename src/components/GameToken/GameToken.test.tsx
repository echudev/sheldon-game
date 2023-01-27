import GameToken from "./index";
import { render, screen } from "@testing-library/react";

describe("GameToken", () => {

  test("Game token should have paper variant styles", () => {
    render(<GameToken variant="paper" />); 

    const token = screen.getByAltText(`${variant}-icon`);

    expect(token).toBeDefined();
  });

  //   test("should not show the content at the start", () => {
  //     expect(screen.queryByText(/content/i)).toBeNull();
  //   });

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
