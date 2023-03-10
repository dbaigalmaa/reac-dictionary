import React from "react";

export default function Synonyms(props) {
  if (props.syn.length !== 0) {
    return (
      <ul className="Synsonyms">
        {props.syn.map(function (syn, index) {
          return <li key={index}>{syn}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
