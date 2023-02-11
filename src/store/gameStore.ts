import { create } from "zustand";

type Variant = "rock" | "paper" | "scissors" | "lizard" | "spock" | undefined;

interface GameStore {
  score: number;
  increaseScore: (result: number) => void;
  resetScore: () => void;
  userToken: Variant;
  setUserToken: (userSelect: Variant) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  score: 0,
  increaseScore: (result) => set((state) => ({ score: state.score + result })),
  resetScore: () => set({ score: 0 }),
  userToken: undefined,
  setUserToken: (userSelect) => set({ userToken: userSelect }),
}));
