import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSumbit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  }
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSumbit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          type="text"
          id="guess-input"
          value={guess}
          pattern="[A-Za-z]{5}"
          title="You must write 5 letters words"
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </div>
  );
}

export default GuessInput;
