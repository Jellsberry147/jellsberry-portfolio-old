import React from "react";
import { Route, Routes } from "react-router-dom";

import { Bottom } from "./Bottom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { About } from "./About";
import { Hobbies } from "./Hobbies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="display">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobbies" element={<Hobbies />} />

          <Route path="/jellsberry-portfolio" element={<Home />} />
        </Routes>
      </div>
      <Bottom />
    </div>
  );
}

export default App;
