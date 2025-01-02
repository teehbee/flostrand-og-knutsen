import { Link } from "react-router-dom";
import { BlueButton } from "../../buttons";

interface serviceHeroText {
  landingTitle: string;
  landingQuote: string;
  buttonText: string;
}

const ServiceLandingText: React.FC<serviceHeroText> = ({ landingTitle, landingQuote, buttonText }) => {
  return (
    <div className="container text-start banner-content">
      <h1 className="text-light fs-2-125rem-to-3-625rem fw-bold">{landingTitle}</h1>
      <p className="text-light fs-1rem-to-1-25rem py-3">{landingQuote}</p>
      <Link to="/contact" className="text-decoration-none">
        <BlueButton buttonText={buttonText} />
      </Link>
    </div>
  );
};

export default ServiceLandingText;
