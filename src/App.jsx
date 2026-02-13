import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Header from './Header/Header'
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

function App() {


  return (
    <>
      <div style={{ marginTop: "70px" }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/carrier" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div >
    </>
  )
}

export default App
