import ButtonRules from "./index";
import { render, screen } from "@testing-library/react";

describe("ButtonRules", () => {
  beforeEach(() => {
    render(<ButtonRules />);
  });

  test("should show button text on render", () => {
    expect(screen.getByText(/RULES/)).toBeDefined();
  });
});
