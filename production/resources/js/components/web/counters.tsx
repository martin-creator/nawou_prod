export default function Counters() {
    const stats = [
      { value: "10,000+", label: "women empowered annually" },
      { value: "23+", label: "years advocating for women's rights" },
      { value: "500+", label: "financial literacy training sessions" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6 sm:gap-10 md:gap-12 sm:px-8 md:px-16 mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-full sm:w-[340px] bg-secondary/5 shadow-md rounded-[20px] flex flex-col justify-center items-center text-center px-6 py-5"
          >
            <h2 className="text-5xl sm:text-6xl font-semibold text-secondary">
              {stat.value}
            </h2>
            <p className="text-gray-600 mt-2 text-lg sm:text-xl w-full max-w-[251px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    );
  }
