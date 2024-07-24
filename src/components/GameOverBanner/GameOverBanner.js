import React from "react";

function GameOverBanner({ value, answer, setDisabled }) {
  for (let i = 0; i <= value.length; i++) {
    if (value[i] === answer && value.length < 6) {
      setDisabled(true);
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {""}
            <strong>{i === 0 ? " 1 guess" : `${i + 1} guesses`}</strong>.
          </p>
        </div>
      );
    } else if (value.length >= 6) {
      setDisabled(true);
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    }
  }
}

export default GameOverBanner;
