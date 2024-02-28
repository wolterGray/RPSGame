import React from "react";

function CustomButton({children, onClick}) {
  return (
    <button
      onClick={onClick}
      className="bg-[white]  whitespace-nowrap uppercase  text-scoreColor  sm:px-10 sm:py-2 px-20 py-4 rounded-lg">
      {children}
    </button>
  );
}

export default CustomButton;
