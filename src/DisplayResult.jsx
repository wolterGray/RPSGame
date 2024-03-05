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
      (userResult === "paper" && compResult === "spock") ||
      (userResult === "rock" && compResult === "scissors") ||
      (userResult === "rock" && compResult === "lizard") ||
      (userResult === "scissors" && compResult === "paper") ||
      (userResult === "scissors" && compResult === "lizard") ||
      (userResult === "lizard" && compResult === "spock") ||
      (userResult === "lizard" && compResult === "paper") ||
      (userResult === "spock" && compResult === "scissors") ||
      (userResult === "spock" && compResult === "rock")
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
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="flex max-w-4xl  items-center sm:justify-center justify-around sm:flex-nowrap flex-wrap mx-auto mt-20 gap-x-5">
      <div className="flex flex-col  items-center gap-10 order-1 sm:order-none">
        <h2 className="mediaGestText text-nowrap">You Picked</h2>
        <div className={`mediaGestItem `}>
          <GestureItem win={userWin} {...userSelection} />
        </div>
      </div>
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{delay: 0.3}}
        className="flex mt-10 flex-col items-center flex-1 sm:order-none order-3">
        <p className=" text-4xl mb-5  whitespace-nowrap">{resultMessage}</p>
        {resultMessage !== "game over" ? (
          <CustomButton onClick={() => setStartGame(false)}>
            Try Again
          </CustomButton>
        ) : (
          <CustomButton onClick={newGame}>New Game</CustomButton>
        )}
      </motion.div>
      <div className="flex flex-col items-center gap-10 order-2 sm:order-none">
        <h2 className="mediaGestText text-nowrap">The house picked</h2>
        <div className="mediaGestItem">
          <GestureItem win={compWin} {...computerSelection} />
        </div>
      </div>
    </motion.div>
  );
}

export default DisplayResult;
