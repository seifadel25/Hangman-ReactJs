import { useState, useReducer, useEffect, useCallback } from "react";
import {
  Header,
  Footer,
  TopicLabel,
  Hangman,
  Letters,
  Keyboard,
  Alert,
} from "./components";
import data from "./data.json";
import reducer from "./reducer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const [currentTopic, setCurrentTopic] = useState("Animals");

  const changeTopic = (newTopic) => {
    setCurrentTopic(newTopic);
  };

  //States: Wins, losses,word,guessed letters, topic hints MistakeCount

  const [state, dispatch] = useReducer(reducer, {
    wins: 0,
    losses: 0,
    word: null,
    guessedLetters: [],
    topic: "Animals",
    hints: 0,
    MistakeCount: 0,
    gameState: null, //null, won, lost, gave up
  });
  const [disabledKeys, setDisabledKeys] = useState(new Set());

  const startGame = useCallback(() => {
    const newWord = wordGenerator(currentTopic);
    const guessedLetters = newWord
      .split("")
      .map((char) => (char === " " ? " " : null));
    dispatch({
      type: "startGame",
      payload: { word: newWord, guessedLetters },
    });
    setDisabledKeys(new Set());
    toggleAlertVisibility(false);
  }, [currentTopic]); // Depend on currentTopic to re-invoke startGame when it changes
  // Dependencies may need to include state.topic if you rely on it for other logic

  const wordGenerator = (currentTopic) => {
    const words = data[currentTopic];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  };

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (
      state.gameState === "won" ||
      state.gameState === "lost" ||
      state.gameState === "gaveup"
    ) {
      setAlertVisible(true); // Show the alert when game state changes to won, lost, or gave up
    }
  }, [state.gameState]); // Watch for changes in gameState

  const checkGuess = useCallback(
    (letter, hintUsed) => {
      if (letter === " ") return;

      if (state.word.includes(letter)) {
        const positions = [...state.word.matchAll(letter)];
        const letters = [...state.guessedLetters];
        positions.forEach((position) => {
          letters[position.index] = letter;
        });

        dispatch({ type: "guess", payload: { letters, hintUsed } });
      } else {
        dispatch({ type: "mistake", payload: { letter } });
        setDisabledKeys((prev) => new Set(prev).add(letter));
      }
    },
    [state.word, state.guessedLetters]
  );

  // Function to toggle the alert visibility and apply/remove blur
  const toggleAlertVisibility = (isVisible) => {
    setAlertVisible(isVisible);
    document.body.classList.toggle("blur-sm", isVisible);
  };

  // This function can be passed to child components or used as a callback for specific actions
  // e.g., when a game ends, to show the alert and blur the background
  const showAlert = () => toggleAlertVisibility(true);

  // This can be passed to the Alert component to hide it and remove the blur
  const hideAlert = () => toggleAlertVisibility(false);

  const giveUp = () => {
    dispatch({ type: "giveUp" });
    setDisabledKeys(new Set());
  };

  const useHint = () => {
    const allLetters = [...new Set(state.word)];

    const revealedLetters = state.guessedLetters.filter((x) => x);
    const hintLetters = allLetters.filter(
      (letter) => !revealedLetters.includes(letter)
    );
    const hintLetter =
      hintLetters[Math.floor(Math.random() * hintLetters.length)];
    checkGuess(hintLetter, true);
  };
  <Analytics />;
  return (
    <div>
      <div
        id="main-content"
        className={`flex flex-col md:h-screen max-h-screen ${
          alertVisible ? "md:blur-sm blur-[1px]" : ""
        }`}
      >
        <Header changeTopic={changeTopic} />
        <main className="md:flex-1 flex md:flex-row flex-col">
          <div className="flex-[2] md:order-1 order-2 bg-gray-300 flex items-center flex-col gap-3 md:gap-8 pt-4 md:pt-10 ">
            <TopicLabel topic={currentTopic} />
            <Letters letters={state.guessedLetters} />
            {/* Assuming Keyboard and other components can trigger showing the alert,
              you might want to pass showAlert to those components as well */}
            <Keyboard onClick={checkGuess} disabledKeys={disabledKeys} />
            <div className="w-3/6 md:w-3/6 flex justify-center gap-8 mb-10">
              <button
                onClick={giveUp}
                className="hover:scale-110 transition-all bg-red-700 text-xl text-white px-4 py-2 rounded-md"
              >
                Give up
              </button>
              <button
                disabled={state.hints === 0}
                onClick={useHint}
                className=" disabled:opacity-20 disabled:cursor-not-allowed relative hover:scale-110 transition-all bg-slate-800 text-xl text-white px-4 py-2 rounded-md"
              >
                Hint
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-2 py-1 text-sm">
                  {state.hints}
                </span>
              </button>
            </div>
            {/* Interactive elements here */}
            {/* Conditionally render the Alert component based on the alertVisible state */}
          </div>
          <div className="flex-[1] order-1 md:order-2">
            <Hangman MistakeCount={state.MistakeCount} />
          </div>
        </main>
        <div className="order-last">
          <Footer />
        </div>
      </div>
      <div className="">
        {alertVisible && (
          <Alert
            gameState={state.gameState}
            wins={state.wins}
            losses={state.losses}
            onRestart={startGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;
