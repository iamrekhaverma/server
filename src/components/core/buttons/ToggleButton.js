import React from "react";

const setCheckedProp = (title) => {
  if (typeof window === "undefined") {
    global.window = {};
  }
  if (typeof window !== undefined && window.location) {
    // browser code
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(title);
    return myParam;
  }
};
export const ToggleButton = ({ title, className, id, filter, onChange }) => {
  return (
    <div className={className}>
      <input
        type="radio"
        name={filter}
        id={id}
        value={title}
        onChange={onChange}
        checked={setCheckedProp(filter) == title}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};
