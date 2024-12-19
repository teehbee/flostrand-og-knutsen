import { mainHeaderLarge, mainHeaderSmall } from "../../assets/img";
import { gardenServiceCardImg, marineServiceCardImg, metalWorksServiceCardImg, personnelServiceCardImg } from "../../assets/img";
import { Link } from "react-router-dom";

function FrontpageContent() {
  return (
    <div className="text-center">
      <section id="landing-section" className="position-relative">
        <picture>
          <source media="(min-width: 992px)" srcSet={mainHeaderLarge} />
          <img className="frontpage-banner" src={mainHeaderSmall} alt="bilde av Valestrand kaiområde" />
        </picture>
      </section>
      <div className="container text-start banner-content">
        <h1 className="text-light fs-2-125rem-to-3-625rem fw-bold">Fra lidenskap til løsninger - en historie om innovasjon</h1>
        <p className="text-light fs-1rem-to-1-25rem">Vi er nysgjerrige på hva du jobber med. Ta gjerne kontakt, så kan vi utforske mulighetene sammen.</p>
        <Link to="/contact" className="text-decoration-none">
          <button className="blue-button">Send forespørsel</button>
        </Link>
      </div>
      <section id="services" className="container my-5">
        <div>
          <h2 className="dark-font fs-2-125rem-to-3-625rem fw-bold">Tjenestene vi tilbyr</h2>
          <p className="my-5 fs-1rem-to-1-25rem fw-500">
            Vi tilbyr skreddersydde metalløsninger for en rekke bransjer. Fra sveising og konstruksjon til produktutvikling, har vi ekspertisen og utstyret som trengs for å gjennomføre prosjekter av
            alle størrelser. Våre tjenester inkluderer blant annet.
          </p>
        </div>
        <div className="d-flex my-5 py-5 flex-wrap justify-content-center justify-content-md-between">
          <div className="services-card col-12 col-md-6 col-lg-3 rounded p-0 my-1">
            <div className="position-relative">
              <Link to="/service">
                <img className="img-fluid rounded" src={gardenServiceCardImg} alt="tjeneste link" />
              </Link>
              <div className="position-absolute bottom-0 start-0">
                <button className="m-3">Tjeneste</button>
              </div>
            </div>
          </div>
          <div className="services-card col-12 col-md-6 col-lg-3 rounded p-0 my-1">
            <Link to="/service">
              <img className="img-fluid rounded" src={marineServiceCardImg} alt="" />
            </Link>
          </div>
          <div className="services-card col-12 col-md-6 col-lg-3 rounded p-0 my-1">
            <Link to="/">
              <img className="img-fluid rounded" src={metalWorksServiceCardImg} alt="" />
            </Link>
          </div>
          <div className="services-card col-12 col-md-6 col-lg-3 rounded p-0 my-1">
            <Link to="/">
              <img className="img-fluid rounded" src={personnelServiceCardImg} alt="" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FrontpageContent;
