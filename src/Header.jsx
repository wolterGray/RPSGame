import React from "react";

function Header({score}) {
  return (
    <header className="mediaHeader flex justify-between items-center gap-10 p-3 border-2 relative rounded-xl mx-auto border-solid border-outlineColor uppercase">
      <div>
        <h1 className="mediaLogo p-2 flex flex-col font-semibold ">
          <span className="block">Rock</span>
          <span className="block">Paper</span>
          <span className="block">Scissors</span>
        </h1>
      </div>
      <div className="mediaScoreWrap bg-[white]  h-full font-semibold rounded-md flex flex-col items-center justify-center text-scoreColor">
        <p className="mediaScore tracking-[.2em]">Score</p>
        <p className="mediaPoints">{score}</p>
      </div>
    </header>
  );
}

export default Header;
