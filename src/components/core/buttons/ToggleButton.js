import React from "react";

export const ToggleButton = ({ title, className, id }) => {
  return (
    <div className={className}>
      <input type="radio" name="radio" id={id} value={title} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};
