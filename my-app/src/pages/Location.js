import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react';
export default function Location() {
    const nearbyAttractions = [
        {
            name: 'Nairobi National Park',
            distance: '15 km',
            description: 'Wildlife sanctuary with lions, giraffes, and rhinos'
        },
        {
            name: 'Giraffe Centre',
            distance: '12 km',
            description: 'Interact with endangered Rothschild giraffes'
        },
        {
            name: 'Karen Blixen Museum',
            distance: '10 km',
            description: 'Historic museum and beautiful gardens'
        },
        {
            name: 'Bomas of Kenya',
            distance: '8 km',
            description: 'Cultural center showcasing Kenyan heritage'
        },
        {
            name: 'The Hub Karen',
            distance: '9 km',
            description: 'Shopping mall and entertainment center'
        },
        {
            name: 'Ongata Rongai Town',
            distance: '2 km',
            description: 'Local shopping and dining options'
        }
    ];
    const transportOptions = [
        {
            icon: _jsx(Navigation, { size: 24 }),
            title: 'From Nairobi CBD',
            description: '20-30 minutes by car via Langata Road',
            link: 'https://www.google.com/maps/dir/Nairobi+CBD,+Nairobi/JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
        },
        {
            icon: _jsx(Navigation, { size: 24 }),
            title: 'From JKIA Airport',
            description: '40-50 minutes by car via Southern Bypass',
            link: 'https://www.google.com/maps/dir/Jomo+Kenyatta+International+Airport,+Nairobi/JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
        },
        {
            icon: _jsx(Navigation, { size: 24 }),
            title: 'Public Transport',
            description: 'Matatus available from Nairobi to Ongata Rongai',
            link: 'https://www.google.com/maps/dir//JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
        },
        {
            icon: _jsx(Navigation, { size: 24 }),
            title: 'Taxi Services',
            description: 'Uber and Bolt readily available in the area',
            link: 'https://www.google.com/maps/search/?api=1&query=JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
        }
    ];
    return (_jsxs("div", { className: "location-page", children: [_jsx("section", { className: "page-header py-20 px-4 bg-gradient-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center", children: _jsxs("div", { className: "header-container max-w-4xl mx-auto", children: [_jsx("h1", { className: "page-title text-5xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Location" }), _jsx("p", { className: "page-subtitle text-xl text-white/90 max-w-2xl mx-auto leading-relaxed", children: "Conveniently located in Ongata Rongai, near Nairobi's best attractions" })] }) }), _jsx("section", { className: "contact-map-section py-16 px-4 max-w-6xl mx-auto", children: _jsxs("div", { className: "contact-map-grid grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12", children: [_jsxs("div", { className: "contact-info-card bg-white rounded-2xl shadow-lg p-8", children: [_jsx("h2", { className: "card-title text-2xl text-gray-900 mb-6", style: { fontFamily: 'Playfair Display, serif' }, children: "Contact Information" }), _jsxs("div", { className: "contact-details-list space-y-6", children: [_jsxs("div", { className: "contact-item flex items-start gap-4", children: [_jsx("div", { className: "contact-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white flex-shrink-0", children: _jsx(MapPin, { size: 24 }) }), _jsxs("div", { className: "contact-content", children: [_jsx("h3", { className: "contact-label text-gray-900 mb-1", children: "Address" }), _jsxs("p", { className: "contact-value text-gray-600", children: ["JP6P+6VP, Laiser Hill Rd", _jsx("br", {}), "Ongata Rongai, Kenya"] })] })] }), _jsxs("div", { className: "contact-item flex items-start gap-4", children: [_jsx("div", { className: "contact-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white flex-shrink-0", children: _jsx(Phone, { size: 24 }) }), _jsxs("div", { className: "contact-content", children: [_jsx("h3", { className: "contact-label text-gray-900 mb-1", children: "Phone" }), _jsx("a", { href: "tel:+254710393721", className: "contact-link text-[#5a8ca0] hover:underline", children: "+254 710 393721" })] })] }), _jsxs("div", { className: "contact-item flex items-start gap-4", children: [_jsx("div", { className: "contact-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white flex-shrink-0", children: _jsx(Mail, { size: 24 }) }), _jsxs("div", { className: "contact-content", children: [_jsx("h3", { className: "contact-label text-gray-900 mb-1", children: "Email" }), _jsx("a", { href: "mailto:birnelilochi25@gmail.com", className: "contact-link text-[#5a8ca0] hover:underline", children: "birnelilochi25@gmail.com" })] })] }), _jsxs("div", { className: "contact-item flex items-start gap-4", children: [_jsx("div", { className: "contact-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white flex-shrink-0", children: _jsx(Clock, { size: 24 }) }), _jsxs("div", { className: "contact-content", children: [_jsx("h3", { className: "contact-label text-gray-900 mb-1", children: "Check-in / Check-out" }), _jsxs("p", { className: "contact-value text-gray-600", children: ["Check-in: 10:00 AM", _jsx("br", {}), "Check-out: 10:00 AM"] })] })] })] }), _jsx("div", { className: "map-button-container mt-8", children: _jsx("a", { href: "https://www.google.com/maps/search/?api=1&query=JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai", target: "_blank", rel: "noopener noreferrer", className: "map-button block text-center bg-[#5a8ca0] text-white py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors", children: "Open in Google Maps" }) })] }), _jsx("div", { className: "map-container bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]", children: _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7088886477945!2d36.73596!3d-1.38861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjMnMTkuMCJTIDM2wrA0NCcwOS41IkU!5e0!3m2!1sen!2ske!4v1234567890", width: "100%", height: "100%", style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Birnes Haven Location", className: "google-map-embed" }) })] }) }), _jsx("section", { className: "transportation-section py-16 px-4 bg-gray-50", children: _jsxs("div", { className: "transportation-container max-w-6xl mx-auto", children: [_jsxs("div", { className: "section-header text-center mb-12", children: [_jsx("h2", { className: "section-title text-3xl text-gray-900 mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "How to Get Here" }), _jsx("p", { className: "section-description text-gray-600 text-lg", children: "Easy access from anywhere in Nairobi" })] }), _jsx("div", { className: "transport-options-grid grid grid-cols-1 md:grid-cols-2 gap-6", children: transportOptions.map((option, index) => (_jsxs("a", { href: option.link, target: "_blank", rel: "noopener noreferrer", className: "transport-option-card bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow cursor-pointer", children: [_jsx("div", { className: "transport-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white flex-shrink-0", children: option.icon }), _jsxs("div", { className: "transport-info flex-1", children: [_jsx("h3", { className: "transport-title text-lg text-gray-900 mb-1", style: { fontFamily: 'Playfair Display, serif' }, children: option.title }), _jsx("p", { className: "transport-description text-gray-600 text-sm mb-2", children: option.description }), _jsx("p", { className: "get-directions-text text-[#5a8ca0] text-sm hover:underline", children: "Get Directions \u2192" })] })] }, index))) })] }) }), _jsxs("section", { className: "attractions-section py-16 px-4 max-w-6xl mx-auto", children: [_jsxs("div", { className: "section-header text-center mb-12", children: [_jsx("h2", { className: "section-title text-3xl text-gray-900 mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Nearby Attractions" }), _jsx("p", { className: "section-description text-gray-600 text-lg", children: "Explore the best of what Nairobi has to offer" })] }), _jsx("div", { className: "attractions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: nearbyAttractions.map((attraction, index) => (_jsxs("div", { className: "attraction-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [_jsxs("div", { className: "attraction-header flex items-start justify-between mb-3", children: [_jsx("h3", { className: "attraction-name text-lg text-gray-900", style: { fontFamily: 'Playfair Display, serif' }, children: attraction.name }), _jsx("span", { className: "distance-badge bg-[#5a8ca0] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap", children: attraction.distance })] }), _jsx("p", { className: "attraction-description text-sm text-gray-600", children: attraction.description })] }, index))) })] }), _jsx("section", { className: "cta-section py-16 px-4 bg-[#2a2a2a] text-white text-center", children: _jsxs("div", { className: "cta-container max-w-4xl mx-auto", children: [_jsx("h2", { className: "cta-title text-3xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Need Directions?" }), _jsx("p", { className: "cta-description text-lg text-gray-300 mb-8", children: "Call us for detailed directions or any location-related queries" }), _jsx("a", { href: "tel:+254710393721", className: "cta-button inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors", children: "Call Us: +254 710 393721" })] }) })] }));
}
