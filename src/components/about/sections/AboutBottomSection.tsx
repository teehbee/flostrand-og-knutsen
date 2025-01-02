import { Link } from "react-router-dom";
import { BlueButton } from "../../buttons";
import { landingButtonText } from "../../frontpage/content";

function AboutBottomSection() {
  return (
    <div className="container text-center my-5 pb-lg-5">
      <Link to="/contact" className="text-decoration-none d-block">
        <BlueButton buttonText={landingButtonText} />
      </Link>
    </div>
  );
}

export default AboutBottomSection;
