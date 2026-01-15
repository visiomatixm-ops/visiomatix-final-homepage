import { useState } from "react";
import "./index.css";

import img28 from "../../../assets/images/image 28.png";
import img29 from "../../../assets/images/image 29.png";
import img30 from "../../../assets/images/image 30.png";
import img31 from "../../../assets/images/image 31.png";
import img32 from "../../../assets/images/image 32.png";
import img33 from "../../../assets/images/image 33.png";
import img34 from "../../../assets/images/image 34.png";
import img35 from "../../../assets/images/image 35.png";
import img36 from "../../../assets/images/image 36.png";
import img37 from "../../../assets/images/image 37.png";
import integration from "../../../assets/icons/integration.png"
import arrowupright from "../../../assets/icons/arrow-up-right.png"
import collaboration from "../../../assets/icons/collaboration.png"
import data from "../../../assets/icons/data.png"
import rohitshinde from "../../../assets/images/rohitshinde.png"

const expertiseList = [
  {
    title: "Collaboration",
    description:
      "Great results come from great collaboration. We team up with ambitious brands, combining creativity and expertise to craft digital solutions that make an impact, together.",
    img:collaboration
    },
  {
    title: "Data-Driver Insights",
    description:
      "Insights power innovation. We use data to identify opportunities, refine strategy, and ensure every action drives impact and success.",
      img:data
  },
  {
    title: "Seamless Integration",
    description:
      "We ensure every system, platform, and tool works together smoothly. Our seamless integration approach keeps your digital ecosystem efficient, secure, and easy to manage.",
      img:integration
  }
]

const service = [
    { image: img28, title: "Design & Creatives", desc: "Visually compelling designs crafted to strengthen brand identity and drive engagement." },
    { image: img29, title: "ORM", desc: "Proactive strategies to protect, enhance, and strengthen your brand's digital reputation." },
    { image: img30, title: "Branding & Strategy", desc: "Strategic brand positioning and growth-focused planning that builds strong, lasting brand value." },
    { image: img31, title: "UI/UX Design", desc: "User-centric interface and experience design crafted for clarity, usability, and conversion." },
    { image: img32, title: "HRMS", desc: "Integrated HRMS solutions to streamline operations and optimize workforce efficiency." },
    { image: img33, title: "Pay Per Click (PPC)", desc: "Data-driven PPC campaigns focused on high-quality leads and maximum ROI." },
    { image: img34, title: "Web & App Development", desc: "Scalable web and app solutions built for performance, security, and seamless user experience." },
    { image: img35, title: "Influencer Marketing", desc: "Strategic influencer collaborations that amplify brand reach, credibility, and conversions." },
    { image: img36, title: "SEO & Content Writing", desc: "Search-optimized content crafted to boost rankings, engage audiences, and drive organic growth." },
    { image: img37, title: "Social Media Marketing", desc: "Impact-driven social strategies designed to grow engagement, brand presence, and measurable results." },
];

import union from "../../../assets/images/Union.png";
import Union1 from "../../../assets/images/Union-1.png";
import Ellipse5 from "../../../assets/images/Ellipse 5.png";
import Maskgroup from "../../../assets/images/rohitshinde.png";

const HomePage4 = () => {
    const [serviceIndex, setServiceIndex] = useState(0);
    const visibleCount = 5;

    const nextServices = () => {
        setServiceIndex(prev =>
            prev + visibleCount >= service.length ? 0 : prev + visibleCount
        );
    };

    const prevServices = () => {
        setServiceIndex(prev =>
            prev - visibleCount < 0 ? service.length - visibleCount : prev - visibleCount
        );
    };

    return (
        <div>
             <section className="about-page-about2">
                  
                  <div className="about-inner-about2">
                <div className="arrow-home4">
                    <img src={union} onClick={prevServices} style={{ cursor: "pointer" }} />
                    <img src={Union1} onClick={nextServices} style={{ cursor: "pointer" }} />
                </div>

                <div className="services-grid-home4">
                    {service
                        .slice(serviceIndex, serviceIndex + visibleCount)
                        .map((item, i) => (
                            <div className="feature-card-1-about2" key={i}>
                                <div className="" >
                                    <div style={{ width: "186px", margin: "auto" }}>
                                        <div className="service-icon-home4">
                                            <img src={item.image} alt="" />
                                        </div>

                                        <div>
                                            <h3 className="service-title-home4">{item.title}</h3>
                                            <p className="service-desc-home4">{item.desc}</p>
                                        </div>

                                        <div className="read-more-wrapper-home4">
                                            <button className="read-more-btn-home4">
                                                Read More
                                                <img
                                                    src={Union1}
                                                    alt=""
                                                    className="read-more-icon-home4"
                                                />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
            
                    {/* ================= FOUNDER SECTION ================= */}
                    <div className="founder-section-about2">
            
            
                      <div className="founder-image-about2">
                        <img src={rohitshinde} alt="Rohit Shinde" />
                      </div>
            
                      <div className="founder-column-about2 text-reduce-top">
                        <p className="homepage-4-title-about2">Rohit Shinde</p>
                        <p className="homepage-4-subTitle-about2">
                          Founder & Creative Head, Visiomatix Media
                        </p>
            
                        <p className="homepage-4-text-about2 ">
                          <span className="dropcap-about2">I</span> am the Founder & CEO of
                          Visiomatix Media, a global minded, performance led digital
                          marketing agency built to deliver scalable growth and measurable
                          ROI. I lead the company’s strategic direction, overseeing
                          everything from market positioning and demand generation to
                          execution, optimization, and long-term client success.
                          <br />
                          <br />
                          <br />
                          With proven experience as a Digital Marketing Leader, Consultant,
                          and Growth Strategist, I have helped organizations across multiple
                          sectors accelerate revenue, strengthen digital presence, and
                          convert marketing investments into sustainable business outcomes.
                          My leadership philosophy combines data intelligence, creative
                          strategy, and execution excellence.
                          <br/>
                          <br/>
                          <br/>
                          I bring deep expertise in performance marketing, SEO, growth funnels, and analytics driven decision making. Certified in Google Ads and Google Analytics, I work hands-on with advanced platforms including SEMrush, Google Keyword Planner, and Google Analytics to drive acquisition, retention, and scalable digital growth.
                        </p>
                        
                      </div>
            
                      <div className="founder-column-about2 right-about2">
                        <p className="homepage-4-text-about2">
                          Beyond client delivery, I am committed to building future ready
                          digital talent by sharing global best practices and practical
                          knowledge. My long-term vision is to position Visiomatix Media as
                          a trusted global growth partner for brands seeking structured,
                          ROI-focused digital transformation.
                        </p>
            
                        <p className="homepage-4-text-about2">
                          Outside of work, I actively follow global automotive trends and
                          enjoy experimenting with culinary techniques interests that
                          reflect my curiosity, discipline, and continuous learning mindset.
                        </p>
            
                        <div className="readmore-wrap-about2">
                          <button className="connect-btn-about2">
                            Read More
                            <img
                              src={arrowupright}
                              alt="arrow"
                              className="btn-arrow-about2"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        </div>
    );
};

export default HomePage4;