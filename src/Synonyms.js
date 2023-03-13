import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.syn.length !== 0) {
    return (
      <ul className="Synonyms">
        {props.syn.map(function (syn, index) {
          return <li key={index}>{syn}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
