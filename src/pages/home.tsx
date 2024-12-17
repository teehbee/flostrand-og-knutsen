import { mainHeaderLarge, mainHeaderSmall } from "../assets/img";

function Home() {
  return (
    <div className="text-center">
      <div className="position-relative">
        <picture>
          <source media="(min-width: 992px)" srcSet={mainHeaderLarge} />
          <img className="frontpage-banner" src={mainHeaderSmall} alt="bilde av Valestrand kaiområde" />
        </picture>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-light">Homepage</h1>
      </div>
      <div>Test</div>
    </div>
  );
}

export default Home;
