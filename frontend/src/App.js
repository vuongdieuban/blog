import React from "react";
import "./dist/css/style.css";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./components/home_page";
import AboutUs from "./components/aboutus";
import Service from "./components/service";
import NavBar from "./components/navbar";
import NotFound from "./components/not-found";
import Oil from "./components/oil";
import Research from "./components/research";
import Simulation from "./components/simulation";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/service/oil" component={Oil} />
        <Route path="/service/research" component={Research} />
        <Route path="/service/simulation" component={Simulation} />
        <Route exact path="/service" component={Service} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
