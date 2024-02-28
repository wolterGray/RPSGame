import React from "react";
import {motion} from "framer-motion";

function GestureItem(props) {
  const handleClick = () => {
    props.handleSelection && props.handleSelection(props.name);
  };
  const largeSize = props.large
    ? "mediaGestureLarge"
    : "w-52 h-52 border-[25px]";

  return (
    <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      whileTap={{translateY: 5}}
      whileHover={{scale: 1.05, rotate: 10}}
      key={props.id}
      onClick={handleClick}
      style={{borderColor: `${props.color}`}}
      className={`image ${largeSize} ${props.win && "boxShadow"}`}>
      <img className=" w-[40%] " src={props.path} alt={props.name} />
    </motion.div>
  );
}

export default GestureItem;
