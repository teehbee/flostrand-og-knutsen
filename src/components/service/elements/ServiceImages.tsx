import { metalWorksImages } from "../../../assets/img/service-metalworks/img";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function ServiceImageSection() {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="metalServiceImg"]');
  }, []);

  return (
    <div className="container mx-auto mt-5 pt-lg-5 row justify-content-center text-center g-3">
      {Object.values(metalWorksImages).map((image, index) => (
        <div className="col-12 col-sm-6 col-xl-3 service-image-container">
          <img data-fancybox="metalServiceImg" key={index} src={image.src} alt={image.alt} data-caption={image.alt} className="services-image rounded" />
        </div>
      ))}
    </div>
  );
}

export default ServiceImageSection;
