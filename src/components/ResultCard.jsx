import { clsx } from "clsx";

const ResultCard = () => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center",
        "bg-gradient-to-b from-gradients-light-slate-blue to-gradients-light-royal-blue",
        "px-20 py-8 rounded-3xl",
        "md:w-1/2"
      )}
    >
      <h1 className="text-neutral-light-lavender font-bold text-lg mb-4">
        Your Result
      </h1>
      <div
        className={clsx(
          "flex flex-col items-center",
          "bg-gradient-to-b from-gradients-violet-blue to-gradients-persian-blue",
          "rounded-full px-12 py-10"
        )}
      >
        <p className="font-bold text-5xl text-neutral-white">76</p>
        <p className="text-neutral-pale-blue">of 100</p>
      </div>
      <div>
        <p className="text-neutral-white text-2xl text-center mb-2 mt-4">
          Great
        </p>
        <p className="text-neutral-light-lavender text-center">
          You scored higher than 65% of the people who take these tests
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
