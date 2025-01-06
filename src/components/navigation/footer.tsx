import { Link } from "react-router-dom";
import { instagramIcon, facebookIcon, youtubeIcon } from "../../assets/icon";
import { whiteLogo } from "../../assets/graphics";

function Footer() {
  return (
    <footer className="main-blue-color text-center py-5">
      <div className="mb-4">
        <Link to="/">
          <img className="footer-logo" src={whiteLogo} alt="" />
        </Link>
      </div>
      <div className="mb-3">
        <a href="">
          <img src={instagramIcon} className="footer-icon" aria-label="Instagram link" />
        </a>
        <a href="">
          <img src={facebookIcon} className="footer-icon" aria-label="Facebook link" />
        </a>
        <a href="">
          <img src={youtubeIcon} className="footer-icon" aria-label="Youtube link" />
        </a>
      </div>
      <div className="my-3">
        <Link to="/" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Hjem
        </Link>
        <Link to={"landing-section"} className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Om oss
        </Link>
        <Link to="/contact" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Kontakt oss
        </Link>
      </div>
      <div className="my-3 d-flex justify-content-center flex-wrap">
        <Link to="/tjeneste" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Marine deck fabrication
        </Link>
        <Link to="/tjeneste" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Metallarbeider
        </Link>
        <Link to="/tjeneste" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Personell
        </Link>
        <Link to="/tjeneste" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Hagearbeider
        </Link>
      </div>
      <div>
        <p className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem">Org. nummer: 933 221 245</p>
      </div>
      <div>
        <a className="text-decoration-none" href="tel:+4798833436">
          <p className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem">Tlf: +47 988 33 436</p>
        </a>
      </div>
      <div>
        <a className="text-decoration-none" href="mailto:marius@fk-as.no">
          <p className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem">E-post: marius@fk-as.no</p>
        </a>
      </div>
      <div>
        <a className="text-decoration-none" href="https://thbergseng-portfolio-2.netlify.app/">
          <p className="text-light fw-500">Laget av thbergseng design</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
