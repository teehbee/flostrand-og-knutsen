import { mainLogo } from "../../assets/graphics";
import { menuBars } from "../../assets/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  const [show, setShow] = useState(false);
  // const [language, setLanguage] = useState(flagGB);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="container-fluid">
        <div className="container-fluid px-4">
          <Link to="/">
            <img src={mainLogo} className="header-logo" aria-label="logo" />
          </Link>
          <img src={menuBars} className="d-lg-none nav-bars-button" aria-label="menu-button" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto main-navigation dark-font pe-3">
              <NavDropdown title="Tjenester" id="basic-nav-dropdown" className="dark-font fs-1-25rem fw-500">
                <NavDropdown.Item href="/marine-deck-fabrication" className="dark-font fs-1-25rem fw-500">
                  Marine deck fabrication
                </NavDropdown.Item>
                <NavDropdown.Item href="/metal-works" className="dark-font fs-1-25rem fw-500">
                  Metallarbeider
                </NavDropdown.Item>
                <NavDropdown.Item href="/personel" className="dark-font fs-1-25rem fw-500">
                  Personell
                </NavDropdown.Item>
                <NavDropdown.Item href="/garden-works" className="dark-font fs-1-25rem fw-500">
                  Hagearbeider
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about" className="btn dark-font fs-1-25rem fw-500">
                Om oss
              </Nav.Link>
              <Nav.Link href="/contact" className="btn dark-font fs-1-25rem fw-500">
                Kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Offcanvas className="gray-color d-block d-lg-none pe-3 " show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="">
            <img src={mainLogo} className="header-logo" aria-label="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column align-items-start w-100 ">
          <Navbar.Text className="py-1 fw-bold dark-font dropdown-border">Tjenester</Navbar.Text>
          <div className="text-start dropdown-border">
            <Nav.Link href="/marine-deck-fabrication" className="btn py-1 dark-font text-indent-dropdown fw-500 text-start" onClick={handleClose}>
              Marine deck fabrication
            </Nav.Link>
            <Nav.Link href="/metal-works" className="btn py-1 dark-font text-indent-dropdown fw-500 text-start" onClick={handleClose}>
              Metallarbeider
            </Nav.Link>
            <Nav.Link href="/personel" className="btn py-1 dark-font text-indent-dropdown fw-500 text-start" onClick={handleClose}>
              Personello
            </Nav.Link>
            <Nav.Link href="/garden-works" className="btn py-1 dark-font text-indent-dropdown fw-500 text-start" onClick={handleClose}>
              Hagearbeider
            </Nav.Link>
          </div>
          <Nav.Link href="/about" className="btn py-1 dark-font fw-500" onClick={handleClose}>
            Om oss
          </Nav.Link>
          <Nav.Link href="/contact" className="btn py-1 dark-font fw-500" onClick={handleClose}>
            Kontakt
          </Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;

{
  /* <img className="ps-3 cursor-pointer d-none" src={language} onClick={handleLanguage} aria-label="language picker" /> */
}
