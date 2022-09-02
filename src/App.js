import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Award from "./components/Award";
import Work from "./components/Work";
import Exprience from "./components/Exprience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Award />
      <Skills />
      <Exprience />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
