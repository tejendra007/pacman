import type { CellType } from "../constants/cellTypes";

export type Position = {
  row: number;
  col: number;
};

export type Direction = "up" | "down" | "left" | "right";

export type Ghost = {
  id: string;
  position: Position;
  direction: Direction;
  color: string;
};

export type PelletResult = {
  pelletEaten: boolean;
  scoreDelta: number;
  updatedMaze: CellType[][];
};
