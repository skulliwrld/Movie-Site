import React from "react";
// Creating Props 

function PersonDetail(props) {
  return (
    <div>
      <h3>Hello {props.name}</h3>
      <h3> Your Current Location is {props.location}</h3>
      <h3>
        {" "}
        Are you currently in school ?{" "}
        {props.Inschool === "No"
          ? "No Am out of the university"
          : "Am still in school"}
      </h3>
    </div>
  );
}

export default PersonDetail;
