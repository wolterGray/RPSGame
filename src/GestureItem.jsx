import React from "react";
import {motion} from "framer-motion";

function GestureItem(props) {
  const handleClick = () => {
    props.handleSelections && props.handleSelections(props.name);
  };
  return (
    <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      whileTap={{translateY: 5}}
      key={props.id}
      onClick={handleClick}
      style={{borderColor: `${props.color}`}}
      className={`image`}>
      <img src={props.path} alt={props.name} />
    </motion.div>
  );
}

export default GestureItem;
