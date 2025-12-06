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
      icon: <Navigation size={24} />,
      title: 'From Nairobi CBD',
      description: '20-30 minutes by car via Langata Road',
      link: 'https://www.google.com/maps/dir/Nairobi+CBD,+Nairobi/JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
    },
    {
      icon: <Navigation size={24} />,
      title: 'From JKIA Airport',
      description: '40-50 minutes by car via Southern Bypass',
      link: 'https://www.google.com/maps/dir/Jomo+Kenyatta+International+Airport,+Nairobi/JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
    },
    {
      icon: <Navigation size={24} />,
      title: 'Public Transport',
      description: 'Matatus available from Nairobi to Ongata Rongai',
      link: 'https://www.google.com/maps/dir//JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
    },
    {
      icon: <Navigation size={24} />,
      title: 'Taxi Services',
      description: 'Uber and Bolt readily available in the area',
      link: 'https://www.google.com/maps/search/?api=1&query=JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
    }
  ];

  return (
    <div className="location-page">
      {/* PAGE HEADER */}
      <section className="page-header py-20 px-4 bg-linear-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center">
        <div className="header-container max-w-4xl mx-auto">
          <h1 className="page-title text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Location</h1>
          <p className="page-subtitle text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Conveniently located in Ongata Rongai, near Nairobi's best attractions
          </p>
        </div>
      </section>

      {/* CONTACT AND MAP SECTION */}
      <section className="contact-map-section py-16 px-4 max-w-6xl mx-auto">
        <div className="contact-map-grid grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Card */}
          <div className="contact-info-card bg-white rounded-2xl shadow-lg p-8">
            <h2 className="card-title text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Information
            </h2>
            
            <div className="contact-details-list space-y-6">
              {/* Address */}
              <div className="contact-item flex items-start gap-4">
                <div className="contact-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-label text-gray-900 mb-1">Address</h3>
                  <p className="contact-value text-gray-600">
                    JP6P+6VP, Laiser Hill Rd<br />
                    Ongata Rongai, Kenya
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item flex items-start gap-4">
                <div className="contact-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-label text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+254710393721" className="contact-link text-[#5a8ca0] hover:underline">
                    +254 710 393721
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item flex items-start gap-4">
                <div className="contact-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-label text-gray-900 mb-1">Email</h3>
                  <a href="mailto:birneshaven@gmail.com" className="contact-link text-[#5a8ca0] hover:underline">
                    birneshaven@gmail.com
                  </a>
                </div>
              </div>

              {/* Check-in/Check-out Times */}
              <div className="contact-item flex items-start gap-4">
                <div className="contact-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white shrink-0">
                  <Clock size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-label text-gray-900 mb-1">Check-in / Check-out</h3>
                  <p className="contact-value text-gray-600">
                    Check-in: 10:00 AM<br />
                    Check-out: 10:00 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="map-button-container mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button block text-center bg-[#5a8ca0] text-white py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Map Container */}
          <div className="map-container bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7088886477945!2d36.73596!3d-1.38861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjMnMTkuMCJTIDM2wrA0NCcwOS41IkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Birnes Haven Location"
              className="google-map-embed"
            />
          </div>
        </div>
      </section>

      {/* TRANSPORTATION SECTION */}
      <section className="transportation-section py-16 px-4 bg-gray-50">
        <div className="transportation-container max-w-6xl mx-auto">
          <div className="section-header text-center mb-12">
            <h2 className="section-title text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              How to Get Here
            </h2>
            <p className="section-description text-gray-600 text-lg">
              Easy access from anywhere in Nairobi
            </p>
          </div>

          <div className="transport-options-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transport-option-card bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="transport-icon w-12 h-12 bg-[#5a8ca0] rounded-lg flex items-center justify-center text-white shrink-0">
                  {option.icon}
                </div>
                <div className="transport-info flex-1">
                  <h3 className="transport-title text-lg text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {option.title}
                  </h3>
                  <p className="transport-description text-gray-600 text-sm mb-2">{option.description}</p>
                  <p className="get-directions-text text-[#5a8ca0] text-sm hover:underline">Get Directions →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ATTRACTIONS SECTION */}
      <section className="attractions-section py-16 px-4 max-w-6xl mx-auto">
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nearby Attractions
          </h2>
          <p className="section-description text-gray-600 text-lg">
            Explore the best of what Nairobi has to offer
          </p>
        </div>

        <div className="attractions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyAttractions.map((attraction, index) => (
            <div
              key={index}
              className="attraction-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="attraction-header flex items-start justify-between mb-3">
                <h3 className="attraction-name text-lg text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {attraction.name}
                </h3>
                <span className="distance-badge bg-[#5a8ca0] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  {attraction.distance}
                </span>
              </div>
              <p className="attraction-description text-sm text-gray-600">{attraction.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section py-16 px-4 bg-[#2a2a2a] text-white text-center">
        <div className="cta-container max-w-4xl mx-auto">
          <h2 className="cta-title text-3xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Need Directions?
          </h2>
          <p className="cta-description text-lg text-gray-300 mb-8">
            Call us for detailed directions or any location-related queries
          </p>
          <a
            href="tel:+254710393721"
            className="cta-button inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors"
          >
            Call Us: +254 710 393721
          </a>
        </div>
      </section>
    </div>
  );
}