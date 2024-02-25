import React from "react";

function App() {
  const [startGame, setStartGame] = React.useState(false);

  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      }}
      className="w-full uppercase font-semibold select-none  h-screen p-10 box-border text-textColor "></div>
  );
}

export default App;
