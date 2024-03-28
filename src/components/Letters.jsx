export const Letters = ({ letters = [] }) => {
  return (
    <div className="flex gap-2 md:gap-5 flex-wrap bg-slate-600 p-2 py-2 rounded-lg">
      {letters.map((letter, index) => (
        <div
          key={index}
          className={`flex justify-center items-center text-2xl md:text-3xl md:w-12 md:h-12 w-8 h-8 bg-gray-100 m-1 border border-slate-200 rounded-md font-bold ${
            letter === " " ? "bg-slate-600" : "" // Use the same background color as the container for spaces
          }`}
        >
          {letter === " " ? "" : letter}{" "}
          {/* Empty string or some placeholder for spaces */}
        </div>
      ))}
    </div>
  );
};
