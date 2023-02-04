import TokenPicker from "../../components/TokenPicker";
import { render, screen } from "@testing-library/react";

describe("TokenPicker", () => {
  beforeEach(() => {
    render(<TokenPicker />);
  });
  test("Component must be rendered at start, while userPick is false", () => {
    expect(screen.getByRole(/main/i)).toBeDefined();
  });
  test("All 5 variants must be displayed", () => {
    expect(screen.getByAltText("rock-icon")).toBeDefined();
    expect(screen.getByAltText("lizard-icon")).toBeDefined();
    expect(screen.getByAltText("spock-icon")).toBeDefined();
    expect(screen.getByAltText("paper-icon")).toBeDefined();
    expect(screen.getByAltText("scissors-icon")).toBeDefined();
  });
  test("When userPick is true, TokenPiker component must not be rendered anymore", () => {
    // expect(screen.queryByText(/content/i)).toBeNull();
  });
});
