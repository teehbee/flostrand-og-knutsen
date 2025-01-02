import { aboutSecondaryParagraphs } from "../content";
import { AboutTextParagraph } from "../elements";

function AboutLowerTextBody() {
  return (
    <section id="about-us-lower-text" className="container py-5 my-5">
      {aboutSecondaryParagraphs.map((paragraph, index) => (
        <AboutTextParagraph key={index} bold={paragraph.bold} main={paragraph.main} />
      ))}
    </section>
  );
}

export default AboutLowerTextBody;
