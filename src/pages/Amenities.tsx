import { Wifi, Coffee, Dumbbell, Waves, UtensilsCrossed, Home } from 'lucide-react';

export default function Amenities() {
  const mainAmenities = [
    {
      icon: <Waves size={40} />,
      title: 'Swimming Pool',
      description: 'Relax and unwind in our beautiful swimming pool with stunning views'
    },
    {
      icon: <Home size={40} />,
      title: 'Gazebo',
      description: 'Perfect outdoor space for relaxation and entertainment'
    },
    {
      icon: <UtensilsCrossed size={40} />,
      title: 'Roof-Top Kitchen',
      description: 'Fully-equipped kitchen space with panoramic views'
    },
    {
      icon: <Wifi size={40} />,
      title: 'High-Speed Wi-Fi',
      description: 'Stay connected with complimentary high-speed internet throughout the property'
    },
    {
      icon: <Coffee size={40} />,
      title: 'Shared Lounge',
      description: 'Comfortable common areas for guests to relax and socialize'
    },
    {
      icon: <Dumbbell size={40} />,
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

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Amenities</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>
      </section>

      {/* Main Amenities Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Property Features
          </h2>
          <p className="text-gray-600 text-lg">
            Enjoy our excellent facilities during your stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainAmenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#5a8ca0] to-[#4a7c8f] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                {amenity.icon}
              </div>
              <h3 className="text-xl text-gray-900 mb-3 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* In Every Room Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              In Every Room
            </h2>
            <p className="text-gray-600 text-lg">
              All rooms come equipped with these standard amenities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {roomAmenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white mb-3 mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Policies */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Guest Policies
          </h2>
          <p className="text-gray-600 text-lg">
            Important information for your stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-lg text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {policy.title}
              </h3>
              <div className="text-2xl text-[#5a8ca0] mb-2">
                {policy.value}
              </div>
              <p className="text-sm text-gray-600">{policy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 bg-[#2a2a2a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Need Something Special?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Have special requirements or need additional amenities? Contact us and we'll do our best to accommodate your needs.
          </p>
          <a
            href="tel:+254710393721"
            className="inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
