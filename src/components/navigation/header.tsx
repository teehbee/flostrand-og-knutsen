import { mainLogo } from "../../assets/graphics";
import { menuBars } from "../../assets/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  const [show, setShow] = useState(false);
  // const [language, setLanguage] = useState(flagGB);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="bg-body-primary position-relative main-header">
        <div className="container px-4">
          <a href="/">
            <img src={mainLogo} alt="" />
            Test
          </a>
          <img src={menuBars} className="d-lg-none nav-bars-button" aria-label="menu-button" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto main-navigation">
              <Link to={"#about-section"} className="btn main-font fs-1-5rem">
                About me
              </Link>
              <Link to={"#resume-section"} className="btn main-font fs-1-5rem">
                Resume
              </Link>
              <Link to={"#projects-section"} className="btn main-font fs-1-5rem">
                Projects
              </Link>
              <Link to={"#services-section"} className="btn main-font fs-1-5rem">
                Services
              </Link>
              <Link to={"#contact-section"} className="btn main-font fs-1-5rem">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Offcanvas className="gray-color d-block d-lg-none" show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="gray-color secondary-font fs-1-5rem">thbergseng</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gray-color align-items-start">
          <Link to={"#about-section"} onClick={handleClose} className="btn main-font fs-1-25rem dropdown-border text-start">
            About me
          </Link>
          <Link to={"#projects-section"} onClick={handleClose} className="btn main-font fs-1-25rem dropdown-border text-start">
            Resume
          </Link>
          <Link to={"#services-section"} onClick={handleClose} className="btn main-font fs-1-25rem dropdown-border text-start">
            Services
          </Link>
          <Link to={"#contact-section"} onClick={handleClose} className="btn main-font fs-1-25rem dropdown-border text-start">
            Contact
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;

{
  /* <img className="ps-3 cursor-pointer d-none" src={language} onClick={handleLanguage} aria-label="language picker" /> */
}
