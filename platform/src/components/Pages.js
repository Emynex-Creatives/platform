import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Pages.css";
import Home from "./Home"; // Import Home component
import bg1 from "../assets/bgc_1.png";
import bg2 from "../assets/bg_img2.png";
import bg3 from "../assets/bg_img3.png";

export default function Services() {
  return (
    <div className="services-container">
      <Parallax pages={4} style={{ top: 0, left: 0 }}>
        {/* HOME PAGE (Page 0) */}
        <ParallaxLayer 
        offset={0} 
        speed={0.5}>
            <Home />
        </ParallaxLayer>

        {/* SERVICE 1 - Creative Branding (Page 1) */}
        <ParallaxLayer
          offset={1}
          speed={0}
          factor={3}
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer 
          offset={1} 
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="content">
            <h1>Creative Branding</h1>
            <p>We help you design visuals and messaging that truly stand out.</p>
          </div>
        </ParallaxLayer>

        {/* SERVICE 2 - Digital Strategy (Page 2) */}
        <ParallaxLayer
          offset={2}
          speed={0}
          factor={3}
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer 
          offset={2} 
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="content">
            <h1>Digital Strategy</h1>
            <p>Optimized campaigns that deliver results and growth.</p>
          </div>
        </ParallaxLayer>

        {/* SERVICE 3 - Web Development (Page 3) */}
        <ParallaxLayer
          offset={3}
          speed={0}
          factor={3}
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer 
          offset={3} 
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="content">
            <h1>Web Development</h1>
            <p>We build modern, fast, and engaging websites for your brand.</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}