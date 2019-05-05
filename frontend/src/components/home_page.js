import React from "react";
import Landing from "./landing";
import Summary from "./summary";
import BlogList from "./blog_list";

const HomePage = () => {
  return (
    <React.Fragment>
      <Landing />
      <Summary />
      <BlogList />
    </React.Fragment>
  );
};

export default HomePage;
