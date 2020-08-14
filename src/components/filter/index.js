import React from "react";
import { TextHeader } from "../core/heading/TextHeader";
import {
  LAUNCH_YEAR,
  LAUNCH_YEARS,
  SUCCESSFULL_LAUNCHING,
  SUCCESSFULL_LANDING,
} from "../../constants";
import { ToggleButton } from "../core/buttons/ToggleButton";

const LAUNCH_VALUES = ["TRUE", "FALSE"];

export function FiltersComponent() {
  return (
    <div className="col-2 menu">
      <div className="launch_year">
        <TextHeader title={LAUNCH_YEAR} />
        <div className="flex-container">
          {LAUNCH_YEARS.map((year) => (
            <ToggleButton className="grid-item" key={year} title={year} />
          ))}
        </div>
      </div>
      <div className="success_launch">
        <TextHeader title={SUCCESSFULL_LAUNCHING} />
        <div className="flex-container">
          {LAUNCH_VALUES.map((value) => (
            <ToggleButton key={value} className="grid-item" title={value} />
          ))}
        </div>
      </div>
      <div className="success_landing">
        <TextHeader title={SUCCESSFULL_LANDING} />
        <div className="flex-container">
          {LAUNCH_VALUES.map((value) => (
            <ToggleButton key={value} className="grid-item" title={value} />
          ))}
        </div>
      </div>
    </div>
  );
}
