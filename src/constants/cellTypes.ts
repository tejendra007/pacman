export const CELL_TYPES = {
  WALL: "W",
  EMPTY: "",
  PACMAN: "P",
  GHOST: "G",
} as const;

export type CellType = "W" | "." | "P" | "G";
