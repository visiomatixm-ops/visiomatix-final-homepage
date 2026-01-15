import logo from "../../assets/images/Logo PNG 1.png";
import "./Header.css";
import { useState, useRef, useEffect } from "react";


const Header = () => {
    const [open, setOpen] = useState(false);
const dropdownRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  const headerData = {
    logo: {
      id: "logo",
      text: "Visiomatix Media Pvt. Ltd",
      imgSrc: logo,
      alt: "Visiomatix",
    },
    navLinks: [
      { id: "home", text: "Home", path: "/" },
      { id: "about", text: "About", path: "/about" },
      { id: "services", text: "Services", path: "/services" },
      { id: "blog", text: "Blog", path: "/blog" },
      { id: "careers", text: "Careers", path: "/careers" },
      { id: "contact", text: "Contact", path: "/contact" },
    ],
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-wrapper">
            <img
              src={headerData.logo.imgSrc}
              alt={headerData.logo.alt}
              className="logo-image"
            />
            <span className="logo-text">
              {headerData.logo.text}
            </span>
          </div>

      <nav className="nav">
  {headerData.navLinks.map((item) =>
    item.id === "services" ? (
<div key={item.id} className="nav-dropdown" ref={dropdownRef}>
  <span
    className="nav-link dropdown-toggle"
    onClick={() => setOpen(!open)}
  >
    {item.text} ▾
  </span>

  {open && (
   <div className={`dropdown-menu ${open ? "open" : ""}`}>
  <a href="/services/digital-marketing" onClick={() => setOpen(false)}>
    Digital Marketing
  </a>
  <a href="/services/web-development" onClick={() => setOpen(false)}>
    Web Development
  </a>
  <a href="/services/ui-ux" onClick={() => setOpen(false)}>
    UI / UX Design
  </a>
</div>

  )}
</div>

    ) : (
      <a key={item.id} href={item.path} className="nav-link">
        {item.text}
      </a>
    )
  )}
</nav>

        </div>
      </header>

      <hr className="header-divider" />
    </>
  );
};

export default Header;
