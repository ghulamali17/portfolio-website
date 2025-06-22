import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useEffect } from "react";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true, 
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#4b006e] overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff1c_1px,transparent_1px)] bg-[length:40px_40px] opacity-10 pointer-events-none z-0"></div>

      {/* Purple Glow */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#c026d3]/20 blur-[150px] rounded-full z-0"></div>

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
