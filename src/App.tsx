import Board from "./components/Board/Board";
import useKeyboard from "./hooks/useKeyboard";

export default function App() {
  useKeyboard();
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900">
      <Board />
    </main>
  );
}
