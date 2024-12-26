import { AboutLandingImage, AboutLowerText } from "../elements";
import { aboutSecondaryHeaderLarge, aboutSecondaryHeaderSmall } from "../../../assets/img";
import { aboutLowerImageDescription, aboutLowerImageHeader, aboutLowerImageText } from "../content";

function AboutLowerImageSection() {
  return (
    <section id="about-us-landing" className="position-relative">
      <AboutLandingImage aboutMainHeaderLarge={aboutSecondaryHeaderLarge} aboutMainHeaderSmall={aboutSecondaryHeaderSmall} aboutMainImageDescription={aboutLowerImageDescription}></AboutLandingImage>
      <AboutLowerText aboutLowerHeader={aboutLowerImageHeader} aboutLowerImageText={aboutLowerImageText} />
    </section>
  );
}

export default AboutLowerImageSection;
