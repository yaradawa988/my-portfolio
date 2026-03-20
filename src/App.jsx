import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Footer from "./sections/Footer";

import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 Loader Animation */}
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div key="content" className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white">
            
            <Toaster position="top-right" reverseOrder={false} />

            <Navbar />

            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
            <Footer />

          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;