import { Link } from "react-router-dom";
import { BlueButton } from "../../buttons";
import { landingButtonText } from "../../frontpage/content";

function ServiceBottomSection() {
  return (
    <div className="container text-center my-5 py-5 section-border-top">
      <Link to="/contact" className="text-decoration-none d-block">
        <BlueButton buttonText={landingButtonText} />
      </Link>
    </div>
  );
}

export default ServiceBottomSection;
