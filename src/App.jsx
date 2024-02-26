import React from "react";
import Header from "./Header";
import PlayerGestureSelector from "./PlayerGestureSelector";

function App() {
  const [startGame, setStartGame] = React.useState(false);
	const [score, setScore] = React.useState(3);
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      }}
      className="w-full uppercase font-semibold select-none  h-screen p-10 box-border text-textColor ">
      <div className="w-full mx-auto grid grid-rows-[1fr,_5fr]">
        <Header score={score}/>
        <PlayerGestureSelector
		  	score={score}
          startGame={startGame}
          setStartGame={setStartGame}
			 setScore={setScore}
        />
      </div>
    </div>
  );
}

export default App;
