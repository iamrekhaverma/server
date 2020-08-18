import React from "react";
import { TextHeader } from "../core/heading/TextHeader";
import {
  LAUNCH_YEAR,
  LAUNCH_YEARS,
  SUCCESSFULL_LAUNCHING,
  SUCCESSFULL_LANDING,
} from "../../constants";
import { ToggleButton } from "../core/buttons/ToggleButton";
import { updateQueryStringParameter } from "../../util/updateQueryParams";

const LAUNCH_VALUES = ["true", "false"];

export function FiltersComponent(props) {
  const handleClick = (filterName, event) => {
    if (event.target.tagName === "INPUT") {
      const { search } = props.history.location;
      const { history } = props;
      let query = updateQueryStringParameter(
        window.location.search,
        filterName,
        event.target.value
      );
      history.push({
        pathname: "/",
        search: query,
      });
    }
  };
  return (
    <div className="col-2 menu">
      <div className="launch_year">
        <TextHeader title={LAUNCH_YEAR} />
        <div className="grid-container">
          {LAUNCH_YEARS.map((year) => (
            <ToggleButton
              className="grid-item"
              id={year}
              key={year}
              title={year}
              filter="launch_year"
              onChange={(event) => handleClick("launch_year", event)}
            />
          ))}
        </div>
      </div>
      <div className="success_launch">
        <TextHeader title={SUCCESSFULL_LAUNCHING} />
        <div className="grid-container">
          {LAUNCH_VALUES.map((value) => (
            <ToggleButton
              key={value}
              className="grid-item"
              id={`launch_${value}`}
              title={value}
              filter="launch_success"
              onChange={(event) => handleClick("launch_success", event)}
            />
          ))}
        </div>
      </div>
      <div className="success_landing">
        <TextHeader title={SUCCESSFULL_LANDING} />
        <div className="grid-container">
          {LAUNCH_VALUES.map((value) => (
            <ToggleButton
              key={value}
              className="grid-item"
              id={`landing_${value}`}
              title={value}
              filter="land_success"
              onChange={(event) => handleClick("land_success", event)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
