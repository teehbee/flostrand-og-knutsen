import { createBrowserRouter } from "react-router-dom";
import { Home, About, MarinePage, MetalworksPage, PersonelPage, GardenPage } from "../pages";
import MainLayout from "../layouts/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/marine-deck-fabrication",
        element: <MarinePage />,
      },
      {
        path: "/metal-works",
        element: <MetalworksPage />,
      },
      {
        path: "/personel",
        element: <PersonelPage />,
      },
      {
        path: "/garden-works",
        element: <GardenPage />,
      },
    ],
  },
]);

export { router };
