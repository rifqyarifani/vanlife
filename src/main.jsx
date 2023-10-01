import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./routes/App.jsx";
import About from "./routes/About.jsx";
import Vans from "./routes/Vans/Vans.jsx";
import DetailVans from "./routes//Vans/DetailVans.jsx";
import Dashboard from "./routes/Host/Dashboard.jsx";
import Income from "./routes/Host/Income.jsx";
import VansHost from "./routes/Host/Vans.jsx";
import Reviews from "./routes/Host/Reviews.jsx";
import NavbarHost from "./components/NavbarHost.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";
import "../server.js";
import VanDetail from "./routes/Host/Vans/VanDetail.jsx";
import DetailVansHost from "./components/DetailVansHost.jsx";
import HostVansPricing from "./routes/Host/Vans/HostVansPricing.jsx";
import HostVansPhotos from "./routes/Host/Vans/HostVansPhotos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<DetailVans />} />
          <Route path="host" element={<NavbarHost />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<VansHost />} />
            <Route path="vans/:id" element={<DetailVansHost />}>
              <Route index element={<VanDetail />} />
              <Route path="pricing" element={<HostVansPricing />} />
              <Route path="photos" element={<HostVansPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
