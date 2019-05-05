import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="landing">
        <div className="landing-inner">
          <h1 className="x-large">BitCan</h1>
          <p className="lead">Bit by bit we can</p>
          <div>
            <Link to="/about-us">
              <Button className="landing-inner-button" variant="success">
                About Us
              </Button>
            </Link>
            <Link to="/service">
              <Button className="landing-inner-button" variant="light">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
