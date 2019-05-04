import React from "react";
import "./dist/css/style.css";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Summary from "./components/summary";
import BlogList from "./components/blog_list";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Summary />
      <BlogList />
    </div>
  );
}

export default App;
