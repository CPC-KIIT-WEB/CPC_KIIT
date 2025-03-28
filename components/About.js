import React from "react";
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <div className="cyber-container container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src="image.png"
              alt="Cyber Art"
              className="cyber-image img-fluid"
            />
          </div>

          <div className="col-md-7">
            <h2 className="cyber-title bruno-ace-regular">ABOUT US</h2>
            <p className="cyber-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni.
            </p>
            <div className="cyber-divider"></div>

            <h2 className="cyber-title bruno-ace-regular">OUR VISION</h2>
            <p className="cyber-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
