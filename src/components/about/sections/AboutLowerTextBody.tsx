import { aboutLowerParagraph1Bold, aboutLowerParagraph1, aboutLowerParagraph2Bold, aboutLowerParagraph2, aboutLowerParagraph3Bold, aboutLowerParagraph3, aboutLowerParagraph4Bold, aboutLowerParagraph4, aboutLowerParagraph5Bold, aboutLowerParagraph5 } from "../content";
import { AboutTextParagraph } from "../elements";

function AboutLowerTextBody() {
  return (
    <section id="about-us-lower-text" className="container py-5 my-5">
      <AboutTextParagraph textContentBold={aboutLowerParagraph1Bold} textContent={aboutLowerParagraph1} />
      <AboutTextParagraph textContentBold={aboutLowerParagraph2Bold} textContent={aboutLowerParagraph2} />
      <AboutTextParagraph textContentBold={aboutLowerParagraph3Bold} textContent={aboutLowerParagraph3} />
      <AboutTextParagraph textContentBold={aboutLowerParagraph4Bold} textContent={aboutLowerParagraph4} />
      <AboutTextParagraph textContentBold={aboutLowerParagraph5Bold} textContent={aboutLowerParagraph5} />
    </section>
  );
}

export default AboutLowerTextBody;
