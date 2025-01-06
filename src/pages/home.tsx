import { FrontpageContent } from "../components/frontpage";
import { useScrollToTop } from "../components/utils";

function Home() {
  useScrollToTop();
  return <FrontpageContent />;
}

export default Home;
