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

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 bg-linear-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Rooms</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Choose from our two comfortable accommodations at Tsavo Laiser Place
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-80">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#5a8ca0] text-white px-4 py-2 rounded-lg">
                  ${room.price}/night
                </div>
                <div className="absolute top-4 left-4 bg-white/95 text-gray-800 px-4 py-2 rounded-lg text-sm">
                  {room.type}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-6">{room.description}</p>

                <div className="flex gap-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-[#5a8ca0]" />
                    <span>Up to {room.guests} Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize size={18} className="text-[#5a8ca0]" />
                    <span>{room.size}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-gray-700 mb-3">Room Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/availability"
                  className="block text-center bg-[#5a8ca0] text-white py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors"
                >
                  Book This Room
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Rooms Include Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            In Every Room
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { icon: <Wifi size={24} />, label: 'Free Wi-Fi' },
              { icon: <Tv size={24} />, label: 'Flat-Screen TV' },
              { icon: <Coffee size={24} />, label: 'Refrigerator' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, label: 'Cooker' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>, label: 'Microwave' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3v4a1 1 0 0 0 1 1h4M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/></svg>, label: 'Clean Bedding' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/></svg>, label: 'Premium Toiletries' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, label: 'Heater' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>, label: 'Iron & Board' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/></svg>, label: 'Blackout Curtains' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>, label: 'Work Desk' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>, label: 'Complimentary Water' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#5a8ca0] rounded-xl flex items-center justify-center text-white mb-2">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#2a2a2a] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Book?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Check availability and secure your perfect room today
          </p>
          <Link
            to="/availability"
            className="inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
}