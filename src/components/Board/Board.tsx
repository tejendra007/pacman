import Cell from "../Cell/Cell";
import Pacman from "../Pacman/Pacman";
import { maze } from "../../constants/maze";
import { useGameStore } from "../../store/gameStore";

export default function Board() {
  const pacman = useGameStore((state) => state.pacman);

  return (
    <div className="inline-block">
      {maze.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, cellIndex) => (
            <div key={`${rowIndex}-${cellIndex}`} className="relative">
              <Cell value={cell} />
              {pacman.row === rowIndex && pacman.col === cellIndex && (
                <div className="absolute z-1">
                  <Pacman />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
