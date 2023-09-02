import { clsx } from "clsx";

const ResultCard = () => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center",
        "bg-gradient-to-b from-gradients-light-slate-blue to-gradients-light-royal-blue",
        "py-2 rounded-3xl",
        "md:w-1/2"
      )}
    >
      <h1 className="text-neutral-light-lavender font-bold text-lg mb-6 mx-20">
        Your Result
      </h1>
      <div
        className={clsx(
          "flex flex-col items-center",
          "bg-gradient-to-b from-gradients-violet-blue to-gradients-persian-blue",
          "rounded-full px-10 py-8 mx-20"
        )}
      >
        <p className="font-bold text-6xl text-neutral-white">76</p>
        <p className="text-neutral-light-lavender opacity-50">of 100</p>
      </div>
      <div
        className={clsx(
          "flex flex-col justify-center items-center gap-3",
          "mt-6 px-12"
        )}
      >
        <p className="text-neutral-white text-2xl">Great</p>
        <p className="text-neutral-light-lavender text-center text-sm opacity-90">
          You scored higher than 65% of the people who take these tests.
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
