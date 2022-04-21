import React from "react";
import { Description } from "./Description";
import { Bottom } from "./Bottom";
import { Content } from "./Content";
import { Navbar } from "./Navbar";
import { Thing } from "./Thing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Description />
      <Thing />
      <Content />
      <Bottom />
    </div>
  );
};

export default App;
