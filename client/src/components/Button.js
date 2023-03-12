import React from "react";

const Button = ({label,disabled}) => {
  return (
    <button
      disabled={!disabled}
      type="submit"
      className="text-sm font-semibold tracking-wider	 text-blue-900"
    >
     {label}
    </button>
  );
};

export default Button;
