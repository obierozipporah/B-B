import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star } from 'lucide-react';
export default function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            location: 'Nairobi, Kenya',
            rating: 5,
            date: 'November 2024',
            image: 'https://unsplash.com/photos/CCY5Imr-RiU?utm_source=chatgpt.com',
            text: 'Absolutely wonderful experience! The room was spotlessly clean, and the swimming pool view from A402 was breathtaking. The gazebo area was perfect for evening relaxation. Highly recommend!',
            room: 'A402, Tsavo Laiser Place'
        },
        {
            name: 'David Kimani',
            location: 'Mombasa, Kenya',
            rating: 5,
            date: 'October 2024',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            text: 'The studio apartment exceeded my expectations. The roof-top kitchen was fully equipped and the garden view was so peaceful. Great value for money and excellent service.',
            room: 'A302, Tsavo Sentinel'
        },
        {
            name: 'Jennifer Wanjiru',
            location: 'Kisumu, Kenya',
            rating: 5,
            date: 'November 2024',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            text: 'Perfect for a weekend getaway! The location is convenient, rooms are modern and clean. The bed was so comfortable, and all amenities were top-notch. Will definitely be back!',
            room: 'A402, Tsavo Laiser Place'
        },
        {
            name: 'Michael Omondi',
            location: 'Nakuru, Kenya',
            rating: 5,
            date: 'October 2024',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
            text: 'Great place for remote work! Fast Wi-Fi, comfortable work desk, and very quiet. The host was responsive and helpful. The studio was perfect for my needs.',
            room: 'A302, Tsavo Sentinel'
        },
        {
            name: 'Grace Muthoni',
            location: 'Eldoret, Kenya',
            rating: 5,
            date: 'September 2024',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
            text: 'Lovely stay with my family! The 1-bedroom was spacious and well-maintained. Kids loved the pool area. Clean, comfortable, and the host made us feel very welcome.',
            room: 'A402, Tsavo Laiser Place'
        },
        {
            name: 'Peter Otieno',
            location: 'Nairobi, Kenya',
            rating: 5,
            date: 'September 2024',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
            text: 'Exceptional value! The amenities were better than advertised. Premium toiletries, clean bedding, everything you need. The location is strategic and easy to find.',
            room: 'A302, Tsavo Sentinel'
        }
    ];
    const stats = [
        { value: '4.9', label: 'Average Rating' },
        { value: '200+', label: 'Happy Guests' },
        { value: '95%', label: 'Return Rate' },
        { value: '100%', label: 'Cleanliness Score' }
    ];
    return (_jsxs("div", { children: [_jsx("section", { className: "py-20 px-4 bg-linear-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-5xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Guest Testimonials" }), _jsx("p", { className: "text-xl text-white/90 max-w-2xl mx-auto leading-relaxed", children: "Hear what our guests have to say about their experience at Birnes Haven" })] }) }), _jsx("section", { className: "py-12 px-4 bg-white", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl text-[#5a8ca0] mb-2", style: { fontFamily: 'Playfair Display, serif' }, children: stat.value }), _jsx("div", { className: "text-sm text-gray-600", children: stat.label })] }, index))) }) }) }), _jsx("section", { className: "py-16 px-4 bg-gray-50", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8", children: [_jsx("div", { className: "flex gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { size: 20, className: "fill-[#5a8ca0] text-[#5a8ca0]" }, i))) }), _jsxs("p", { className: "text-gray-700 mb-6 leading-relaxed", children: ["\"", testimonial.text, "\""] }), _jsx("div", { className: "mb-4 pb-4 border-b border-gray-200", children: _jsx("p", { className: "text-sm text-[#5a8ca0]", children: testimonial.room }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-12 h-12 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-900", children: testimonial.name }), _jsx("p", { className: "text-sm text-gray-600", children: testimonial.location }), _jsx("p", { className: "text-xs text-gray-500", children: testimonial.date })] })] })] }, index))) }) }) }), _jsx("section", { className: "py-16 px-4 bg-white", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl text-gray-900 mb-8", style: { fontFamily: 'Playfair Display, serif' }, children: "Verified Reviews" }), _jsx("p", { className: "text-gray-600 mb-8", children: "All reviews are from verified guests who have stayed with us" }), _jsxs("div", { className: "flex flex-wrap justify-center gap-6", children: [_jsxs("div", { className: "bg-gray-50 px-8 py-4 rounded-xl", children: [_jsx("p", { className: "text-2xl text-[#5a8ca0] mb-1", children: "\u2605\u2605\u2605\u2605\u2605" }), _jsx("p", { className: "text-sm text-gray-600", children: "Google Reviews" })] }), _jsxs("div", { className: "bg-gray-50 px-8 py-4 rounded-xl", children: [_jsx("p", { className: "text-2xl text-[#5a8ca0] mb-1", children: "\u2605\u2605\u2605\u2605\u2605" }), _jsx("p", { className: "text-sm text-gray-600", children: "Booking.com" })] }), _jsxs("div", { className: "bg-gray-50 px-8 py-4 rounded-xl", children: [_jsx("p", { className: "text-2xl text-[#5a8ca0] mb-1", children: "\u2605\u2605\u2605\u2605\u2605" }), _jsx("p", { className: "text-sm text-gray-600", children: "Airbnb" })] })] })] }) }), _jsx("section", { className: "py-16 px-4 bg-[#2a2a2a] text-white text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-3xl mb-4", style: { fontFamily: 'Playfair Display, serif' }, children: "Experience It Yourself" }), _jsx("p", { className: "text-lg text-gray-300 mb-8", children: "Join our happy guests and book your stay today" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "tel:+254710393721", className: "inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors", children: "Call to Book" }), _jsx("a", { href: "/availability", className: "inline-block bg-white text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors", children: "Check Availability" })] })] }) })] }));
}
