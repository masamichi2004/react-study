
export default function Square(
    { value }: { value: string | null },
    { onSquareClick }: { onSquareClick: () => void }
    ) {

  return (
    <button
     className="square"
     onClick={onSquareClick}
    >
    {value}
    </button>
  );
}