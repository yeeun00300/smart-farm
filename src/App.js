import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Simulation from "./pages/simulation/Simulation";
import Detail from "./pages/simulation/details/Detail";
import CustomerServiceCenter from "./pages/customer-service-center/CustomerServiceCenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="simulation" element={<Simulation />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="Login" element={<LoginPage />} />
          <Route
            path="customer-service-center"
            element={<CustomerServiceCenter />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
