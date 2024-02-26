import React from "react";

function CustomButton({children, onClick}) {
  return (
    <button
      onClick={onClick}
      className="bg-[white] uppercase  text-scoreColor px-10 py-2 rounded-lg">
      {children}
    </button>
  );
}

export default CustomButton;
