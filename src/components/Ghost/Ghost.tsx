type GhostProps = {
  row: number;
  col: number;
  color: string;
};

export function Ghost({ row, col, color }: GhostProps) {
  return (
    <div
      className="ghost absolute z-1"
      style={{ gridRow: row + 1, gridColumn: col + 1, backgroundColor: color }}
    ></div>
  );
}
