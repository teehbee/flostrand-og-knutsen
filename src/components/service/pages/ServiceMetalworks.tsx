import { ServiceHeroImage, ServiceLandingText, ServiceBodyText, ServiceBottomSection, ServiceImageSection } from "../elements";
import { metalHeaderLG, metalHeaderSM } from "../data";
import { landingButtonText } from "../../frontpage/content";
import { metalWorksTitle, metalworksHeader, metalworksText } from "../data";

function ServiceMarine() {
  return (
    <>
      <section className="position-relative">
        <ServiceHeroImage heroImageLarge={metalHeaderLG} heroImageSmall={metalHeaderSM} imageDescription="test" />
        <ServiceLandingText landingTitle={metalWorksTitle} landingQuote={metalworksHeader} buttonText={landingButtonText} />
      </section>
      <section className="my-5 py-5">
        {metalworksText.map((paragraph, index) => (
          <ServiceBodyText key={index} bold={paragraph.title} main={paragraph.text} />
        ))}
        <ServiceImageSection />
      </section>
      <section>
        <ServiceBottomSection />
      </section>
    </>
  );
}

export default ServiceMarine;
