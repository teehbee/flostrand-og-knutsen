import { aboutMainParagraph, aboutMainParagraphSignature } from "../content";
import { AboutTextParagraph } from "../elements";

function AboutTextBody() {
  return (
    <div className="container py-5 my-5">
      {aboutMainParagraph.map((paragraph, index) => (
        <AboutTextParagraph key={index} bold={paragraph.bold} main={paragraph.main} />
      ))}
      <p className="fs-1rem-to-1-25rem py-2 py-lg-3 m-0">{aboutMainParagraphSignature}</p>
    </div>
  );
}

export default AboutTextBody;
