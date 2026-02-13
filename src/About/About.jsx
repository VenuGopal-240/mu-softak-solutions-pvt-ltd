import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About Our Company</h1>
                    <p>
                        We are a leading software development company delivering
                        innovative digital solutions across industries.
                    </p>
                </div>
            </section>

            {/* About Content Section */}
            <section className="about-content">
                <div className="about-text">
                    <h2>Who We Are</h2>
                    <p>
                        We specialize in building scalable web applications, enterprise
                        software, and cloud-based solutions. Our team consists of
                        experienced developers, designers, and consultants dedicated to
                        delivering high-quality products.
                    </p>

                    <h2>Our Mission</h2>
                    <p>
                        To empower businesses through technology-driven solutions that
                        improve efficiency, scalability, and growth.
                    </p>

                    <h2>Our Vision</h2>
                    <p>
                        To become a globally trusted IT partner known for innovation,
                        excellence, and client satisfaction.
                    </p>
                </div>

                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                        alt="Company Team"
                    />
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <h2>Our Core Values</h2>

                <div className="values-grid">
                    <div className="value-card">Innovation</div>
                    <div className="value-card">Integrity</div>
                    <div className="value-card">Client-Centric Approach</div>
                    <div className="value-card">Quality & Excellence</div>
                </div>
            </section>

        </div>
    );
};

export default About;
