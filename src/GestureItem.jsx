import React from "react";
import {motion} from "framer-motion";

function GestureItem(props) {
  const handleClick = () => {
    props.handleSelections(props.name);
  };
  return (
    <motion.div
      key={props.id}
      exit={{opacity: 0, scale: 0}}
      onClick={handleClick}
      style={{borderColor: `${props.color}`}}
      className={`image transition-all`}>
      <img src={props.path} alt={props.name} />
    </motion.div>
  );
}

export default GestureItem;
