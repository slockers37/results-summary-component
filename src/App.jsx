import "./App.css";
import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";
import { clsx } from "clsx";

function App() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div
        className={clsx(
          "flex flex-col",
          "rounded-2xl shadow-md",
          "m-14 max-w-2xl",
          "md:flex-row"
        )}
      >
        <ResultCard />
        <SummaryCard />
      </div>
    </main>
  );
}

export default App;
