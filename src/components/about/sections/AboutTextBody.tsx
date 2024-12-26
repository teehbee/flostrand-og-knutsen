import { aboutParagraph1, aboutParagraph2, aboutParagraph3, aboutParagraph4, aboutParagraph5, aboutParagraph6, aboutSignature } from "../content";
import { AboutTextParagraph } from "../elements";

function AboutTextBody() {
  return (
    <div className="container py-5 my-5">
      <AboutTextParagraph textContent={aboutParagraph1} />
      <AboutTextParagraph textContent={aboutParagraph2} />
      <AboutTextParagraph textContent={aboutParagraph3} />
      <AboutTextParagraph textContent={aboutParagraph4} />
      <AboutTextParagraph textContent={aboutParagraph5} />
      <AboutTextParagraph textContent={aboutParagraph6} />
      <AboutTextParagraph textContent={aboutSignature} />
    </div>
  );
}

export default AboutTextBody;
