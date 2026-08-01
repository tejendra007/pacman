import Cell from "../Cell/Cell";
import { useGameStore } from "../../store/gameStore";

export default function Board() {
  const pacman = useGameStore((state) => state.pacman);
  const maze = useGameStore((state) => state.maze);

  return (
    <div className="inline-block">
      {maze.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, cellIndex) => {
            const isPacman =
              pacman.row === rowIndex && pacman.col === cellIndex;
            return (
              <div key={`${rowIndex}-${cellIndex}`} className="relative">
                <Cell value={cell} isPacman={isPacman} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
