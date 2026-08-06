import { CELL_TYPES, type CellType } from "../../constants/cellTypes";

type CellProps = {
  value: CellType;
};

export default function Cell({ value }: CellProps) {
  return (
    <div
      className={`
        cell 
        h-8
        w-8
        border
        border-gray-700
        ${value === CELL_TYPES.WALL ? "bg-blue-600" : "bg-black"}
      `}
    >
      {value === CELL_TYPES.PELLET && <span className="pellet"></span>}
    </div>
  );
}
