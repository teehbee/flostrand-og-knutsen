import AboutContent from "../components/about";
import { useScrollToTop } from "../components/utils";

function About() {
  useScrollToTop();
  return <AboutContent />;
}

export default About;
