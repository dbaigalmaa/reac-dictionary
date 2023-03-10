import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
export default function Results(props) {
  if (props.res) {
    return (
      <div className="Results">
        <h2>{props.res.word}</h2>
        {props.res.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}

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
