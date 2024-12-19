import { ServicesTile } from "../elements";
import { marineServiceCardImg, personnelServiceCardImg, metalWorksServiceCardImg, gardenServiceCardImg } from "../../../assets/img";

function ServicesTiles() {
  return (
    <div className="d-flex my-5 py-lg-5 flex-wrap justify-content-center justify-content-md-between">
      <ServicesTile serviceImage={marineServiceCardImg} serviceTitle="Marine deck fabrication" />
      <ServicesTile serviceImage={metalWorksServiceCardImg} serviceTitle="Metallarbeid" />
      <ServicesTile serviceImage={personnelServiceCardImg} serviceTitle="Personell" />
      <ServicesTile serviceImage={gardenServiceCardImg} serviceTitle="Hagearbeid" />
    </div>
  );
}

export default ServicesTiles;
