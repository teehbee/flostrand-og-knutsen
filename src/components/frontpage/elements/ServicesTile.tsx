import { Link } from "react-router-dom";

interface serviceTile {
  serviceImage: string;
  serviceTitle: string;
}

const ServicesTile: React.FC<serviceTile> = ({ serviceImage, serviceTitle }) => {
  return (
    <div className="services-card col-12 col-md-6 col-lg-3 rounded p-0 my-1">
      <div className="position-relative">
        <Link to="/service">
          <img className="img-fluid rounded" src={serviceImage} alt="tjeneste link" />
        </Link>
        <div className="position-absolute bottom-0 start-0">
          <Link to="/tjeneste1">
            <button className="m-3 transparent-button">{serviceTitle}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesTile;
