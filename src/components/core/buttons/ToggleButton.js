import React from "react";

export const ToggleButton = ({ title, className }) => {
  return (
    <div className={className}>
      <input type="radio" name={title} checked />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};
