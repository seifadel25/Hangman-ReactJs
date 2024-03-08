const reducer = (state, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case "startGame":
      newState.word = payload.word;
      newState.guessedLetters = payload.guessedLetters;
      newState.hints = Math.ceil(payload.word.length * 0.3);
      newState.MistakeCount = 0;
      newState.gameState = null;
      return newState;
    case "mistake":
      newState.MistakeCount += 1;
      if (newState.MistakeCount >= 6) {
        newState.losses += 1;
        newState.gameState = "lost";
        newState.guessedLetters = newState.word.split("");
      }
      return newState;
    case "guess":
      newState.guessedLetters = payload.letters;
      if (payload.hintUsed) {
        newState.hints -= 1;
      }
      if (!payload.letters.includes(null)) {
        newState.wins += 1;
        newState.gameState = "won";
      }
      return newState;
    case "giveUp":
      newState.losses += 1;
      newState.MistakeCount = 6;
      newState.gameState = "gaveup";
      newState.guessedLetters = newState.word.split("");
      return newState;

    default:
      return state;
  }
};
export default reducer;
