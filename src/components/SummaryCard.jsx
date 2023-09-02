import data from "../data/data.json";
import { clsx } from "clsx";

const SummaryCard = () => {
  return (
    <div className="flex flex-col px-8 my-8 md:w-1/2">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      {data.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "flex items-center justify-between",
            "my-2 px-3 py-2 rounded-xl",
            {
              "bg-primary-reaction": item.category.toLowerCase() === "reaction",
              "bg-primary-memory": item.category.toLowerCase() === "memory",
              "bg-primary-verbal": item.category.toLowerCase() === "verbal",
              "bg-primary-visual": item.category.toLowerCase() === "visual",
            },
            "bg-opacity-20",
            "font-semibold"
          )}
        >
          <div className="flex gap-2">
            <img src={item.icon} alt={item.category} />
            <h3
              className={clsx({
                "text-primary-reaction":
                  item.category.toLowerCase() === "reaction",
                "text-primary-memory": item.category.toLowerCase() === "memory",
                "text-primary-verbal": item.category.toLowerCase() === "verbal",
                "text-primary-visual": item.category.toLowerCase() === "visual",
              })}
            >
              {item.category}
            </h3>
          </div>
          <p className="flex gap-2">
            <span className="font-bold">{item.score}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">100</span>
          </p>
        </div>
      ))}
      <button
        className={clsx(
          "bg-neutral-dark-gray-blue",
          "mt-8 px-12 py-2 w-full rounded-3xl",
          "text-white"
        )}
      >
        Continue
      </button>
    </div>
  );
};

export default SummaryCard;
