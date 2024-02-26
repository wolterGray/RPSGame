import React from "react";
import GestureItem from "./GestureItem";
import {motion} from "framer-motion";

function DisplayResult({userSelection, computerSelection}) {
  return (
    <motion.div className="flex  justify-between  items-center gap-12">
      <GestureItem {...userSelection} />
      <div>
        <p className=" text-5xl mb-3">You Win</p>
        <button className="bg-[white] uppercase  text-scoreColor px-10 py-2 rounded-lg">
          Play Again
        </button>
      </div>
      <GestureItem {...computerSelection} />
    </motion.div>
  );
}

export default DisplayResult;
