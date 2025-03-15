import React from "react";
import resumeFile from "../documents/Adrienne_Tran_Resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2010 - 2014",
      title: "Doctor of Pharmacy",
      place: "University of Southern California",
      desc: "Completed a Doctor of Pharmacy degree through a demanding and professional graduate program. Navigated a comprehensive curriculum including advanced pharmaceutical sciences, patient care, and healthcare management.",
    },
    {
      yearRange: "2006 - 2010",
      title: "Bachelor's in Biological Sciences and Chemistry",
      place: "University of California, Irvine",
      desc: "Successfully handled a challenging curriculum, achieving a double major in Biological Sciences and Chemistry. Graduated Magna Cum Laude, attesting to a consistently high level of academic performance and a strong commitment to excellence.",
    },

  ];

  const experienceDetails = [

    {
      yearRange: "2024 - Current",
      title: "QA Engineer 2",
      place: "QA Wolf",
      desc: "Develop and maintain Playwright automated tests for many external clients. Direct client involvement and communications",
    },
    {
      yearRange: "2018 - 2024",
      title: "Clinical Pharmacist",
      place: "OptumRx",
      desc: "Developed and maintained Excel verbiage macros utilizing Visual Basic for Applications (VBA). Reviewed formulary and utilization management guidelines to determine if medications should be covered based on patient medical history.",
    },
    {
      yearRange: "2014 - 2018",
      title: "Pharmacy Operations Manager / Clinical Pharmacist",
      place: "Partner Healthcare",
      desc: "Managed a staff of over 100+ employees consisting of pharmacy technicians, clerks, interns, and pharmacists in a 24 hour fast-paced pharmacy delivering from 800-1000 prescriptions per day.",
    },

  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        {/* <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div> */}
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download Resume
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
