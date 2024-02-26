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
  const [userWin, setUserWin] = React.useState(false);
  const [compWin, setCompWin] = React.useState(false);

  function getResultMessage(userResult, compResult) {
    if (userResult === compResult) {
      setResultMessage("Draw");
    } else if (
      (userResult === "paper" && compResult === "rock") ||
      (userResult === "rock" && compResult === "scissors") ||
      (userResult === "scissors" && compResult === "paper")
    ) {
      setResultMessage("You win!");
      setUserWin(true);
      setCompWin(false);
      setScore((prev) => prev + 1);
    } else {
      score > 1 ? setResultMessage("You lose!") : setResultMessage("game over");
      setScore((prev) => (prev > 0 ? prev - 1 : 0));
      setCompWin(true);
      setUserWin(false);
    }
  }

  React.useEffect(() => {
    getResultMessage(userSelection.name, computerSelection.name);
  }, []);
  return (
    <div
      initial={{scale: 0}}
      className="flex  justify-between  items-center gap-12">
      <div className="flex flex-col items-center ">
        <h2 className="mb-10">You Picked</h2>
        <GestureItem size={true} win={userWin} {...userSelection} />
      </div>
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{delay: 0.3}}
        className="flex flex-col items-center">
        <p className=" text-5xl mb-3 whitespace-nowrap">{resultMessage}</p>
        {resultMessage !== "game over" ? (
          <CustomButton onClick={() => setStartGame(false)}>
            Try Again
          </CustomButton>
        ) : (
          <CustomButton onClick={newGame}>New Game</CustomButton>
        )}
      </motion.div>
      <div className="flex flex-col items-center ">
        <h2 className="mb-10">The House Picked</h2>
        <GestureItem size={true} win={compWin} {...computerSelection} />
      </div>
    </div>
  );
}

export default DisplayResult;
