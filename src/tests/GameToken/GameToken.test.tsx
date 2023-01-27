import { render, screen } from "@testing-library/react";
import GameToken from "../../components/GameToken";

describe("GameToken", () => {
  test("GameToken component should have rock variant styles", () => {
    render(<GameToken variant={"rock"} />);
    const gametoken = screen.getByRole("menuitem");
    expect(gametoken.classList.contains("bg-gradient-rock")).toBe(true);
  });
  test("GameToken component should have paper variant styles", () => {
    render(<GameToken variant={"paper"} />);
    const gametoken = screen.getByRole("menuitem");
    expect(gametoken.classList.contains("bg-gradient-paper")).toBe(true);
  });
  test("GameToken component should have spock variant styles", () => {
    render(<GameToken variant={"spock"} />);
    const gametoken = screen.getByRole("menuitem");
    expect(gametoken.classList.contains("bg-gradient-spock")).toBe(true);
  });
  test("GameToken component should have lizard variant styles", () => {
    render(<GameToken variant={"lizard"} />);
    const gametoken = screen.getByRole("menuitem");
    expect(gametoken.classList.contains("bg-gradient-lizard")).toBe(true);
  });
  test("GameToken component should have scissors variant styles", () => {
    render(<GameToken variant={"scissors"} />);
    const gametoken = screen.getByRole("menuitem");
    expect(gametoken.classList.contains("bg-gradient-scissors")).toBe(true);
  });
});
