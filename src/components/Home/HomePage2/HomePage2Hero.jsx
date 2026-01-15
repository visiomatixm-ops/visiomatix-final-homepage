
import "./HomePage2Hero.css";

import heroImage from "../../../assets/images/hero.png";
import rocket from "../../../assets/images/rocket.png";
import vectorRight from "../../../assets/images/Vector (right)1.png";
import vectorLeft from "../../../assets/images/Vector (left)2.png";
import leftCoat from "../../../assets/icons/leftCoat.png";
import rightCoat from"../../../assets/icons/rightCoat.png";

const HomePage2Hero = () => {
  return (
    <section className="hero-home2">
      <div className="hero-top-home2">
        {/* LEFT SIDE */}
        <div className="hero-left-home2">
          <h1 className="hero-title-home2">
            Enter the Visiomatix system. Power <img height="45" src={rightCoat} alt="" style={{ display: "inline-block", verticalAlign: "middle" }} /> every digital move you make!
          </h1>

          <p>
            We provide result-driven digital marketing services that boost
            online <br /> visibility, engagement, and business growth through strategic
            SEO, <br /> social media, and performance campaigns.
          </p>

          <button className="hero-btn-home2">Build With Visiomatix!</button>

          {/* ROCKET + VECTOR */}
          <div className="rocket-box-home2">
            <img src={vectorLeft} alt="Vector Left" className="vector-left-home2" />
            <img src={rocket} alt="Rocket" className="rocket-img-home2" />
          </div>

          {/* WELCOME SECTION */}
          <div className="welcome-home2">
            <h2><img src={leftCoat} height="45" alt="" style={{ display: "inline-block", verticalAlign: "middle" }} /> Welcome to Visiomatix Media</h2>
            <p>
              Whether you’re a startup entering the global market, a digital
              agency seeking a strategic partner, or an enterprise ready to
              scale across regions — Visiomatix Media integrates
              seamlessly into your growth journey.
            </p>

            <p>
              Working with clients across industries and geographies, we combine
              strategy, creativity, technology,<br /> and performance marketing into a
              scalable digital system built for global impact.
            </p>

            <p>
              From startups to scale-ups, we adapt to diverse markets, align
              with your vision, and deliver results that <br /> transcend borders.
              <br />
              This is digital growth without boundaries.
              <br />
              This is Visiomatix Media.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right-home2">
          <img src={vectorRight} className="hero-vector-home2" alt="Vector Right" />
          <img src={heroImage} className="hero-img-home2" alt="Hero Character" />
        </div>
      </div>
    </section>
  );
};

export default HomePage2Hero;
