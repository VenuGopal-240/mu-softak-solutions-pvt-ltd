import React, { useState } from "react";
import "./Header.css";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState();

    const value = useLocation();
    console.log(value)

    const handleClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false);
    };

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <div className="logo">
                <img src="src\assets\headerLogo.jpeg" alt="HeaderLogo" style={{width:"30vh",height:"13vh",paddingTop:"0.5rem"}} />
                {/* <p style={{ fontSize: "25px", fontWeight: "bold" }}>MU softek solutions </p> */}
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {
                    menuOpen ? <CloseIcon /> : <DehazeIcon />
                }
            </div>

            <nav className={`nav ${menuOpen ? "active" : ""}`}>
                <span
                    className={isActive("/home") ? "active-link" : ""}
                    onClick={() => {
                        navigate("/home");
                        setMenuOpen(false);
                    }}
                >
                    HOME
                </span>

                <span
                    className={isActive("/about") ? "active-link" : ""}
                    onClick={() => {
                        navigate("/about");
                        setMenuOpen(false);
                    }}
                >
                    ABOUT
                </span>

                <span
                    className={isActive("/service") ? "active-link" : ""}
                    onClick={() => {
                        navigate("/service");
                        setMenuOpen(false);
                    }}
                >
                    SERVICES
                </span>

                <span
                    className={isActive("/carrier") ? "active-link" : ""}
                    onClick={() => {
                        navigate("/carrier");
                        setMenuOpen(false);
                    }}
                >
                    CARRIER
                </span>

                <span
                    className={isActive("/contact") ? "active-link" : ""}
                    onClick={() => {
                        navigate("/contact");
                        setMenuOpen(false);
                    }}
                >
                    CONTACT
                </span>
            </nav>


        </header>
    );
};

export default Header;
