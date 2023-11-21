import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "SQLAlchemy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Postgres",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Sequelize",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Do?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          My Skills
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-4 col-lg-3 mb-5 wow fadeInUp " key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <img src={service.icon} width='100' />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
