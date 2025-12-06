import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Gift } from 'lucide-react';

export default function SpecialOffers() {
  const offers = [
    {
      icon: <Calendar size={40} />,
      title: 'Extended Stay Discount',
      discount: '14% OFF',
      description: 'Book 7 or more nights and save 14% on your total stay',
      terms: 'Valid for bookings made at least 3 days in advance',
      validUntil: 'Ongoing offer',
      color: 'from-[#5a8ca0] to-[#4a7c8f]'
    },
    {
      icon: <Clock size={40} />,
      title: 'Midweek Retreat',
      discount: '14% OFF',
      description: 'Stay Monday through Thursday and enjoy 14% off your booking',
      terms: 'Applicable for stays of 2 nights or more',
      validUntil: 'Available year-round',
      color: 'from-[#4a7c8f] to-[#3a6c7f]'
    },
    {
      icon: <Users size={40} />,
      title: 'Early Bird Special',
      discount: '10% OFF',
      description: 'Book 30 days in advance and receive 10% off',
      terms: 'Must book at least 30 days before check-in',
      validUntil: 'All dates',
      color: 'from-[#6a9ca0] to-[#5a8ca0]'
    },
    {
      icon: <Gift size={40} />,
      title: 'Last Minute Deal',
      discount: '12% OFF',
      description: 'Book within 48 hours of check-in and save 12%',
      terms: 'Subject to availability',
      validUntil: 'Limited availability',
      color: 'from-[#5a8ca0] to-[#6a9ca0]'
    },
    {
      icon: <Calendar size={40} />,
      title: 'Weekend Getaway',
      discount: '8% OFF',
      description: 'Book Friday and Saturday night together for 8% off',
      terms: 'Minimum 2-night stay required',
      validUntil: 'All weekends',
      color: 'from-[#4a7c8f] to-[#5a8ca0]'
    },
    {
      icon: <Users size={40} />,
      title: 'Returning Guest',
      discount: '15% OFF',
      description: 'Welcome back! Enjoy 15% off on your next booking',
      terms: 'For guests who have stayed with us before',
      validUntil: 'Lifetime benefit',
      color: 'from-[#3a6c7f] to-[#4a7c8f]'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 bg-linear-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Special Offers</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Take advantage of our exclusive deals and save on your stay at Birnes Haven
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              {/* Gradient Header */}
              <div className={`bg-linear-to-br ${offer.color} p-8 text-white text-center`}>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {offer.icon}
                </div>
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {offer.title}
                </h3>
                <div className="text-4xl mb-2">
                  {offer.discount}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="text-gray-900">Terms:</span> {offer.terms}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-900">Valid:</span> {offer.validUntil}
                  </p>
                </div>

                <Link
                  to="/availability"
                  className="block text-center bg-[#5a8ca0] text-white py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Redeem */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              How to Redeem
            </h2>
            <p className="text-gray-600 text-lg">
              Follow these simple steps to claim your discount
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5a8ca0] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Choose Your Offer
              </h3>
              <p className="text-gray-600">
                Select the offer that best suits your travel plans
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5a8ca0] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Book Your Stay
              </h3>
              <p className="text-gray-600">
                Complete your booking through our website or call us directly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5a8ca0] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Enjoy Your Discount
              </h3>
              <p className="text-gray-600">
                Your discount will be automatically applied to your booking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Terms & Conditions
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#5a8ca0] mt-1">•</span>
              <span>All offers are subject to availability and may be withdrawn at any time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5a8ca0] mt-1">•</span>
              <span>Discounts cannot be combined with other offers unless stated</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5a8ca0] mt-1">•</span>
              <span>Blackout dates may apply during peak seasons and holidays</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5a8ca0] mt-1">•</span>
              <span>Payment must be made in full at the time of booking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5a8ca0] mt-1">•</span>
              <span>Standard cancellation policies apply to all promotional bookings</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#2a2a2a] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Questions About Our Offers?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us for more information or to book your discounted stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254710393721"
              className="inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors"
            >
              Call Us: +254 710 393721
            </a>
            <Link
              to="/availability"
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
