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

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 bg-linear-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Book Your Stay</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Select your dates and choose the perfect room for your getaway.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Your Booking Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Check-In Date</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a8ca0]" />
                  <input
                    type="date"
                    value={searchParams.checkIn}
                    onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Check-Out Date</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a8ca0]" />
                  <input
                    type="date"
                    value={searchParams.checkOut}
                    onChange={(e) => setSearchParams({ ...searchParams, checkOut: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Number of Guests</label>
                <div className="relative">
                  <Users size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a8ca0]" />
                  <select
                    value={searchParams.guests}
                    onChange={(e) => setSearchParams({ ...searchParams, guests: parseInt(e.target.value) })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] appearance-none bg-white"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Available Rooms */}
          <div className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Select Your Room
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all ${
                    room.available
                      ? 'ring-4 ring-[#5a8ca0] shadow-2xl'
                      : 'hover:shadow-xl'
                  }`}
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    {room.available && (
                      <div className="absolute top-4 right-4 bg-[#5a8ca0] text-white px-4 py-2 rounded-lg">
                        Available
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {room.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-[#5a8ca0] text-xl">${room.price}</div>
                        <div className="text-xs text-gray-600">per night</div>
                      </div>
                    </div>
                    <div className="text-sm text-green-600">
                      {room.available ? '✓ Available' : 'Not Available'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!searchParams.checkIn || !searchParams.checkOut}
              className="bg-[#5a8ca0] text-white px-12 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              Proceed to Checkout
              <ChevronDown size={20} />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}