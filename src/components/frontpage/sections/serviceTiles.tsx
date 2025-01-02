import { ServicesTile } from "../elements";
import { marineServiceCardImg, personnelServiceCardImg, metalWorksServiceCardImg, gardenServiceCardImg } from "../../../assets/img";

function ServicesTiles() {
  return (
    <div className="d-flex my-5 py-lg-5 flex-wrap justify-content-center justify-content-md-between">
      <ServicesTile serviceImage={marineServiceCardImg} serviceTitle="Marine deck fabrication" link="/marine-deck-fabrication" />
      <ServicesTile serviceImage={metalWorksServiceCardImg} serviceTitle="Metallarbeid" link="/metal-works" />
      <ServicesTile serviceImage={personnelServiceCardImg} serviceTitle="Personell" link="/personel" />
      <ServicesTile serviceImage={gardenServiceCardImg} serviceTitle="Hagearbeid" link="/garden-works" />
    </div>
  );
}

export default ServicesTiles;
