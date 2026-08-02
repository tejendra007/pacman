export const CELL_TYPES = {
  WALL: "W",
  EMPTY: "E",
  PACMAN: "P",
  GHOST: "G",
  PELLET: ".",
} as const;

export type CellType = "W" | "E" | "P" | "G" | ".";
