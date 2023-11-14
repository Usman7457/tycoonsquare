import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import SalientFeatures from "./components/SalientFeatures";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Header
          title=" Tycoon Square"
          home="HOME"
          about="ABOUT US"
          features="SALIENT FEATURES"
          portfolio="PORTFOLIO"
          pricing="PACKAGES"
          contact="CONTACT US"
        />
            <Home/>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                heading="EXPERIENCE THE TYCOON'S LIFE STYLE"
                buttonTitle="Book Now"
              />
            }
          />
          <Route
            path="/tycoonsquare"
            element={
              <Home
                heading="EXPERIENCE THE TYCOON'S LIFE STYLE"
                buttonTitle="Book Now"
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<SalientFeatures />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer title="Tycoon Square" />
      </Router>
    </>
  );
}

export default App;
