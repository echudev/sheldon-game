import { render, screen } from "@testing-library/react";
import GameToken from "../../components/GameToken";

describe("GameToken", () => {
  test("GameToken component should have rock variant styles and logo icon", () => {
    render(<GameToken variant={"rock"} />);
    const gametoken = screen.getByTestId("gt");
    const icon = screen.getByAltText("rock-icon");
    expect(gametoken.classList.contains("bg-gradient-rock")).toBe(true);
    expect(icon).toBeDefined();
  });
  test("GameToken component should have paper variant styles and logo icon", () => {
    render(<GameToken variant={"paper"} />);
    const gametoken = screen.getByTestId("gt");
    const icon = screen.getByAltText("paper-icon");
    expect(gametoken.classList.contains("bg-gradient-paper")).toBe(true);
    expect(icon).toBeDefined();
  });
  test("GameToken component should have spock variant styles and logo icon", () => {
    render(<GameToken variant={"spock"} />);
    const gametoken = screen.getByTestId("gt");
    const icon = screen.getByAltText("spock-icon");
    expect(gametoken.classList.contains("bg-gradient-spock")).toBe(true);
    expect(icon).toBeDefined();
  });
  test("GameToken component should have lizard variant styles and logo icon", () => {
    render(<GameToken variant={"lizard"} />);
    const gametoken = screen.getByTestId("gt");
    const icon = screen.getByAltText("lizard-icon");
    expect(gametoken.classList.contains("bg-gradient-lizard")).toBe(true);
    expect(icon).toBeDefined();
  });
  test("GameToken component should have scissors variant styles and logo icon", () => {
    render(<GameToken variant={"scissors"} />);
    const gametoken = screen.getByTestId("gt");
    const icon = screen.getByAltText("scissors-icon");
    expect(gametoken.classList.contains("bg-gradient-scissors")).toBe(true);
    expect(icon).toBeDefined();
  });
});
