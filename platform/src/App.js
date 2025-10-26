import React, { useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import Contact from "./components/Contact";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });
  return (
        <>
      <Navbar
        scrollToHome={() => scrollTo(homeRef)}
        scrollToServices={() => scrollTo(servicesRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />
      <div ref={servicesRef}><Pages /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;

