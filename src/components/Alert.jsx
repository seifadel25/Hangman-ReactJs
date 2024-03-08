export const Alert = ({ gameState, wins, losses, onRestart }) => {
  const gameStates = {
    won: "You Won!",
    lost: "You Lost!",
    gaveup: "You Gave Up!",
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        className={` shadow-2xl drop-shadow-2xl backdrop-blur-sm  p-8 rounded-lg w-4/6 md:w-2/6 flex-col flex justify-center items-center ${
          gameState === "won"
            ? "bg-green-700/85 text-white shadow-green-700"
            : "bg-red-700/85 text-white shadow-red-700"
        }`}
      >
        <h2 className="text-3xl font-bold">{gameStates[gameState]}</h2>
        <p className="text-xl">You played {wins + losses} games</p>
        <p className="text-xl">You won {wins} games</p>
        <p className="text-xl">You lost {losses} games</p>
        <button
          onClick={onRestart} // This now directly calls the onRestart prop function, which is responsible for hiding the alert and managing the blur effect in App.js
          className="mt-4 px-4 py-2 rounded-md bg-black text-white"
        >
          New Game
        </button>
      </div>
    </div>
  );
};
