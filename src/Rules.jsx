import React from "react";
import {motion} from "framer-motion";

function Rules({setShowModal}) {
  return (
    <motion.div  exit={{opacity: 0}} className="modal ">
      <motion.div
        initial={{zIndex: 10, opacity: 0}}
        animate={{opacity: 1}}
        className="absolute  top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 bg-[white] p-8 rounded-xl">
        <div className="flex justify-between items-center mb-10">
          <p className="uppercase font-bold text-3xl text-scoreColor">Rules</p>
          <button onClick={() => setShowModal(false)}>
            <img className="w-full" src="/images/icon-close.svg" alt="cross" />
          </button>
        </div>
        <div>
          <img src="/images/image-rules.svg" alt="rules" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Rules;
