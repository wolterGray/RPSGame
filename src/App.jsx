import React from "react";
import Header from "./Header";
import PlayerGestureSelector from "./PlayerGestureSelector";

function App() {
  const [startGame, setStartGame] = React.useState(false);

  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      }}
      className="w-full uppercase font-semibold select-none  h-screen p-10 box-border text-textColor ">
      <div className="w-full mx-auto grid grid-rows-[1fr,_5fr]">
        <Header />
        <PlayerGestureSelector
          startGame={startGame}
          setStartGame={setStartGame}
        />
      </div>
    </div>
  );
}

export default App;
