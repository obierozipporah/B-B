import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import room1Image from 'figma:asset/room1.png';
import room2Image from 'figma:asset/room2.png';
export default function Availability() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        checkIn: '',
        checkOut: '',
        guests: 2
    });
    const rooms = [
        {
            id: 'a402',
            name: 'A402, Tsavo Laiser Place',
            type: '1 Bedroom',
            price: 26.99,
            image: room1Image,
            available: true
        },
        {
            id: 'a302',
            name: 'A302, Tsavo Sentinel',
            type: 'Studio Apartment',
            price: 19.28,
            image: room2Image,
            available: true
        }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchParams.checkIn && searchParams.checkOut) {
            navigate('/checkout', {
                state: {
                    ...searchParams,
                    roomDetails: rooms.find(r => r.available)
                }
            });
        }
    };
    return (_jsxs("div", { children: [_jsx("section", { className: "py-20 px-4 bg-gradient-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-5xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Book Your Stay" }), _jsx("p", { className: "text-xl text-white/90 max-w-2xl mx-auto leading-relaxed", children: "Select your dates and choose the perfect room for your getaway." })] }) }), _jsx("section", { className: "py-12 px-4 max-w-6xl mx-auto", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 mb-12", children: [_jsx("h2", { className: "text-2xl text-gray-900 mb-6", style: { fontFamily: 'Playfair Display, serif' }, children: "Your Booking Details" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Check-In Date" }), _jsxs("div", { className: "relative", children: [_jsx(Calendar, { size: 18, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#5a8ca0]" }), _jsx("input", { type: "date", value: searchParams.checkIn, onChange: (e) => setSearchParams({ ...searchParams, checkIn: e.target.value }), className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Check-Out Date" }), _jsxs("div", { className: "relative", children: [_jsx(Calendar, { size: 18, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#5a8ca0]" }), _jsx("input", { type: "date", value: searchParams.checkOut, onChange: (e) => setSearchParams({ ...searchParams, checkOut: e.target.value }), className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Number of Guests" }), _jsxs("div", { className: "relative", children: [_jsx(Users, { size: 18, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#5a8ca0]" }), _jsxs("select", { value: searchParams.guests, onChange: (e) => setSearchParams({ ...searchParams, guests: parseInt(e.target.value) }), className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] appearance-none bg-white", children: [_jsx("option", { value: 1, children: "1 Guest" }), _jsx("option", { value: 2, children: "2 Guests" }), _jsx("option", { value: 3, children: "3 Guests" }), _jsx("option", { value: 4, children: "4 Guests" })] })] })] })] })] }), _jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl text-gray-900 mb-6", style: { fontFamily: 'Playfair Display, serif' }, children: "Select Your Room" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: rooms.map((room) => (_jsxs("div", { className: `bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all ${room.available
                                            ? 'ring-4 ring-[#5a8ca0] shadow-2xl'
                                            : 'hover:shadow-xl'}`, children: [_jsxs("div", { className: "relative h-48", children: [_jsx(ImageWithFallback, { src: room.image, alt: room.name, className: "w-full h-full object-cover" }), room.available && (_jsx("div", { className: "absolute top-4 right-4 bg-[#5a8ca0] text-white px-4 py-2 rounded-lg", children: "Available" }))] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsx("h3", { className: "text-xl text-gray-900", style: { fontFamily: 'Playfair Display, serif' }, children: room.name }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-[#5a8ca0] text-xl", children: ["$", room.price] }), _jsx("div", { className: "text-xs text-gray-600", children: "per night" })] })] }), _jsx("div", { className: "text-sm text-green-600", children: room.available ? '✓ Available' : 'Not Available' })] })] }, room.id))) })] }), _jsx("div", { className: "text-center", children: _jsxs("button", { type: "submit", disabled: !searchParams.checkIn || !searchParams.checkOut, className: "bg-[#5a8ca0] text-white px-12 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto", children: ["Proceed to Checkout", _jsx(ChevronDown, { size: 20 })] }) })] }) })] }));
}
