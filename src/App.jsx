import React from "react";
import { Description } from "./Description";
import { Copyright } from "./Copyright";
import { Content } from "./Content";
import { Navbar } from "./Navbar";
import { Thing } from "./Thing";

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <Thing />
      <Content />
      <Copyright />
    </div>
  );
}

export default App;
