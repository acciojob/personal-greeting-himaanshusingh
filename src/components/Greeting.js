import React, { useState } from "react";

const Greeting = () => {
  const [greet, setGreet] = useState("");

  function handleInput(evt) {
    let name = evt.target.value.trim();
    if (name != " ") setGreet(name);
  }

  return (
    <>
      <label htmlFor="input">Enter your Name: </label>
      <input type="text" id="input" onChange={handleInput}></input>
      {greet && <p>{`Hello, ${greet}!`}</p>}
    </>
  );
};

export default Greeting;
