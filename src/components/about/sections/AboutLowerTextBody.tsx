import { aboutParagraph1, aboutParagraph2, aboutParagraph3, aboutParagraph4, aboutParagraph5, aboutParagraph6, aboutParagraph1Bold, aboutParagraph2Bold, aboutParagraph3Bold, aboutParagraph4Bold, aboutParagraph5Bold, aboutParagraph6Bold, aboutSignature } from "../content";
import { AboutTextParagraph } from "../elements";

function AboutLowerTextBody() {
  return (
    <div className="container py-5 my-5">
      <AboutTextParagraph textContentBold={aboutParagraph1Bold} textContent={aboutParagraph1} />
      <AboutTextParagraph textContentBold={aboutParagraph2Bold} textContent={aboutParagraph2} />
      <AboutTextParagraph textContentBold={aboutParagraph3Bold} textContent={aboutParagraph3} />
      <AboutTextParagraph textContentBold={aboutParagraph4Bold} textContent={aboutParagraph4} />
      <AboutTextParagraph textContentBold={aboutParagraph5Bold} textContent={aboutParagraph5} />
      <AboutTextParagraph textContentBold={aboutParagraph6Bold} textContent={aboutParagraph6} />
      <AboutTextParagraph textContentBold="" textContent={aboutSignature} />
    </div>
  );
}

export default AboutLowerTextBody;
