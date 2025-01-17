import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSumbitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSumbitGuess={handleSumbitGuess}
        guesses={guesses}
        answer={answer}
      />
    </>
  );
}

export default Game;
