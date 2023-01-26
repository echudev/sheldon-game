import ButtonRules from "./index";
import { render, screen } from "@testing-library/react";

describe("ButtonRules", () => {
  beforeEach(() => {
    render(<ButtonRules />);
  });

  test("should show button text", () => {
    expect(screen.getByText(/titulo/i)).toBeDefined();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
