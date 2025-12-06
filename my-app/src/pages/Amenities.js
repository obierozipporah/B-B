import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Wifi, Coffee, Dumbbell, Waves, UtensilsCrossed, Home } from 'lucide-react';
export default function Amenities() {
    const mainAmenities = [
        {
            icon: _jsx(Waves, { size: 40 }),
            title: 'Swimming Pool',
            description: 'Relax and unwind in our beautiful swimming pool with stunning views'
        },
        {
            icon: _jsx(Home, { size: 40 }),
            title: 'Gazebo',
            description: 'Perfect outdoor space for relaxation and entertainment'
        },
        {
            icon: _jsx(UtensilsCrossed, { size: 40 }),
            title: 'Roof-Top Kitchen',
            description: 'Fully-equipped kitchen space with panoramic views'
        },
        {
            icon: _jsx(Wifi, { size: 40 }),
            title: 'High-Speed Wi-Fi',
            description: 'Stay connected with complimentary high-speed internet throughout the property'
        },
        {
            icon: _jsx(Coffee, { size: 40 }),
            title: 'Shared Lounge',
            description: 'Comfortable common areas for guests to relax and socialize'
        },
        {
            icon: _jsx(Dumbbell, { size: 40 }),
            title: 'Fitness Area',
            description: 'Stay active with our fitness facilities'
        }
    ];
    const roomAmenities = [
        'Clean Bedding',
        'Premium Toiletries',
        'Flat-Screen TV',
        'Refrigerator',
        'Cooker',
        'Microwave',
        'Heater',
        'Iron & Board',
        'Blackout Curtains',
        'Work Desk',
        'Complimentary Water',
        'Climate Control'
    ];
    const policies = [
        {
            title: 'Check-In',
            value: '10:00 AM',
            description: 'Early check-in available upon request'
        },
        {
            title: 'Check-Out',
            value: '10:00 AM',
            description: 'Late check-out available upon request'
        },
        {
            title: 'Cancellation',
            value: '48 Hours',
            description: 'Free cancellation up to 48 hours before arrival'
        },
        {
            title: 'Payment',
            value: 'Cash/Mobile',
            description: 'We accept cash and mobile money payments'
        }
    ];
    return (_jsxs("div", { children: [_jsx("section", { className: "py-20 px-4 bg-gradient-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-5xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Amenities" }), _jsx("p", { className: "text-xl text-white/90 max-w-2xl mx-auto leading-relaxed", children: "Everything you need for a comfortable and memorable stay" })] }) }), _jsxs("section", { className: "py-16 px-4 max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl text-gray-900 mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Property Features" }), _jsx("p", { className: "text-gray-600 text-lg", children: "Enjoy our excellent facilities during your stay" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: mainAmenities.map((amenity, index) => (_jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow", children: [_jsx("div", { className: "w-20 h-20 bg-gradient-to-br from-[#5a8ca0] to-[#4a7c8f] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto", children: amenity.icon }), _jsx("h3", { className: "text-xl text-gray-900 mb-3 text-center", style: { fontFamily: 'Playfair Display, serif' }, children: amenity.title }), _jsx("p", { className: "text-gray-600 text-center leading-relaxed", children: amenity.description })] }, index))) })] }), _jsx("section", { className: "py-16 px-4 bg-gray-50", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl text-gray-900 mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "In Every Room" }), _jsx("p", { className: "text-gray-600 text-lg", children: "All rooms come equipped with these standard amenities" })] }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6", children: roomAmenities.map((amenity, index) => (_jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white mb-3 mx-auto", children: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }) }), _jsx("p", { className: "text-sm text-gray-700", children: amenity })] }, index))) })] }) }), _jsxs("section", { className: "py-16 px-4 max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl text-gray-900 mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Guest Policies" }), _jsx("p", { className: "text-gray-600 text-lg", children: "Important information for your stay" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: policies.map((policy, index) => (_jsxs("div", { className: "bg-white p-6 rounded-xl shadow-lg text-center", children: [_jsx("h3", { className: "text-lg text-gray-900 mb-2", style: { fontFamily: 'Playfair Display, serif' }, children: policy.title }), _jsx("div", { className: "text-2xl text-[#5a8ca0] mb-2", children: policy.value }), _jsx("p", { className: "text-sm text-gray-600", children: policy.description })] }, index))) })] }), _jsx("section", { className: "py-16 px-4 bg-[#2a2a2a] text-white", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl mb-6", style: { fontFamily: 'Playfair Display, serif' }, children: "Need Something Special?" }), _jsx("p", { className: "text-lg text-gray-300 mb-8 leading-relaxed", children: "Have special requirements or need additional amenities? Contact us and we'll do our best to accommodate your needs." }), _jsx("a", { href: "tel:+254710393721", className: "inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors", children: "Contact Us" })] }) })] }));
}
