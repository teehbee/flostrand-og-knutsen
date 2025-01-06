import { ServiceHeroImage, ServiceLandingText, ServiceBodyText, ServiceBottomSection } from "../elements";
import { personelHeaderLG, personelHeaderSM } from "../data";
import { landingButtonText } from "../../frontpage/content";
import { personelTitle, personelHeader, personelText } from "../data";

function ServiceMarine() {
  return (
    <>
      <section className="position-relative">
        <ServiceHeroImage heroImageLarge={personelHeaderLG} heroImageSmall={personelHeaderSM} imageDescription="test" />
        <ServiceLandingText landingTitle={personelTitle} landingQuote={personelHeader} buttonText={landingButtonText} />
      </section>
      <section className="my-5 py-5">
        {personelText.map((paragraph, index) => (
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
