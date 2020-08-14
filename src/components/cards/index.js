import React from "react";

export const Card = ({ spacex }) => {
  console.log("333333333333333", spacex);
  return (
    <React.Fragment>
      {spacex.map((item, i) => (
        <div className="cards_item" key={item.mission_name}>
          <div className="card_image">
            <img src={item.links.mission_patch_small} />
          </div>
          <div className="card_content">
            <a href="#">
              {item.mission_name} #{item.flight_number}
            </a>
            {/* {item.mission_id.map((id) => (
              <li key={id}>{id}</li>
            ))} */}
            <div>{item.launch_year}</div>
            <div>{item.launch_success ? "True" : "false"}</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
