import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export { AllRoutes };
