import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Admin from "./screen/Admin";
import AdminAddPort from "./screen/AdminAddPort";
import AdminDelPort from "./screen/AdminDelPort";
import Home from "./screen/Home";
import Portfolio from "./screen/Portfolio";
import PortfolioDetail from "./screen/PortfolioDetail";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/PortfolioDetail/:id" element={<PortfolioDetail />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AdminAddPort" element={<AdminAddPort />} />
        <Route path="/AdminDelPort" element={<AdminDelPort />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
