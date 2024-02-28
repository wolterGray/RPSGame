import React from "react";
import GestureItem from "./GestureItem";
import DisplayResult from "./DisplayResult";
import {AnimatePresence, motion} from "framer-motion";

function GestureSelection({
  startGame,
  setStartGame,
  setShowModal,
  score,
  setScore,
}) {
  const [gestureData, setGestureData] = React.useState([
    {
      id: 1,
      name: "paper",
      color: "#515fe1",
      path: "/images/icon-paper.svg",
      position: "-top-24 left-40",
    },
    {
      id: 2,
      name: "scissors",
      color: "#e8a839",
      path: "/images/icon-scissors.svg",
      position: "-top-24 right-40",
    },
    {
      id: 3,
      name: "rock",
      color: "#da2d2d",
      path: "/images/icon-rock.svg",
      position: "-bottom-24 left-1/2 -translate-x-1/2",
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
    setUserSelection(gestureData.filter((b) => b.name === option)[0]);
    setComputerSelection(
      gestureData[Math.floor(Math.random() * gestureData.length)]
    );
  };

  return (
    <div className=" w-full h-full mx-auto">
      <div className="">
        {startGame ? (
          <div className="">
            <DisplayResult
              userSelection={userSelection}
              computerSelection={computerSelection}
              newGame={newGame}
              score={score}
              setScore={setScore}
              setStartGame={setStartGame}
            />
          </div>
        ) : (
          <div className="mediaGestWrap h-64 w-64 mx-auto flex justify-center bg-contain bg-no-repeat bg-[url('/images/bg-triangle.svg')]">
            {gestureData.map((gesture) => (
              <div key={gesture.id} className={`absolute ${gesture.position}`}>
                <GestureItem handleSelection={handleSelection} {...gesture} />
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="absolute sm:right-0 right-auto bottom-10 sm:left-auto left-1/2 -translate-x-1/2 border-2 border-outlineColor px-10 py-2 rounded-xl hover:bg-scoreColor transition-bg ease-out uppercase text-xl tracking-[.2em]">
        Rule$
      </button>
    </div>
  );
}

export default GestureSelection;
