import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Address',
      info: ['JP6P+6VP, Laiser Hill Rd', 'Ongata Rongai, Kenya'],
      link: 'https://www.google.com/maps/search/?api=1&query=JP6P+6VP,+Laiser+Hill+Rd,+Ongata+Rongai'
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      info: ['+254 710 393721'],
      link: 'tel:+254710393721'
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      info: ['birneshaven@gmail.com'],
      link: 'mailto:birneshaven@gmail.com'
    },
    {
      icon: <Clock size={28} />,
      title: 'Check-in / Check-out',
      info: ['Check-in: 10:00 AM', 'Check-out: 10:00 AM'],
      link: null
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 bg-linear-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us for bookings, inquiries, or any questions you may have
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#5a8ca0] rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {item.title}
              </h3>
              {item.info.map((line, i) => (
                <p key={i} className="text-sm text-gray-600 mb-1">
                  {line}
                </p>
              ))}
              {item.link && (
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block mt-3 text-[#5a8ca0] hover:text-[#4a7c8f] text-sm transition-colors"
                >
                  {item.title === 'Address' ? 'View Map' : 'Contact →'}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Send Us a Message
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] resize-none bg-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#5a8ca0] text-white py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
              <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Quick Booking
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For instant booking confirmations, call us directly or send a WhatsApp message. We're available 24/7 to assist you.
              </p>
              <a
                href="tel:+254710393721"
                className="block text-center bg-[#5a8ca0] text-white py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors mb-3"
              >
                Call Now: +254 710 393721
              </a>
              <a
                href="https://wa.me/254710393721"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#25D366] text-white py-3 rounded-lg hover:bg-[#20BA5A] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-900 mb-2">What are your check-in/check-out times?</h3>
                  <p className="text-sm text-gray-600">Check-in is at 10:00 AM and check-out is at 10:00 AM.</p>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Do you offer airport transfers?</h3>
                  <p className="text-sm text-gray-600">Yes, we can arrange airport transfers. Please contact us in advance.</p>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Is parking available?</h3>
                  <p className="text-sm text-gray-600">Yes, we offer free parking for our guests.</p>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-gray-600">We accept cash and mobile money payments (M-Pesa).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Find Us Here
            </h2>
            <p className="text-gray-600">
              JP6P+6VP, Laiser Hill Rd, Ongata Rongai
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7088886477945!2d36.73596!3d-1.38861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjMnMTkuMCJTIDM2wrA0NCcwOS41IkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Birnes Haven Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#2a2a2a] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to check availability and reserve your room
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254710393721"
              className="inline-block bg-[#5a8ca0] text-white px-10 py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors"
            >
              Call to Book
            </a>
            <a
              href="/availability"
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}