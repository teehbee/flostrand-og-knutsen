import { AboutLandingImage, AboutLandingHeader } from "../elements";
import { aboutMainHeaderLarge, aboutMainHeaderSmall } from "../../../assets/img";
import { aboutHeader, aboutLandingImageDescription } from "../content";

function AboutLandingSection() {
  return (
    <section id="about-us-landing" className="position-relative">
      <AboutLandingImage aboutMainHeaderLarge={aboutMainHeaderLarge} aboutMainHeaderSmall={aboutMainHeaderSmall} aboutMainImageDescription={aboutLandingImageDescription} />
      <AboutLandingHeader aboutLandingHeader={aboutHeader} />
    </section>
  );
}

export default AboutLandingSection;
