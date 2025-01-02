import { ServiceHeroImage, ServiceLandingText } from "../elements";
import { metalHeaderLG, metalHeaderSM } from "../data";
import { landingButtonText } from "../../frontpage/content";
import { metalWorksTitle, metalworksHeader } from "../data";

function ServiceMetalworks() {
  return (
    <section className="position-relative">
      <ServiceHeroImage heroImageLarge={metalHeaderLG} heroImageSmall={metalHeaderSM} imageDescription="test" />
      <ServiceLandingText landingTitle={metalWorksTitle} landingQuote={metalworksHeader} buttonText={landingButtonText} />
    </section>
  );
}

export default ServiceMetalworks;
