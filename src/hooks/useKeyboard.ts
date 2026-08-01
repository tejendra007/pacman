import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";

export default function useKeyboard() {
  const movePacman = useGameStore((state) => state.movePacman);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          movePacman(0, -1);
          break;

        case "ArrowDown":
          movePacman(0, 1);
          break;

        case "ArrowLeft":
          movePacman(-1, 0);
          break;

        case "ArrowRight":
          movePacman(1, 0);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [movePacman]);
}
