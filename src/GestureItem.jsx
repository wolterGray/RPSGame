import React from "react";
import {motion} from "framer-motion";

function GestureItem(props) {
  const handleClick = () => {
    props.handleSelection && props.handleSelection(props.name);
  };

  return (
    <motion.div
      whileTap={{translateY: 5}}
      whileHover={{scale: 1.05}}
      key={props.id}
      className="w-full h-full"
      onClick={handleClick}>
      <div
        style={{borderColor: props.color}}
        className={`image relative bg-white border-${
          props.color
        }  w-full h-full border-[22px] ${props.win && "boxShadow"}`}>
        {" "}
        <img className=" w-[40%]" src={props.path} alt={props.name} />
      </div>
      <div
        style={{background: props.color, filter: "brightness(60%)"}}
        className={`-bottom-3 -z-10  gestureShadow`}
      />
    </motion.div>
  );
}

export default GestureItem;
