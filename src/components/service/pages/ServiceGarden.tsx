import { ServiceHeroImage, ServiceLandingText, ServiceBodyText, ServiceBottomSection } from "../elements";
import { gardenHeaderLG, gardenHeaderSM } from "../data";
import { landingButtonText } from "../../frontpage/content";
import { gardenTitle, gardenHeader, gardenText } from "../data";

function ServiceGarden() {
  return (
    <>
      <section className="position-relative">
        <ServiceHeroImage heroImageLarge={gardenHeaderLG} heroImageSmall={gardenHeaderSM} imageDescription="test" />
        <ServiceLandingText landingTitle={gardenTitle} landingQuote={gardenHeader} buttonText={landingButtonText} />
      </section>
      <section className="my-5 py-5">
        {gardenText.map((paragraph, index) => (
          <ServiceBodyText key={index} bold={paragraph.title} main={paragraph.text} />
        ))}
      </section>
      <section>
        <ServiceBottomSection />
      </section>
    </>
  );
}

export default ServiceGarden;
