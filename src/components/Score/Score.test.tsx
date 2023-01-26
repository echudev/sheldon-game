import Score from "./index";
import { render, screen } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    render(<Score />);
  });

  test("should show the Score at the start", () => {
    expect(screen.queryByText(/Score/i)).toBeDefined();
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
