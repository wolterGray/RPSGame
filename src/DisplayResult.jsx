import React from "react";
import GestureItem from "./GestureItem";
import {motion} from "framer-motion";

function DisplayResult({
  userSelection,
  computerSelection,
  setStartGame,
  setScore,
}) {
  const [resultMessage, setResultMessage] = React.useState("");

  function getResultMessage(userResult, compResult) {
    if (userResult === compResult) {
      setResultMessage("Draw");
    } else if (
      (userResult === "paper" && compResult === "rock") ||
      (userResult === "rock" && compResult === "scissors") ||
      (userResult === "scissors" && compResult === "paper")
    ) {
      setResultMessage("You win!");
      setScore((prev) => prev + 1);
    } else {
      setResultMessage("You lose!");
      setScore((prev) => prev - 1);
    }
  }
  React.useEffect(() => {
    getResultMessage(userSelection.name, computerSelection.name);
  }, []);
  return (
    <motion.div className="flex  justify-between  items-center gap-12">
      <GestureItem {...userSelection} />
      <div className="flex flex-col items-center">
        <p className=" text-5xl mb-3">{resultMessage}</p>
        <button
          onClick={() => setStartGame(false)}
          className="bg-[white] uppercase  text-scoreColor px-10 py-2 rounded-lg">
          Play Again
        </button>
      </div>
      <GestureItem {...computerSelection} />
    </motion.div>
  );
}

export default DisplayResult;
