type CellProps = {
  value: number;
};

export default function Cell({ value }: CellProps) {
  return (
    <div
      className={`
        h-8
        w-8
        border
        border-gray-700
        ${value === 1 ? "bg-blue-600" : "bg-black"}
      `}
    />
  );
}
