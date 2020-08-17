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

const LAUNCH_VALUES = ["TRUE", "FALSE"];

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
        <div
          className="flex-container"
          onClick={(event) => handleClick("launch_year", event)}
        >
          {LAUNCH_YEARS.map((year) => (
            <ToggleButton
              className="grid-item"
              id={year}
              key={year}
              title={year}
            />
          ))}
        </div>
      </div>
      <div className="success_launch">
        <TextHeader title={SUCCESSFULL_LAUNCHING} />
        <div
          className="flex-container"
          onClick={(event) => handleClick("launch_success", event)}
        >
          {LAUNCH_VALUES.map((value) => (
            <ToggleButton
              key={value}
              className="grid-item"
              id={`launch_${value}`}
              title={value}
            />
          ))}
        </div>
      </div>
      <div className="success_landing">
        <TextHeader title={SUCCESSFULL_LANDING} />
        <div
          className="flex-container"
          onClick={(event) => handleClick("land_success", event)}
        >
          {LAUNCH_VALUES.map((value) => (
            <ToggleButton
              key={value}
              className="grid-item"
              id={`landing_${value}`}
              title={value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
