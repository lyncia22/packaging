import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./HomePage";
import PackagingProducts from "./PackagingProducts";
import ElectricalProducts from "./ElectricalProducts";

import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/PackagingProducts" element={<PackagingProducts />} />
        <Route path="/ElectricalProducts" element={<ElectricalProducts />} />

      </Routes>
      <Footer />
    </Router>
  );
}
