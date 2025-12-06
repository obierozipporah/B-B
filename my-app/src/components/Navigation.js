import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
export default function Navigation() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/rooms', label: 'Our Rooms' },
        { path: '/availability', label: 'Book Now' },
        { path: '/amenities', label: 'Amenities' },
        { path: '/special-offers', label: 'Special Offers' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/location', label: 'Location' },
        { path: '/contact', label: 'Contact' },
    ];
    return (_jsx("nav", { className: "bg-white shadow-md sticky top-0 z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-20", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [_jsx("div", { className: "w-10 h-10 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white", children: _jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }), _jsx("span", { className: "text-[#2c3e50] text-xl tracking-wide", style: { fontFamily: 'Playfair Display, serif' }, children: "BIRNES HAVEN" })] }), _jsx("div", { className: "hidden lg:flex items-center gap-8", children: navLinks.map((link) => (_jsx(Link, { to: link.path, className: `text-sm tracking-wide transition-colors ${location.pathname === link.path
                                    ? 'text-[#5a8ca0]'
                                    : 'text-[#2c3e50] hover:text-[#5a8ca0]'}`, children: link.label }, link.path))) }), _jsx("button", { className: "lg:hidden text-[#2c3e50]", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isMenuOpen && (_jsx("div", { className: "lg:hidden pb-4", children: navLinks.map((link) => (_jsx(Link, { to: link.path, onClick: () => setIsMenuOpen(false), className: `block py-3 text-sm tracking-wide transition-colors ${location.pathname === link.path
                            ? 'text-[#5a8ca0]'
                            : 'text-[#2c3e50] hover:text-[#5a8ca0]'}`, children: link.label }, link.path))) }))] }) }));
}
