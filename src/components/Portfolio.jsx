import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("DETAILED");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    DETAILED: "Full Stack Applications",
    // PILLBOX: "pillbox",
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document"
  };

  const projectsData = [
    {
      title: "pillbox",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Pillbox is a full stack application designed to help users organize medications, healthcare appointments, and healthcare providers. The frontend interface was built using React and Redux state management while the backend was built using Flask RESTful API with a PostgreSQL database",
        // client: "Ruby Clinton",
        technologies: "Javascript, React, Redux, Python, Flask, SQLAlchemy, PostgreSQL, Sqlite3, HTML5, CSS3, date-fns, Apex charts",
        industry: "Healthcare",
        // date: "July 16, 2019",
        url: {
          name: "www.pillbox.onrender.com/",
          link: "https://pillbox.onrender.com/",
        },

        sliderImages: [
          "images/projects/pb-2.png",
          "images/projects/pb-3.png",
        ],
      },

      thumbImage: "images/projects/pb-1.png",

      categories: [filters.DETAILED],
    },
    {
      title: "robinhoodie",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Robinhoodie is a paper trading application based on robinhood. The application pulls data from Alpaca API daily with updated stock prices. The application was built in collaboration with two other software developers on a single code based, using git and github for version control. Robinhoodie is able to calculate how much a portfolio is worth in real time and show trending patterns in stock price through the use of apex charts. It was built with React in the front end and Flask in the backend. ",
        // client: "Ruby Clinton",
        technologies: "Javascript, React, Redux, Python, Flask, SQLAlchemy, PostgreSQL, Sqlite3, HTML5, CSS3, Alpaca API, Apex charts",
        industry: "Finance",
        // date: "July 16, 2019",
        url: {
          name: "www.robinhoodie-9jff.onrender.com",
          link: "https://robinhoodie-9jff.onrender.com/",
        },

        sliderImages: [
          "images/projects/rh-2.png",
          "images/projects/rh-3.png",
        ],
      },

      thumbImage: "images/projects/rh-1.png",

      categories: [filters.DETAILED],
    },

    {
      title: "YouTube Video",
      type: types.VIDEO,
      video: {
        vimeo: false,
        id: "PMNnEEEacCg",
      },
      thumbImage: "images/projects/project-3.jpg",

      categories: [filters.YOUTUBE],
    },
    {
      title: "Vimeo Video",
      type: types.VIDEO,
      video: {
        vimeo: true,
        id: "259411563",
      },

      thumbImage: "images/projects/project-4.jpg",
      categories: [filters.VIMEO],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section bg-white"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Some of my recent projects
          </h2>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
            }
          >
            {/* <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li> */}
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <p
                  className={
                    // "nav-link " + (filterKey === oneKey ? "active" : "")
                    "nav-link active"
                  }
                // onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </p>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-6 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box">
                      <div className="portfolio-img">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 ">
                            {" "}
                          </button>
                          <div className="portfolio-overlay-details">
                            <p className="text-primary text-8">
                              {project.title === "pillbox" && (
                                <span className="material-symbols-outlined text-11">pill</span>
                              )}
                              {project.title === "robinhoodie" && (
                                <img src='images/logo_green.png' className='img-fluid' width='40' />
                              )}

                            </p>
                            <h5 className="text-white text-5">
                              {project?.title}
                            </h5>
                            {/* <span className="text-light">Category</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;
