import { ServiceHeroImage, ServiceLandingText } from "../elements";
import { gardenHeaderLG, gardenHeaderSM } from "../data";
import { landingButtonText } from "../../frontpage/content";
import { gardenTitle, gardenHeader } from "../data";

function ServiceGarden() {
  return (
    <section className="position-relative">
      <ServiceHeroImage heroImageLarge={gardenHeaderLG} heroImageSmall={gardenHeaderSM} imageDescription="test" />
      <ServiceLandingText landingTitle={gardenTitle} landingQuote={gardenHeader} buttonText={landingButtonText} />
    </section>
  );
}

export default ServiceGarden;
