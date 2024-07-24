import React from "react";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

function GuessInput({ handleSumbitGuess, guesses, answer }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSumbit(event) {
    event.preventDefault();
    handleSumbitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  const [disabled, setDisabled] = React.useState(false);
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSumbit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={disabled}
          type="text"
          id="guess-input"
          value={tentativeGuess}
          pattern="[A-Za-z]{5}"
          title="You must write 5 letters words"
          onChange={(e) => {
            setTentativeGuess(e.target.value.toUpperCase());
          }}
        ></input>
      </form>

      <GameOverBanner
        value={guesses}
        answer={answer}
        setDisabled={setDisabled}
      />
    </div>
  );
}

export default GuessInput;
