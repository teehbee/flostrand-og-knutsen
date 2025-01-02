import { ServiceHeroImage, ServiceLandingText } from "../elements";
import { personelHeaderLG, personelHeaderSM } from "../data";
import { landingButtonText } from "../../frontpage/content";
import { personelTitle, personelHeader } from "../data";

function ServicePersonel() {
  return (
    <section className="position-relative">
      <ServiceHeroImage heroImageLarge={personelHeaderLG} heroImageSmall={personelHeaderSM} imageDescription="test" />
      <ServiceLandingText landingTitle={personelTitle} landingQuote={personelHeader} buttonText={landingButtonText} />
    </section>
  );
}

export default ServicePersonel;
