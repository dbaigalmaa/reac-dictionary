import React from "react";
import Meaning from "./Meaning";
export default function Results(props) {
  if (props.res) {
    return (
      <div className="Results">
        <h2>{props.res.word}</h2>
        {props.res.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
