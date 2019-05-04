import React from "react";
import { Button } from "react-bootstrap";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="landing">
        <div className="landing-inner">
          <h1 className="x-large">BitCan</h1>
          <p className="lead">Bit by bit we can</p>
          <div>
            <Button className="landing-inner-button" variant="success">
              About Us
            </Button>
            <Button className="landing-inner-button" variant="light">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
