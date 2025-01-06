import { Link } from "react-router-dom";
import { BlueButton } from "../../buttons";

interface landingText {
  landingTitle: string;
  landingQuote: string;
  buttonText: string;
}

const LandingText: React.FC<landingText> = ({ landingTitle, landingQuote, buttonText }) => {
  return (
    <div className="container text-start banner-content">
      <h2 className="text-light fs-2-125rem-to-3-625rem fw-bold text-shadow-dark">{landingTitle}</h2>
      <p className="text-light fs-1rem-to-1-25rem text-shadow-dark">{landingQuote}</p>
      <Link to="/contact" className="text-decoration-none">
        <BlueButton buttonText={buttonText} />
      </Link>
    </div>
  );
};

export default LandingText;
