import React from "react";
import { Button } from "react-bootstrap";
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
                <p>Image Description</p>
                <Button className="landing-inner-button" variant="light">
                  Read More
                </Button>
              </div>
              <div className="col-4 blog-content">
                <img src={labPic} alt="" />
                <p>Image Description</p>
                <Button className="landing-inner-button" variant="light">
                  Read More
                </Button>
              </div>
              <div className="col-4 blog-content">
                <img src={labPic} alt="" />
                <p>Image Description</p>
                <Button className="landing-inner-button" variant="light">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogList;
