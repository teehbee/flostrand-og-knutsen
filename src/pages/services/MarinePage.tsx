import { ServiceMarine } from "../../components/service/pages";
import { useScrollToTop } from "../../components/utils";

function MarinePage() {
  useScrollToTop();
  return <ServiceMarine />;
}

export default MarinePage;
