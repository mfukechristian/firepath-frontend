import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomePage from "./pages/HomePage";
import TouristVisaPage from "./pages/TouristVisaPage";
import WorkVisaPage from "./pages/WorkVisaPage";
import StudyVisaPage from "./pages/StudyVisaPage";
import PermanentResidencyPage from "./pages/PermanentResidencyPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/tourist-visa" element={<TouristVisaPage />} />
      <Route path="/work-visa" element={<WorkVisaPage />} />
      <Route path="/study-visa" element={<StudyVisaPage />} />
      <Route path="/permanent-residency" element={<PermanentResidencyPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
