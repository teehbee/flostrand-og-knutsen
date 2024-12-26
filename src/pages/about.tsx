import { aboutMainHeaderLarge, aboutMainHeaderSmall, aboutSecondaryHeaderLarge, aboutSecondaryHeaderSmall } from "../assets/img";

function About() {
  return (
    <section id="about-us-landing" className="position-relative">
      <picture>
        <source media="(min-width: 992px)" srcSet={aboutMainHeaderLarge} />
        <img className="frontpage-banner" src={aboutMainHeaderSmall} alt="om oss" />
      </picture>
      <div className="banner-content container">
        <h1 className="text-light">Hvem er vi?</h1>
      </div>
    </section>
  );
}

export default About;
