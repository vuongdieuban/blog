import React from "react";
import "./dist/css/style.css";
import Navbar from "./components/navbar";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />;
    </div>
  );
}

export default App;
