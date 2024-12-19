import { mainHeaderLarge, mainHeaderSmall } from "../../assets/img";
import { ServicesTiles, ServicesText, LandingText } from "./sections";
import { landingTitle, landingQuote, landingButtonText, servicesTitle, servicesDescription } from "./content";

function FrontpageContent() {
  return (
    <div className="text-center">
      <section id="landing-section" className="position-relative">
        <picture>
          <source media="(min-width: 992px)" srcSet={mainHeaderLarge} />
          <img className="frontpage-banner" src={mainHeaderSmall} alt="bilde av Valestrand kaiområde" />
        </picture>
        <LandingText landingTitle={landingTitle} landingQuote={landingQuote} buttonText={landingButtonText} />
      </section>
      <section id="services" className="container my-3 py-3 my-lg-5 py-lg-5">
        <ServicesText title={servicesTitle} description={servicesDescription} />
        <ServicesTiles />
      </section>
    </div>
  );
}

export default FrontpageContent;
