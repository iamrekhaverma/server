import React from "react";

export const Card = ({ spacex }) => {
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
            {item.mission_id.length && (
              <ul>
                <b>Mission Ids</b>
                {item.mission_id.map((id) => (
                  <li key={id}>{id}</li>
                ))}
              </ul>
            )}
            {item.launch_year && (
              <div>
                <b>Launch Year:</b>
                {item.launch_year}
              </div>
            )}
            <p>
              <b>Successful Launch:-</b>
              {item.launch_success ? "True" : "false"}
            </p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
