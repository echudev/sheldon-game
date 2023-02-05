import Header from "../../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("should show svg logo all time", () => {
    const logo = screen.getByAltText("logo");
    expect(logo).toBeDefined();
  });
});
