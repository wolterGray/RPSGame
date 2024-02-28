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
      className="mediaGestureWrapper flex sm:justify-between justify-center flex-wrap items-center  mx-auto  mt-20">
      <div className=" flex flex-col sm:order-none order-1 gap-12 items-center ">
        <h2 className="mediaGestText text-nowrap">You Picked</h2>
        <GestureItem
          large={true}
          size={true}
          win={userWin}
          {...userSelection}
        />
      </div>
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{delay: 0.3}}
        className="flex sm:order-none order-3 mt-10 flex-col items-center">
        <p className=" text-4xl mb-5  whitespace-nowrap">{resultMessage}</p>
        {resultMessage !== "game over" ? (
          <CustomButton onClick={() => setStartGame(false)}>
            Try Again
          </CustomButton>
        ) : (
          <CustomButton onClick={newGame}>New Game</CustomButton>
        )}
      </motion.div>
      <div className=" flex flex-col sm:order-none order-2 gap-12 items-center ">
        <h2 className="mediaGestText text-nowrap">The House Picked</h2>
        <GestureItem large={true} w={80} win={compWin} {...computerSelection} />
      </div>
    </div>
  );
}

export default DisplayResult;
