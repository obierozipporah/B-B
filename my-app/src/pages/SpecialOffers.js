import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Gift } from 'lucide-react';
export default function SpecialOffers() {
    const offers = [
        {
            icon: _jsx(Calendar, { size: 40 }),
            title: 'Extended Stay Discount',
            discount: '14% OFF',
            description: 'Book 7 or more nights and save 14% on your total stay',
            terms: 'Valid for bookings made at least 3 days in advance',
            validUntil: 'Ongoing offer',
            color: 'from-[#5a8ca0] to-[#4a7c8f]'
        },
        {
            icon: _jsx(Clock, { size: 40 }),
            title: 'Midweek Retreat',
            discount: '14% OFF',
            description: 'Stay Monday through Thursday and enjoy 14% off your booking',
            terms: 'Applicable for stays of 2 nights or more',
            validUntil: 'Available year-round',
            color: 'from-[#4a7c8f] to-[#3a6c7f]'
        },
        {
            icon: _jsx(Users, { size: 40 }),
            title: 'Early Bird Special',
            discount: '10% OFF',
            description: 'Book 30 days in advance and receive 10% off',
            terms: 'Must book at least 30 days before check-in',
            validUntil: 'All dates',
            color: 'from-[#6a9ca0] to-[#5a8ca0]'
        },
        {
            icon: _jsx(Gift, { size: 40 }),
            title: 'Last Minute Deal',
            discount: '12% OFF',
            description: 'Book within 48 hours of check-in and save 12%',
            terms: 'Subject to availability',
            validUntil: 'Limited availability',
            color: 'from-[#5a8ca0] to-[#6a9ca0]'
        },
        {
            icon: _jsx(Calendar, { size: 40 }),
            title: 'Weekend Getaway',
            discount: '8% OFF',
            description: 'Book Friday and Saturday night together for 8% off',
            terms: 'Minimum 2-night stay required',
            validUntil: 'All weekends',
            color: 'from-[#4a7c8f] to-[#5a8ca0]'
        },
        {
            icon: _jsx(Users, { size: 40 }),
            title: 'Returning Guest',
            discount: '15% OFF',
            description: 'Welcome back! Enjoy 15% off on your next booking',
            terms: 'For guests who have stayed with us before',
            validUntil: 'Lifetime benefit',
            color: 'from-[#3a6c7f] to-[#4a7c8f]'
        }
    ];
    return (_jsxs("div", { children: [_jsx("section", { className: "py-20 px-4 bg-linear-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-5xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Special Offers" }), _jsx("p", { className: "text-xl text-white/90 max-w-2xl mx-auto leading-relaxed", children: "Take advantage of our exclusive deals and save on your stay at Birnes Haven" })] }) }), _jsx("section", { className: "py-16 px-4 max-w-7xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: offers.map((offer, index) => (_jsxs("div", { className: "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1", children: [_jsxs("div", { className: `bg-linear-to-br ${offer.color} p-8 text-white text-center`, children: [_jsx("div", { className: "w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4", children: offer.icon }), _jsx("h3", { className: "text-2xl mb-2", style: { fontFamily: 'Playfair Display, serif' }, children: offer.title }), _jsx("div", { className: "text-4xl mb-2", children: offer.discount })] }), _jsxs("div", { className: "p-6", children: [_jsx("p", { className: "text-gray-700 mb-4 leading-relaxed", children: offer.description }), _jsxs("div", { className: "border-t border-gray-200 pt-4 mb-4", children: [_jsxs("p", { className: "text-sm text-gray-600 mb-2", children: [_jsx("span", { className: "text-gray-900", children: "Terms:" }), " ", offer.terms] }), _jsxs("p", { className: "text-sm text-gray-600", children: [_jsx("span", { className: "text-gray-900", children: "Valid:" }), " ", offer.validUntil] })] }), _jsx(Link, { to: "/availability", className: "block text-center bg-[#5a8ca0] text-white py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors", children: "Book Now" })] })] }, index))) }) }), _jsx("section", { className: "py-16 px-4 bg-gray-50", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl text-gray-900 mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "How to Redeem" }), _jsx("p", { className: "text-gray-600 text-lg", children: "Follow these simple steps to claim your discount" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-[#5a8ca0] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4", children: "1" }), _jsx("h3", { className: "text-xl text-gray-900 mb-2", style: { fontFamily: 'Playfair Display, serif' }, children: "Choose Your Offer" }), _jsx("p", { className: "text-gray-600", children: "Select the offer that best suits your travel plans" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-[#5a8ca0] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4", children: "2" }), _jsx("h3", { className: "text-xl text-gray-900 mb-2", style: { fontFamily: 'Playfair Display, serif' }, children: "Book Your Stay" }), _jsx("p", { className: "text-gray-600", children: "Complete your booking through our website or call us directly" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-[#5a8ca0] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4", children: "3" }), _jsx("h3", { className: "text-xl text-gray-900 mb-2", style: { fontFamily: 'Playfair Display, serif' }, children: "Enjoy Your Discount" }), _jsx("p", { className: "text-gray-600", children: "Your discount will be automatically applied to your booking" })] })] })] }) }), _jsx("section", { className: "py-16 px-4 max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-lg", children: [_jsx("h2", { className: "text-2xl text-gray-900 mb-6", style: { fontFamily: 'Playfair Display, serif' }, children: "Terms & Conditions" }), _jsxs("ul", { className: "space-y-3 text-gray-600", children: [_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "text-[#5a8ca0] mt-1", children: "\u2022" }), _jsx("span", { children: "All offers are subject to availability and may be withdrawn at any time" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "text-[#5a8ca0] mt-1", children: "\u2022" }), _jsx("span", { children: "Discounts cannot be combined with other offers unless stated" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "text-[#5a8ca0] mt-1", children: "\u2022" }), _jsx("span", { children: "Blackout dates may apply during peak seasons and holidays" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "text-[#5a8ca0] mt-1", children: "\u2022" }), _jsx("span", { children: "Payment must be made in full at the time of booking" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "text-[#5a8ca0] mt-1", children: "\u2022" }), _jsx("span", { children: "Standard cancellation policies apply to all promotional bookings" })] })] })] }) }), _jsx("section", { className: "py-16 px-4 bg-[#2a2a2a] text-white text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-3xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Questions About Our Offers?" }), _jsx("p", { className: "text-lg text-gray-300 mb-8", children: "Contact us for more information or to book your discounted stay" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "tel:+254710393721", className: "inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors", children: "Call Us: +254 710 393721" }), _jsx(Link, { to: "/availability", className: "inline-block bg-white text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors", children: "Book Now" })] })] }) })] }));
}
