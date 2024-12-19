import { mainHeaderLarge, mainHeaderSmall } from "../../assets/img";
import { ServicesTiles, ServicesText, LandingText, LandingImage } from "./sections";
import { landingTitle, landingQuote, landingButtonText, servicesTitle, servicesDescription, landingImageDescription } from "./content";

function FrontpageContent() {
  return (
    <div className="text-center">
      <section id="landing-section" className="position-relative">
        <LandingImage mainHeaderLarge={mainHeaderLarge} mainHeaderSmall={mainHeaderSmall} imageDescription={landingImageDescription} />
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
