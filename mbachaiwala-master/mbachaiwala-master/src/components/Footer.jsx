import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  const footerLinks = (element) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");

    switch (element) {
      case 0:
        allFooterLinks.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 1:
        allFooterLinks.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 2:
        allFooterLinks.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        allFooterLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 4:
        allFooterLinks.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 5:
        allFooterLinks.forEach((item, index) =>
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;

      default:
        allFooterLinks.forEach((item) => (item.style.opacity = 1));
        break;
    }
  };

  const linksBackToNormal = () => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  };

  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #ConnectOnCutting?
        </h1>

        <aside onMouseLeave={linksBackToNormal}>
          <HashLink
            to="#Home"
            className="footerLinks"
            onMouseOver={() => footerLinks(0)}
            data-cursorpointermini={true}
          >
            Home
          </HashLink>
          
          <HashLink
           to="#Story"
            className="footerLinks"
            onMouseOver={() => footerLinks(1)}
            data-cursorpointermini={true}
          >
            Story
          </HashLink>
          
          <HashLink to="#Media"
            className="footerLinks"
            onMouseOver={() => footerLinks(2)}
            data-cursorpointermini={true}
          >
            Media
          </HashLink>
          <HashLink to="#Franchise"
          
          className="footerLinks"
            onMouseOver={() => footerLinks(3)}
            data-cursorpointermini={true}
          >
            Franchise
          </HashLink>
          
          <HashLink to="#Events"
            className="footerLinks"
            onMouseOver={() => footerLinks(4)}
            data-cursorpointermini={true}
          >
            Events
          </HashLink>

          <HashLink to="#ChaiWalaCares"
            className="footerLinks"
            onMouseOver={() => footerLinks(5)}
            data-cursorpointermini={true}
          >
            Chai Wala Cares
          </HashLink>
        </aside>

        <div>
          <h5>Email</h5>
          <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
          <a href="mailto: franchise@mbachaiwala.com">
            Franchise@mbachaiwala.com
          </a>
        </div>

        <div>
          <h5>Phone</h5>
          <a href="tel: +91722905222">+91722905222</a>
        </div>

<<<<<<< HEAD
      
=======
       
>>>>>>> a5f0026dbcd8f173ebc81d90a1ee84ff1000e17e
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;

