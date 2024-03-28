import React from "react";

export const Key = React.memo(({ letter, onClick, disabled }) => {
  return (
    <button
      onClick={() => onClick(letter)}
      disabled={disabled}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      className={`shadow-md md:shadow-2xl  md:my-3 my-2 md:drop-shadow-2xl drop-shadow-md ml-1 shadow-black md:backdrop-blur-2xl md:w-14 w-8 md:h-14 h-10 md:transition-all md:duration-200 md:text-xl text-2xl bg-gray-100 m-1 border border-slate-200 rounded-md ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "md:hover:bg-gray-700 md:hover:scale-110 md:hover:text-white"
      }`}
    >
      {letter}
    </button>
  );
});

export const Keyboard = ({ onClick, disabledKeys }) => {
  const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div>
      {keys.map((row, index) => {
        return (
          <div className="flex flex-wrap justify-center md:space-x-5 " key={index}>
            {row.split("").map((key) => (
              <Key
                key={key}
                letter={key}
                onClick={onClick}
                disabled={disabledKeys.has(key)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
