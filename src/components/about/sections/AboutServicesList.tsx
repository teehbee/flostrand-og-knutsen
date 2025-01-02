import { AboutServicesTitle } from "../elements";
import { aboutServicesTitle } from "../content";

function AboutServicesList() {
  return (
    <section id="about-services-list" className="container py-5 my-5">
      <AboutServicesTitle aboutServicesTitle={aboutServicesTitle} />
    </section>
  );
}

export default AboutServicesList;
