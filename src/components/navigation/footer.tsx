import { Link } from "react-router-dom";
import { instagramIcon, facebookIcon, youtubeIcon } from "../../assets/icon";

function Footer() {
  return (
    <div className="main-blue-color text-center py-5">
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
        <Link to="/tjeneste" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Tjeneste 1
        </Link>
        <Link to="/tjeneste" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Tjeneste 2
        </Link>
        <Link to="/tjeneste" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Tjeneste 3
        </Link>
        <Link to="/tjeneste" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Tjeneste 4
        </Link>
      </div>
      <div className="my-3">
        <Link to="/about" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Om oss
        </Link>
        <Link to="/contact" className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">
          Kontakt oss
        </Link>
      </div>
      <div>
        <p className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">Org. nummer: 933 221 245</p>
      </div>
      <div>
        <p className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">Tlf: +47 988 33 436</p>
      </div>
      <div>
        <p className="text-light fw-500 text-decoration-none mx-3 fs-1rem-to-1-5rem link-text">E-post: marius@fk-as.no</p>
      </div>
      <div>
        <p className="text-light fw-500">Laget av thbergseng design</p>
      </div>
    </div>
  );
}

export default Footer;
