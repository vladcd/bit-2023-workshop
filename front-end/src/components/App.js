import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

function App() {
  return (
    <div className="main">
      <Header />
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
