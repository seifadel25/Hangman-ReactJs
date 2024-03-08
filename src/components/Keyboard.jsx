import { useState } from "react";

export const Key = ({ letter, onClick, disabled }) => {
  return (
    <button
      onClick={() => onClick(letter)}
      disabled={disabled}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      className={`shadow-2xl my-3 drop-shadow-2xl shadow-black backdrop-blur-2xl w-14 h-14 transition-all duration-200 text-xl bg-gray-100 m-1 border border-slate-200 rounded-md ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-gray-700 hover:scale-110 hover:text-white"
      }`}
    >
      {letter}
    </button>
  );
};

export const Keyboard = ({ onClick, disabledKeys }) => {
  const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div>
      {keys.map((row, index) => {
        return (
          <div className="flex flex-wrap justify-center space-x-5" key={index}>
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
