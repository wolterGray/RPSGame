import React from "react";
import Header from "./Header";
import Rules from "./Rules";
import {AnimatePresence} from "framer-motion";
import GestureSelection from "./GestureSelection";

function App() {
  const [startGame, setStartGame] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showModal, setShowModal] = React.useState();

  return (
    <div className="mediaApp w-full h-screen relative uppercase font-semibold select-none box-border text-textColor ">
      <div className="w-full mx-auto">
        <Header score={score} />
        <GestureSelection
          setShowModal={setShowModal}
          score={score}
          startGame={startGame}
          setStartGame={setStartGame}
          setScore={setScore}
        />
      </div>
      <AnimatePresence>
        {showModal && <Rules setShowModal={setShowModal} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
