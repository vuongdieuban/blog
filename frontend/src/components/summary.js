import React from "react";

const Summary = () => {
  return (
    <React.fragment>
      <div className="container">
        <div className="row">
          <div className="col-6 summary">
            <div className="summary-title">
              <h2>Lorem ipsum dolor sit.</h2>
            </div>
            <div className="summary-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, ratione! Quae unde quos vel eaque, neque dicta porro
              tenetur quod sapiente, non reiciendis adipisci vero? Quas fuga in
              nulla similique?
            </div>
          </div>

          <div className="col-6 ability">
            <div className="ability-title">Professional</div>
            <div className="ability-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              pariatur.
            </div>
            <div className="ability-title">Expert Advisor</div>
            <div className="ability-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              pariatur.
            </div>
            <div className="ability-title" />
            <div className="ability-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              pariatur.
            </div>
          </div>
        </div>
      </div>
    </React.fragment>
  );
};

export default Summary;
