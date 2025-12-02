import { Link } from 'react-router-dom';
import { MapPin, Bed, Wifi, Coffee, Users, Gift } from 'lucide-react';
import heroImage from 'figma:asset/6150b8c38d00896dcb98dff3e82034d2da604f6e.png';
import room1Image from 'figma:asset/93e1905b8c55257915eb92d67fe9a7c7302b2093.png';
import room2Image from 'figma:asset/b04129b425901b81d5daae441051b63c1541b715.png';

export default function Home() {
  const features = [
    {
      icon: <MapPin size={28} />,
      title: 'Strategic location',
      description: 'Conveniently located near attractions'
    },
    {
      icon: <Bed size={28} />,
      title: 'Clean, fully furnished rooms',
      description: 'Modern amenities for your comfort'
    },
    {
      icon: <Wifi size={28} />,
      title: 'Free Wi-Fi for work or streaming',
      description: 'High-speed internet throughout'
    },
    {
      icon: <Users size={28} />,
      title: 'Ideal for solo travelers, couples',
      description: 'and families looking for comfort'
    }
  ];

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section relative h-screen overflow-hidden">
        {/* Hero Background Image Container */}
        <div 
          className="hero-background absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        
        {/* Hero Diagonal Overlay */}
        <div 
          className="hero-overlay absolute inset-0 bg-gradient-to-br from-[#4a7c8f] via-[#5a8ca0] to-[#4a7c8f]"
          style={{
            clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)'
          }}
        />

        {/* Hero Close Button */}
        <button className="hero-close-button absolute top-6 right-6 w-14 h-14 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Content Container */}
        <div className="hero-content relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-xl">
              {/* Hero Heading */}
              <h1 
                className="hero-heading text-white text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight"
                style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Your Home<br />Away from<br />Home
              </h1>
              
              {/* Hero Speech Bubble */}
              <div className="hero-speech-bubble bg-white rounded-3xl px-8 py-6 inline-block shadow-lg mb-8 relative">
                <div 
                  className="speech-bubble-tail absolute left-8 top-0 w-8 h-8 bg-white"
                  style={{
                    transform: 'translateY(-50%) rotate(45deg)',
                    borderRadius: '0 0 0 4px'
                  }}
                />
                <p className="text-xl text-gray-800 leading-relaxed">
                  Looking for a <span className="font-medium">peaceful, clean,<br />and cozy</span> place to stay?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section bg-[#2a2a2a] text-white py-16 px-6">
        <div className="features-container max-w-7xl mx-auto">
          <div className="features-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features Left Column */}
            <div className="features-intro">
              <p className="intro-text text-lg text-gray-300 leading-relaxed mb-8">
                Whether you're traveling for business, leisure, or a family visit — Birnes Haven is ready to welcome you!
              </p>
              
              <div className="special-offer-badge inline-block bg-[#5a8ca0] text-white px-6 py-3 rounded-full mb-6">
                <p className="text-sm">Extended Stay: Save 14% on bookings 7+ nights</p>
              </div>
              
              <p className="offer-description text-gray-400 text-sm mb-8">
                Special rates for extended stays & group bookings
              </p>

              <div className="contact-info mb-6">
                <p className="text-xl mb-4">Book now via WhatsApp!</p>
                <a 
                  href="tel:+254710393721"
                  className="phone-button inline-block bg-[#5a8ca0] hover:bg-[#4a7c8f] text-white px-8 py-3 rounded-lg transition-colors"
                >
                  +254 710 393721
                </a>
              </div>

              <div className="cta-group flex gap-6 items-center">
                <Link 
                  to="/availability"
                  className="book-button bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Book Your Stay
                </Link>
                <p className="social-handle text-gray-400">@birneshaven</p>
              </div>
            </div>

            {/* Features Right Column */}
            <div className="features-list space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-item flex items-start gap-4">
                  <div className="feature-icon flex-shrink-0 text-[#5a8ca0]">
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title text-lg mb-1">{feature.title}</h3>
                    <p className="feature-description text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section className="rooms-section py-20 px-6 bg-white">
        <div className="rooms-container max-w-7xl mx-auto">
          <div className="rooms-header text-center mb-12">
            <h2 className="section-title text-4xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Comfortable Rooms
            </h2>
            <p className="section-description text-gray-600 text-lg max-w-2xl mx-auto">
              Experience luxury and comfort in our thoughtfully designed spaces
            </p>
          </div>

          <div className="rooms-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              { name: 'A402, Tsavo Laiser Place', price: '$26.99', image: room1Image },
              { name: 'A302, Tsavo Sentinel', price: '$19.28', image: room2Image }
            ].map((room, index) => (
              <div key={index} className="room-card group cursor-pointer">
                <div className="room-image-container relative h-64 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="room-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="room-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="room-info absolute bottom-4 left-4 right-4">
                    <h3 className="room-name text-white text-xl mb-1">{room.name}</h3>
                    <p className="room-price text-white/90">{room.price}/night</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rooms-cta text-center">
            <Link
              to="/rooms"
              className="view-rooms-button inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER BANNER */}
      <section className="offer-banner-section bg-gradient-to-r from-[#4a7c8f] to-[#5a8ca0] py-16 px-6 text-white">
        <div className="offer-banner-container max-w-4xl mx-auto text-center">
          <div className="offer-header flex items-center justify-center gap-3 mb-4">
            <Gift size={40} className="offer-icon" />
            <h2 className="offer-title text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Limited Time Offer
            </h2>
          </div>
          <p className="offer-subtitle text-xl mb-8 opacity-95">
            Save 14% on extended stays and midweek bookings!
          </p>
          <Link
            to="/special-offers"
            className="view-offers-button inline-block bg-white text-[#4a7c8f] px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View All Offers
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section py-20 px-6 bg-gray-50">
        <div className="testimonials-container max-w-7xl mx-auto">
          <div className="testimonials-header text-center mb-12">
            <h2 className="section-title text-4xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Guests Say
            </h2>
            <p className="section-description text-gray-600 text-lg">
              Real experiences from real guests
            </p>
          </div>

          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Amazing stay! The room was spotless and the staff went above and beyond.' },
              { name: 'David T.', text: 'Perfect location and great amenities. Will definitely come back!' },
              { name: 'Jennifer R.', text: 'Felt like home. Comfortable, clean, and beautifully designed.' }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white p-6 rounded-xl shadow-md">
                <div className="rating-stars flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="star-icon w-5 h-5 text-[#5a8ca0]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text text-gray-700 mb-4">{testimonial.text}</p>
                <p className="testimonial-author text-sm text-gray-500">- {testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="testimonials-cta text-center mt-10">
            <Link
              to="/testimonials"
              className="read-more-link text-[#5a8ca0] hover:text-[#4a7c8f] transition-colors"
            >
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}