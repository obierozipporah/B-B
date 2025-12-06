import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Users, Maximize, Wifi, Tv, Coffee } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import room1Image from 'figma:asset/room1.png';
import room2Image from 'figma:asset/room2.png';
export default function Rooms() {
    const rooms = [
        {
            id: 1,
            name: 'A402, Tsavo Laiser Place',
            type: '1 Bedroom',
            description: 'A spacious 1-bedroom apartment with stunning swimming pool views and access to the beautiful gazebo area.',
            price: 26.99,
            image: room1Image,
            guests: 2,
            size: '450 sq ft',
            features: ['Queen Bed', 'Swimming Pool View', 'Gazebo Access', 'Full Bathroom']
        },
        {
            id: 2,
            name: 'A302, Tsavo Sentinel',
            type: 'Studio Apartment',
            description: 'Cozy studio apartment with serene garden views and access to a fully-equipped roof-top kitchen.',
            price: 19.28,
            image: room2Image,
            guests: 2,
            size: '350 sq ft',
            features: ['Queen Bed', 'Garden View', 'Roof-Top Kitchen', 'Full Bathroom']
        }
    ];
    return (_jsxs("div", { children: [_jsx("section", { className: "py-20 px-4 bg-gradient-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-5xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Our Rooms" }), _jsx("p", { className: "text-xl text-white/90 max-w-2xl mx-auto leading-relaxed", children: "Choose from our two comfortable accommodations at Tsavo Laiser Place" })] }) }), _jsx("section", { className: "py-16 px-4 max-w-6xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: rooms.map((room) => (_jsxs("div", { className: "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow", children: [_jsxs("div", { className: "relative h-80", children: [_jsx(ImageWithFallback, { src: room.image, alt: room.name, className: "w-full h-full object-cover" }), _jsxs("div", { className: "absolute top-4 right-4 bg-[#5a8ca0] text-white px-4 py-2 rounded-lg", children: ["$", room.price, "/night"] }), _jsx("div", { className: "absolute top-4 left-4 bg-white/95 text-gray-800 px-4 py-2 rounded-lg text-sm", children: room.type })] }), _jsxs("div", { className: "p-8", children: [_jsx("h3", { className: "text-2xl text-gray-900 mb-2", style: { fontFamily: 'Playfair Display, serif' }, children: room.name }), _jsx("p", { className: "text-gray-600 mb-6", children: room.description }), _jsxs("div", { className: "flex gap-6 mb-6 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Users, { size: 18, className: "text-[#5a8ca0]" }), _jsxs("span", { children: ["Up to ", room.guests, " Guests"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Maximize, { size: 18, className: "text-[#5a8ca0]" }), _jsx("span", { children: room.size })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-sm text-gray-700 mb-3", children: "Room Features:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: room.features.map((feature, index) => (_jsx("span", { className: "px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-lg", children: feature }, index))) })] }), _jsx(Link, { to: "/availability", className: "block text-center bg-[#5a8ca0] text-white py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors", children: "Book This Room" })] })] }, room.id))) }) }), _jsx("section", { className: "py-16 px-4 bg-gray-50", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsx("h2", { className: "text-3xl text-gray-900 mb-8 text-center", style: { fontFamily: 'Playfair Display, serif' }, children: "In Every Room" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6", children: [
                                { icon: _jsx(Wifi, { size: 24 }), label: 'Free Wi-Fi' },
                                { icon: _jsx(Tv, { size: 24 }), label: 'Flat-Screen TV' },
                                { icon: _jsx(Coffee, { size: 24 }), label: 'Refrigerator' },
                                { icon: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }) }), label: 'Cooker' },
                                { icon: _jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), _jsx("path", { d: "M9 3v18M15 3v18M3 9h18M3 15h18" })] }), label: 'Microwave' },
                                { icon: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M14 3v4a1 1 0 0 0 1 1h4M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" }) }), label: 'Clean Bedding' },
                                { icon: _jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "8", r: "4" }), _jsx("path", { d: "M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" })] }), label: 'Premium Toiletries' },
                                { icon: _jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }), _jsx("path", { d: "M2 17l10 5 10-5M2 12l10 5 10-5" })] }), label: 'Heater' },
                                { icon: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" }) }), label: 'Iron & Board' },
                                { icon: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M4 4h16v16H4z" }) }), label: 'Blackout Curtains' },
                                { icon: _jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2" }), _jsx("path", { d: "M16 3v4M8 3v4" })] }), label: 'Work Desk' },
                                { icon: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }) }), label: 'Complimentary Water' }
                            ].map((item, index) => (_jsxs("div", { className: "flex flex-col items-center text-center", children: [_jsx("div", { className: "w-14 h-14 bg-[#5a8ca0] rounded-xl flex items-center justify-center text-white mb-2", children: item.icon }), _jsx("span", { className: "text-sm text-gray-700", children: item.label })] }, index))) })] }) }), _jsx("section", { className: "py-16 px-4 bg-[#2a2a2a] text-white text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-3xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Ready to Book?" }), _jsx("p", { className: "text-lg text-gray-300 mb-8", children: "Check availability and secure your perfect room today" }), _jsx(Link, { to: "/availability", className: "inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors", children: "Check Availability" })] }) })] }));
}
