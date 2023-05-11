import React, { useState } from "react";

function UseStateTest() {
  const [colour, setColour] = useState("red");

  return (
    <div>
      <p>My favorite color is " {colour} "!</p>
      <button type="button" onClick={() => {
        if (colour === "red") {
          setColour("blue");
        } else {
          setColour("red");
        }
        }}>
        Change color to "{colour === "red" ? "blue" : "red"}"
      </button>
    </div>
  );
}

export default UseStateTest;
