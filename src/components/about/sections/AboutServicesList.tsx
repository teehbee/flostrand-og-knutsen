import { AboutServicesTitle, AboutServicesListContent } from "../elements";
import { aboutServicesTitle, aboutServicesTitlesAndContents } from "../content";

function AboutServicesList() {
  return (
    <section id="about-services-list" className="container py-5 my-5">
      <AboutServicesTitle aboutServicesTitle={aboutServicesTitle} />
      <div className="row section-border pb-3 pb-lg-5 d-flex justify-content-center">
        {aboutServicesTitlesAndContents.map((item, index) => (
          <AboutServicesListContent key={index} listTitle={item.title} listItems={item.items} />
        ))}
      </div>
    </section>
  );
}

export default AboutServicesList;
