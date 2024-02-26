import React from "react";
import Header from "./Header";
import PlayerGestureSelector from "./PlayerGestureSelector";
import Rules from "./Rules";
import {AnimatePresence} from "framer-motion";

function App() {
  const [startGame, setStartGame] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showModal, setShowModal] = React.useState();

  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      }}
      className=" w-full relative uppercase font-semibold select-none  h-screen p-10 box-border text-textColor ">
      <div className="w-full mx-auto grid grid-rows-[1fr,_5fr]">
        <Header score={score} />
        <PlayerGestureSelector
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
