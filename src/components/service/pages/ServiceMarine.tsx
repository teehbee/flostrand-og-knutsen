import { ServiceHeroImage, ServiceLandingText, ServiceBodyText, ServiceBottomSection } from "../elements";
import { marineHeaderLG, marineHeaderSM } from "../data";
import { landingButtonText } from "../../frontpage/content";
import { marineTitle, marineHeader, marineText } from "../data";

function ServiceMarine() {
  return (
    <>
      <section className="position-relative">
        <ServiceHeroImage heroImageLarge={marineHeaderLG} heroImageSmall={marineHeaderSM} imageDescription="test" />
        <ServiceLandingText landingTitle={marineTitle} landingQuote={marineHeader} buttonText={landingButtonText} />
      </section>
      <section className="my-5 py-5">
        {marineText.map((paragraph, index) => (
          <ServiceBodyText key={index} bold={paragraph.title} main={paragraph.text} />
        ))}
      </section>
      <section>
        <ServiceBottomSection />
      </section>
    </>
  );
}

export default ServiceMarine;
