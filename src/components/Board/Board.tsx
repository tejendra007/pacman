import Cell from "../Cell/Cell";
import { useGameStore } from "../../store/gameStore";
import { useEffect } from "react";
import { Ghost } from "../Ghost/Ghost";
import Pacman from "../Pacman/Pacman";

export default function Board() {
  const pacman = useGameStore((state) => state.pacman);
  const maze = useGameStore((state) => state.maze);
  const ghosts = useGameStore((state) => state.ghosts);
  const moveGhosts = useGameStore((state) => state.moveGhosts);

  useEffect(() => {
    const interval = setInterval(() => {
      moveGhosts();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block">
      {maze.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, cellIndex) => {
            const isPacman =
              pacman.row === rowIndex && pacman.col === cellIndex;
            const ghost = ghosts.find(
              (ghost) =>
                ghost.position.row === rowIndex &&
                ghost.position.col === cellIndex,
            );
            return (
              <div key={`${rowIndex}-${cellIndex}`} className="relative">
                <Cell value={cell} />
                {isPacman && (
                  <div className="pacman absolute z-1">
                    <Pacman />
                  </div>
                )}
                {ghost && (
                  <Ghost
                    key={ghost.id}
                    row={ghost.position.row}
                    col={ghost.position.col}
                    color={ghost.color}
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
      <span>
        <button onClick={moveGhosts}>Move Ghosts</button>
      </span>
    </div>
  );
}
