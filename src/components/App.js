import React from "react";
import "./../styles/App.css";

const App = () => {
  const [value, setValue] = React.useState("");
  const [text, setText] = React.useState("");

  function handleChange(e) {
    const value = e.target.value;
    setValue(value);
    if (value) setText(`Hello ${value}!`);
    else setText("");
  }

  return (
    <div>
      <h1>Enter your name:</h1>
      <input type="text" onChange={handleChange} value={value} />
      <p>{text}</p>
    </div>
  );
};

export default App;
