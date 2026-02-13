import React from "react";
import "./Services.css";

const servicesData = [
  { title: "Web Development", className: "web" },
  { title: "Mobile App Development", className: "mobile" },
  { title: "Cloud & DevOps", className: "cloud" },
  { title: "UI / UX Design", className: "uiux" },
  { title: "Software Testing", className: "testing" },
  { title: "IT Consulting", className: "consulting" },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {servicesData.map((service, index) => (
          <div key={index} className={`service-card ${service.className}`}>
            <div className="overlay">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
