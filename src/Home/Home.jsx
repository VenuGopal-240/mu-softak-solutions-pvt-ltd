import { useNavigate } from "react-router-dom";
import BrushIcon from "@mui/icons-material/Brush";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import "./Home.css";

function Home() {

    const navigate = useNavigate();
    return (
        <div className="home">

            <section className="hero">
                <h1>Building Smart Software Solutions</h1>
                <p>
                    We help businesses grow with scalable, secure, and innovative IT
                    solutions.
                </p>
                <div className="hero-buttons" onClick={() => navigate("/contact")}>
                    <button className="primary-btn">Get Started</button>
                    <button className="secondary-btn">Contact Us</button>
                </div>
            </section>
            <section className="features">
                <div className="feature-card">
                    <BrushIcon className="feature-icon" />
                    <h3>CREATIVE</h3>
                    <p>
                        Our team collaborates to develop the best strategies and inspired
                        solutions for your brand. We leverage intelligence and technology as
                        we create great experiences.
                    </p>
                </div>

                <div className="feature-card">
                    <LinkIcon className="feature-icon" />
                    <h3>CONNECT</h3>
                    <p>
                        We help you connect with your audience through dynamic and impactful
                        experiences. By understanding your unique needs, we craft strategies
                        that drive success.
                    </p>
                </div>

                <div className="feature-card">
                    <DescriptionIcon className="feature-icon" />
                    <h3>DEVELOP</h3>
                    <p>
                        Develop Creative transforms your vision into reality with expert
                        solutions in strategy, branding, website development, and content
                        creation.
                    </p>
                </div>
            </section>
            <section className="about">
                <h2>Who We Are</h2>
                <p>
                    We are a technology-driven software company delivering web, mobile, and
                    cloud solutions to startups and enterprises worldwide.
                </p>
            </section>

         

            <section className="why-us">
                <h2>Why Choose Us</h2>
                <ul>
                    <li>✔ Experienced Developers</li>
                    <li>✔ Agile Development Process</li>
                    <li>✔ On-Time Delivery</li>
                    <li>✔ 24/7 Support</li>
                </ul>
            </section>

            <section className="tech">
                <h2>Technologies We Use</h2>
                <p>React • Node.js • Java • Python • AWS • MySQL • MongoDB</p>
            </section>

            <section className="cta">
                <h2>Ready to Start Your Project?</h2>
                <button className="primary-btn">Talk to Our Experts</button>
            </section>

        </div>
    );
}

export default Home;
