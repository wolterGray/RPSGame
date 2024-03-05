import React from "react";
import GestureItem from "./GestureItem";
import DisplayResult from "./DisplayResult";
import {AnimatePresence, motion} from "framer-motion";

function GestureSelection({
  startGame,
  setStartGame,
  startBonusGame,
  setStartBonusGame,
  setShowModal,
  score,
  setScore,
}) {
  const [gestureBonusData, setGestureBonusData] = React.useState([
    {
      id: 1,
      name: "paper",
      color: "#515fe1",
      path: "images/icon-paper.svg",
      position: "bottom-24  -right-36",
      size: "w-44 h-44",
    },
    {
      id: 2,
      name: "scissors",
      color: "#e8a839",
      path: "images/icon-scissors.svg",
      position: "-top-36 right-30",
      size: "w-44 h-44",
    },
    {
      id: 3,
      name: "rock",
      color: "#da2d2d",
      path: "images/icon-rock.svg",
      position: "-bottom-28 -right-[70px]",
      size: "w-44 h-44",
    },
    {
      id: 4,
      name: "lizard",
      color: "rgb(88, 18, 193)",
      path: "images/icon-lizard.svg",
      position: "-bottom-28 -left-[70px] ",
      size: "w-44 h-44",
    },
    {
      id: 5,
      name: "spock",
      color: "rgb(52, 162, 236)",
      path: "images/icon-spock.svg",
      position: "bottom-24  -left-36 ",
      size: "w-44 h-44",
    },
  ]);

  const [gestureData, setGestureData] = React.useState([
    {
      id: 1,
      name: "paper",
      color: "#515fe1",
      path: "images/icon-paper.svg",
      position: "-top-24 left-40",
      size: "w-52 h-52",
    },
    {
      id: 2,
      name: "scissors",
      color: "#e8a839",
      path: "images/icon-scissors.svg",
      position: "-top-24 right-40",
      size: "w-52 h-52",
    },
    {
      id: 3,
      name: "rock",
      color: "#da2d2d",
      path: "images/icon-rock.svg",
      position: "-bottom-24 left-1/2 -translate-x-1/2",
      size: "w-52 h-52",
    },
  ]);

  const [computerSelection, setComputerSelection] = React.useState([]);
  const [userSelection, setUserSelection] = React.useState([]);

  function newGame() {
    setStartGame(false);
    setScore(0);
  }

  const handleSelection = (option) => {
    setStartGame(true);
    if (startBonusGame) {
      setUserSelection(gestureBonusData.filter((b) => b.name === option)[0]);
      setComputerSelection(
        gestureBonusData[Math.floor(Math.random() * gestureBonusData.length)]
      );
    } else {
      setUserSelection(gestureData.filter((b) => b.name === option)[0]);
      setComputerSelection(
        gestureData[Math.floor(Math.random() * gestureData.length)]
      );
    }
  };
  const bgFigure = startBonusGame
    ? "bg-[url('/images/bg-pentagon.svg')]"
    : "bg-[url('/images/bg-triangle.svg')]";

  return (
    <div className="w-full h-full mx-auto">
      <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
        {startGame ? (
          <DisplayResult
            userSelection={userSelection}
            computerSelection={computerSelection}
            newGame={newGame}
            score={score}
            setScore={setScore}
            setStartGame={setStartGame}
          />
        ) : (
          <div
            className={`mediaGestWrap box-border h-64 w-64 mx-auto flex justify-center bg-contain bg-no-repeat ${bgFigure}`}>
            {startBonusGame
              ? gestureBonusData.map((gesture) => (
                  <div
                    key={gesture.id}
                    className={`absolute ${gesture.position} ${gesture.size} `}>
                    <GestureItem
                      handleSelection={handleSelection}
                      {...gesture}
                    />
                  </div>
                ))
              : gestureData.map((gesture) => (
                  <div
                    key={gesture.id}
                    className={`absolute  ${gesture.position} ${gesture.size}`}>
                    <GestureItem
                      handleSelection={handleSelection}
                      {...gesture}
                    />
                  </div>
                ))}
          </div>
        )}
      </motion.div>

      <div className="flex gap-4 absolute bottom-10 sm:right-10 sm:left-auto left-1/2 sm:-translate-x-0  -translate-x-1/2 ">
        <button onClick={() => setShowModal(true)} className="rulesBtn">
          Rule$
        </button>
        <button
          onClick={() => setStartBonusGame((prev) => !prev)}
          className={`rulesBtn`}>
          Bonu$
        </button>
      </div>
    </div>
  );
}

export default GestureSelection;
