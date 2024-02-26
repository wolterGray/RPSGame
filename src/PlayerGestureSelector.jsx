import React from "react";
import GestureItem from "./GestureItem";

function PlayerGestureSelector({startGame, setStartGame}) {
  const [gestureData, setGestureData] = React.useState([
    {
      id: 1,
      name: "paper",
      color: "#515fe1",
      path: "/images/icon-paper.svg",
    },
    {
      id: 2,
      name: "scissors",
      color: "#e8a839",
      path: "/images/icon-scissors.svg",
    },
    {
      id: 3,
      name: "rock",
      color: "#da2d2d",
      path: "/images/icon-rock.svg",
    },
  ]);

  const [computerSelection, setComputerSelection] = React.useState([]);
  const [userSelection, setUserSelection] = React.useState([]);
  
  console.log(userSelection, computerSelection);
  const handleSelections = (option) => {
    setStartGame(true);
    setUserSelection(gestureData.filter((b) => b.name === option));
    setComputerSelection([
      gestureData[Math.floor(Math.random() * gestureData.length)],
    ]);
  };
  return (
    <div>
      <div className="mt-14">
        <div className=" flex flex-col items-center mx-auto ">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {!startGame &&
              gestureData.map((button) => (
                <GestureItem handleSelections={handleSelections} key={button.id} {...button} />
              ))}
          </div>
        </div>
        <button className="absolute border-2 border-outlineColor px-10 py-2 bottom-10 right-20 rounded-xl hover:bg-scoreColor transition-bg ease-out uppercase text-xl tracking-[.2em]">
          Rule$
        </button>
      </div>
    </div>
  );
}

export default PlayerGestureSelector;
