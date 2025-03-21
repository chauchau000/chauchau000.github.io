import React from "react";
const AboutUs = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Heading */}
        <p className="text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">About Me</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Know Me More
        </h2>
        {/* Heading end*/}
        <div className="row">
          <div className="col-lg-auto text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3">
              Hi, I'm{" "}
              <span className="fw-700 border-bottom border-3 border-primary">
                Adrienne Tran
              </span>
            </h2>
            <p className="text-5">
              I'm a full stack software engineer with a passion for problem solving. Currently, I'm working at QA Wolf, as a Quality Assurance Engineer.
              I have a background in healthcare, having been a pharmacist for the past 10 years.
              But with my love of problem solving, I began looking elsewhere to fulfill my career desires for less repetitive work. 
              As a self-proclaimed nerd since high school, I made the leap of faith toward where my interests lie - software development.
            </p>
          </div>
          {/* <div
            className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="featured-box style-4">
              <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span className="wow rubberBand" data-wow-delay="1.3s">
                  /&lt;
                </span>
              </div>
              <h3 className="text-7 wow rubberBand" data-wow-delay="2s">
                Years of <span className="fw-700">Experiance</span>
              </h3>
            </div>
          </div> */}
        </div>
        <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-3 wow fadeInUp">
            <p className="text-muted fw-500 mb-0">Name:</p>
            <p className="text-4 text-dark fw-600 mb-0">Adrienne Tran</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <p className="text-muted fw-500 mb-0">Email:</p>
            <p className="text-4 fw-600 mb-0">
              <a className="link-dark" href="mailto:adrienne.tran@gmail.com">
                adrienne.tran@gmail.com
              </a>
            </p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text-muted fw-500 mb-0">From:</p>
            <p className="text-4 text-dark fw-600 mb-0">Los Angeles, USA.</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
            <p className="text-muted fw-500 mb-0">Fun Fact:</p>
            <p className="text-4 text-dark fw-600 mb-0">Star Wars Fanatic</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
