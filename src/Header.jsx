import React from "react";

function Header({score}) {
  return (
    <header className="flex  justify-between items-center gap-10 border-2 h-full relative rounded-xl w-6/12 mx-auto p-4 border-solid border-outlineColor uppercase ">
      <div className="">
        <h1 className="leading-[0.8] flex flex-col font-semibold text-4xl">
          <span>Rock</span>
          <span>Paper</span>
          <span>Scissors</span>
        </h1>
      </div>
      <div className=" bg-[white] font-semibold rounded-xl flex flex-col items-center justify-center h-full w-2/12 text-scoreColor">
        <p className="text-xs tracking-[.2em]">Score</p>
        <p className="text-5xl">{score}</p>
      </div>
    </header>
  );
}

export default Header;
