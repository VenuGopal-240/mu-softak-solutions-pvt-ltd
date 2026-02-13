import React from "react";
import "./Career.css";

const jobs = [
    {
        title: "Java Developer",
        desc: "Build scalable enterprise applications using Java, Spring Boot and Microservices."
    },
    {
        title: "Python Developer",
        desc: "Develop backend systems, APIs, and automation tools using Python & Django."
    },
    {
        title: "Full Stack Developer (Java)",
        desc: "Work on frontend + backend technologies including React and Spring Boot."
    },
    {
        title: "React.js Developer",
        desc: "Build modern, responsive user interfaces using React.js and REST APIs."
    },
    {
        title: "DevOps Engineer",
        desc: "Develops and manages scalable CI/CD pipelines, automates deployment processes, and maintains cloud infrastructure to ensure high system reliability and performance."
    },

    {
        title: "Software Tester",
        desc: "Perform manual and automated testing to ensure product quality."
    },
    {
        title: "Manual Testing Engineer",
        desc: "Execute test cases, find bugs and ensure system reliability."
    },
    {
        title: "Cyber Security Analyst",
        desc: "Protect systems and networks from cyber threats and vulnerabilities."
    }
];

const Career = () => {


    return (
        <div className="career-page">

            <section className="career-hero">
                <h1>Join Our Team</h1>
                <p>
                    We are hiring passionate professionals to build next-generation
                    software solutions.
                </p>
            </section>

            <section className="career-container">
                {jobs.map((job, index) => (
                    <div key={index} className="career-card">
                        <h3>{job.title}</h3>
                        <p>{job.desc}</p>
                        <button
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLScWDJDTNRIVgXOQNlHDb6mUPT_ZbMfA6ETB9MJFKkTa9DFupA/viewform?usp=header",
                                    "_blank"
                                )
                            }
                        >
                            Apply Now
                        </button>

                        {/* <button > <a style={{textDecoration:"none",color:"white"}} href="https://docs.google.com/forms/d/e/1FAIpQLScWDJDTNRIVgXOQNlHDb6mUPT_ZbMfA6ETB9MJFKkTa9DFupA/viewform?usp=header">Apply Now</a></button> */}
                    </div>
                ))}
            </section>

        </div>
    );
};

export default Career;
