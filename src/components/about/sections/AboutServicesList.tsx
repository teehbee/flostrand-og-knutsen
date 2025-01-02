import { AboutServicesTitle, AboutServicesListContent } from "../elements";
import { aboutServicesTitle, aboutServicesTitlesAndContents } from "../content";

function AboutServicesList() {
  return (
    <section id="about-services-list" className="container py-5 my-5">
      <AboutServicesTitle aboutServicesTitle={aboutServicesTitle} />
      {aboutServicesTitlesAndContents.map((item, index) => (
        <AboutServicesListContent key={index} listTitle={item.title} listItems={item.items} />
      ))}
    </section>
  );
}

export default AboutServicesList;
