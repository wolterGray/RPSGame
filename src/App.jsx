import React from "react";
import Header from "./Header";
import Rules from "./Rules";
import {AnimatePresence} from "framer-motion";
import GestureSelection from "./GestureSelection";

function App() {
  const localScore = localStorage.getItem("score");
  console.log(localScore);
  const [startGame, setStartGame] = React.useState(false);
  const [startBonusGame, setStartBonusGame] = React.useState(false);

  const [score, setScore] = React.useState(Number(localScore) || 0);
  const [showModal, setShowModal] = React.useState();

  React.useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <div className="mediaApp w-full max-h-screen h-screen relative uppercase font-semibold select-none box-border text-textColor ">
      <div className="w-full mx-auto">
        <Header score={score} />
        <GestureSelection
          showModal={showModal}
          setShowModal={setShowModal}
          score={score}
          startGame={startGame}
          setStartGame={setStartGame}
          startBonusGame={startBonusGame}
          setStartBonusGame={setStartBonusGame}
          setScore={setScore}
        />
      </div>
      <AnimatePresence>
        {showModal && (
          <Rules startBonusGame={startBonusGame} setShowModal={setShowModal} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
