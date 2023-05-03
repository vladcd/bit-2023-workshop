import React, { useState } from "react";

function UseStateTest() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <p>My favorite color is " {color} "!</p>
      <button type="button" onClick={() => setColor("blue")}>
        Change color to "blue"
      </button>
    </div>
  );
}

export default UseStateTest;
