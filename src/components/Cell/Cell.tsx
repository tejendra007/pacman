import { CELL_TYPES, type CellType } from "../../constants/cellTypes";
import Pacman from "../Pacman/Pacman";

type CellProps = {
  value: CellType;
  isPacman: boolean;
};

export default function Cell({ value, isPacman }: CellProps) {
  return (
    <div
      className={`
        h-8
        w-8
        border
        border-gray-700
        ${value === CELL_TYPES.WALL ? "bg-blue-600" : "bg-black"}
      `}
    >
      {isPacman && (
        <div className="absolute z-1">
          <Pacman />
        </div>
      )}
    </div>
  );
}
