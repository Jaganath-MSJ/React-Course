import React from "react";

export default function ReactJS1() {
  const fName = "Jaganath";
  const lName = " M S";
  const age = 21;
  const job = "Software Developer";
  const getName = () => `${fName} ${lName}`;
  const inputPH = "Enter Password";
  const inputBox = <input placeholder={inputPH} autoComlete />;
  const obj = {
    name: "MSJ",
    age: 20,
  };

  return (
    <div>
      <h3>Name: {getName()}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      {obj.name}
      {inputBox}
    </div>
  );
}
