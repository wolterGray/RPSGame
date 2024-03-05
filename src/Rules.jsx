import React from "react";
import {motion} from "framer-motion";

function Rules({setShowModal, startBonusGame}) {
  const rulesImg = startBonusGame
    ? "images/image-rules-bonus.svg"
    : "images/image-rules.svg";
  return (
    <motion.div exit={{opacity: 0}} className="modal">
      <motion.div
        initial={{zIndex: 10, opacity: 0}}
        animate={{opacity: 1}}
        className="mediaRulesBg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   bg-[white] px-10 py-8 ">
        <div className=" w-full mb-7 flex justify-between items-center">
          <p className=" uppercase font-bold text-3xl text-scoreColor">Rules</p>
          <button onClick={() => setShowModal(false)}>
            <img className=" w-full" src="images/icon-close.svg" alt="cross" />
          </button>
        </div>
        <div>
          <img className="mediaRulesImg" src={rulesImg} alt="rules" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Rules;
