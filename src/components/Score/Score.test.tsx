import Score from "./index";
import { render, screen } from "@testing-library/react";

describe("Score board", () => {
  beforeEach(() => {
    render(<Score />);
  });

  test("should show the Score at the start", () => {
    expect(screen.queryByText(/Score/i)).toBeDefined();
  });
});
