import { CELL_TYPES, type CellType } from "../constants/cellTypes";
import { INITIAL_MAZE } from "../constants/maze";

type Position = {
  row: number;
  col: number;
};

export function isValidMove(row: number, col: number) {
  if (row < 0 || col < 0) {
    return false;
  }

  if (row >= INITIAL_MAZE.length) {
    return false;
  }

  if (col >= INITIAL_MAZE[0].length) {
    return false;
  }

  return INITIAL_MAZE[row][col] !== CELL_TYPES.WALL;
}

export function eatPellet(maze: CellType[][], position: Position) {
  const { row, col } = position;

  const cell = maze[row][col];

  console.log("cell", cell);

  if (cell === CELL_TYPES.EMPTY) {
    return {
      pelletEaten: false,
      scoreDelta: 0,
      updatedMaze: maze,
    };
  }

  const updatedMaze = maze.map((row) => [...row]);
  updatedMaze[row][col] = CELL_TYPES.EMPTY;

  return {
    pelletEaten: true,
    scoreDelta: 10,
    updatedMaze,
  };
}
