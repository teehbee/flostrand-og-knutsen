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
      <Navbar expand="lg" className="">
        <div className="container px-4">
          <Link to="/">
            <img src={mainLogo} className="header-logo" aria-label="logo" />
          </Link>
          <img src={menuBars} className="d-lg-none nav-bars-button" aria-label="menu-button" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto main-navigation">
              <NavDropdown title="Tjenester" id="basic-nav-dropdown">
                <NavDropdown.Item href="#tjeneste1">Tjeneste 1</NavDropdown.Item>
                <NavDropdown.Item href="#tjeneste1">Tjeneste 2</NavDropdown.Item>
                <NavDropdown.Item href="#tjeneste1">Tjeneste 3</NavDropdown.Item>
                <NavDropdown.Item href="#tjeneste1">Tjeneste 4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about" className="btn">
                Om oss
              </Nav.Link>
              <Nav.Link href="/contact" className="btn">
                Kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Offcanvas className="gray-color d-block d-lg-none h100" show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="">
            <img src={mainLogo} className="header-logo" aria-label="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column align-items-start h100">
          <Navbar.Text className="py-1 fw-bold">Tjenester</Navbar.Text>
          <div>
            <Nav.Link href="/tjeneste1" className="btn py-1">
              Tjeneste 1
            </Nav.Link>
            <Nav.Link href="/tjeneste2" className="btn py-1">
              Tjeneste 2
            </Nav.Link>
            <Nav.Link href="/tjeneste3" className="btn py-1">
              Tjeneste 3
            </Nav.Link>
            <Nav.Link href="/tjeneste4" className="btn py-1">
              Tjeneste 4
            </Nav.Link>
          </div>
          <Nav.Link href="/about" className="btn py-1">
            Om oss
          </Nav.Link>
          <Nav.Link href="/contact" className="btn py-1">
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
