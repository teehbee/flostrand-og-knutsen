import { ServiceHeroImage, ServiceLandingText } from "../elements";
import { marineHeaderLG, marineHeaderSM } from "../data";
import { landingButtonText } from "../../frontpage/content";
import { marineTitle, marineHeader } from "../data";

function ServiceMarine() {
  return (
    <section className="position-relative">
      <ServiceHeroImage heroImageLarge={marineHeaderLG} heroImageSmall={marineHeaderSM} imageDescription="test" />
      <ServiceLandingText landingTitle={marineTitle} landingQuote={marineHeader} buttonText={landingButtonText} />
    </section>
  );
}

export default ServiceMarine;
