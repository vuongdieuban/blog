import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import labPic from "../dist/img/lab.jpg";

const BlogList = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="container">
          <div className="blog">
            <div className="row">
              <div className="col-4 blog-content">
                <img src={labPic} alt="" />
                <p>Oil</p>
                <Link to="/service/oil">
                  <Button className="landing-inner-button" variant="light">
                    Read More
                  </Button>
                </Link>
              </div>
              <div className="col-4 blog-content">
                <img src={labPic} alt="" />
                <p>Research</p>
                <Link to="/service/research">
                  <Button className="landing-inner-button" variant="light">
                    Read More
                  </Button>
                </Link>
              </div>
              <div className="col-4 blog-content">
                <img src={labPic} alt="" />
                <p>Simulation</p>
                <Link to="/service/simulation">
                  <Button className="landing-inner-button" variant="light">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogList;
