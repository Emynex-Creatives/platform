import myImage from '../assets/emynex_logo.png';
import './Home.css'

export default function Home({ scrollToServices, scrollToContact }){
    return(
        <section className="hero-section" id="home">
            <div className="content">
                <h1 className="brand-name">
                    We are Emyne
                    <span className="rotating-x">
                        <img src={myImage} alt="Emynex Logo" />
                    </span>
                </h1>
                <p className="tagline">
                    Transforming ideas into reality with innovative solutions and helping Businesses do more Business.
                </p>
    
                <div className="cta-buttons">
                    <button onClick={scrollToContact} className="btn btn-custom-primary">Get Started</button>
                    <button onClick={scrollToServices} className="btn btn-custom-secondary">Book a call</button>
                </div>
            </div>
        </section>
    );
}