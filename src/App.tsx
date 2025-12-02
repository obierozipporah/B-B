import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Availability from './pages/Availability';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Amenities from './pages/Amenities';
import SpecialOffers from './pages/SpecialOffers';
import Location from './pages/Location';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/location" element={<Location />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}