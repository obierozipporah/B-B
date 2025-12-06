import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Navigation, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/rooms", element: _jsx(Rooms, {}) }), _jsx(Route, { path: "/availability", element: _jsx(Availability, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/testimonials", element: _jsx(Testimonials, {}) }), _jsx(Route, { path: "/amenities", element: _jsx(Amenities, {}) }), _jsx(Route, { path: "/special-offers", element: _jsx(SpecialOffers, {}) }), _jsx(Route, { path: "/location", element: _jsx(Location, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(Checkout, {}) })] }), _jsx(Footer, {})] }) }));
}
