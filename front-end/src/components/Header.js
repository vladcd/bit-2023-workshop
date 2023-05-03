import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <h1>
      <Link to="/">Inventar studenti</Link>
    </h1>
  );
}

export default Header;
