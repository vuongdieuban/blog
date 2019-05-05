import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6 summary">
              <div className="summary-container">
                <div className="summary-title">
                  <h2>Lorem ipsum dolor sit.</h2>
                </div>
                <div className="summary-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Provident, ratione! Quae unde quos vel eaque, neque dicta
                    porro tenetur quod sapiente, non reiciendis adipisci vero?
                    Quas fuga in nulla similique?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Provident, ratione! Quae unde quos vel eaque, neque dicta
                    porro tenetur quod sapiente, non reiciendis adipisci vero?
                    Quas fuga in nulla similique?
                  </p>
                </div>
                <Link to="/about-us">
                  <Button className="summary-inner-button" variant="success">
                    View More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col-6 ability">
              <div className="ability-container">
                <div className="ability-title">
                  <span>
                    <i className="fa fa-id-card-o" aria-hidden="true" />
                  </span>
                  <span>
                    <h5>Professional</h5>
                  </span>
                </div>
                <div className="ability-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  pariatur.
                </div>
              </div>
              <div className="ability-container">
                <div className="ability-title">
                  <span>
                    <i className="fa fa-id-card-o" aria-hidden="true" />
                  </span>
                  <span>
                    <h5>Expert</h5>
                  </span>
                </div>
                <div className="ability-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  pariatur.
                </div>
              </div>
              <div className="ability-container">
                <div className="ability-title">
                  <span>
                    <i className="fa fa-id-card-o" aria-hidden="true" />
                  </span>
                  <span>
                    <h5>Oil</h5>
                  </span>
                </div>
                <div className="ability-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  pariatur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Summary;
