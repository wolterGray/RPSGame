import React from "react";
import GestureItem from "./GestureItem";
import {motion} from "framer-motion";
import CustomButton from "./CustomButton";

function DisplayResult({
  userSelection,
  computerSelection,
  setStartGame,
  score,
  setScore,
  newGame,
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
      score > 1 ? setResultMessage("You lose!") : setResultMessage("game over");
      setScore((prev) => (prev > 0 ? prev - 1 : 0));
    }
  }

  React.useEffect(() => {
    getResultMessage(userSelection.name, computerSelection.name);
  }, []);
  return (
    <div initial={{scale:0}} className="flex  justify-between  items-center gap-12">
      <GestureItem {...userSelection} />
      <motion.div initial={{scale:0}} animate={{scale:1}}transition={{delay:0.3}} className="flex flex-col items-center">
        <p className=" text-5xl mb-3">{resultMessage}</p>
        {resultMessage !== "game over" ? (
          <CustomButton onClick={() => setStartGame(false)}>
            Try Again
          </CustomButton>
        ) : (
          <CustomButton onClick={newGame}>New Game</CustomButton>
        )}
      </motion.div>
      <GestureItem {...computerSelection} />
    </div>
  );
}

export default DisplayResult;
