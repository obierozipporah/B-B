import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Lock, Phone, Mail } from 'lucide-react';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state || {};
  
  const [paymentData, setPaymentData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'mpesa',
    mpesaNumber: '',
    address: '',
    specialRequests: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const start = new Date(bookingData.checkIn);
      const end = new Date(bookingData.checkOut);
      const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 1;
    }
    return 1;
  };

  const nights = calculateNights();
  const roomPrice = bookingData.roomDetails?.price || 26.99;
  const subtotal = roomPrice * nights;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Booking request received! We will contact you shortly to confirm your reservation.');
      navigate('/');
    }, 2000);
  };

  if (!bookingData.roomDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            No Booking Selected
          </h2>
          <p className="text-gray-600 mb-6">Please select a room from the availability page first.</p>
          <button
            onClick={() => navigate('/availability')}
            className="bg-[#5a8ca0] text-white px-8 py-3 rounded-lg hover:bg-[#4a7c8f] transition-colors"
          >
            Go to Availability
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="py-20 px-4 bg-linear-to-br from-[#5a8ca0] to-[#4a7c8f] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Complete Your Booking</h1>
          <p className="text-xl text-white/90">
            Just a few more details to secure your reservation
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Guest Information
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={paymentData.fullName}
                    onChange={(e) => setPaymentData({ ...paymentData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={paymentData.email}
                      onChange={(e) => setPaymentData({ ...paymentData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={paymentData.phone}
                      onChange={(e) => setPaymentData({ ...paymentData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={paymentData.address}
                    onChange={(e) => setPaymentData({ ...paymentData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Special Requests</label>
                  <textarea
                    value={paymentData.specialRequests}
                    onChange={(e) => setPaymentData({ ...paymentData, specialRequests: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] resize-none bg-white"
                    placeholder="Any special requirements or requests?"
                  />
                </div>
              </div>

              <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Payment Method
              </h2>

              <div className="space-y-4 mb-8">
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#5a8ca0] transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={paymentData.paymentMethod === 'mpesa'}
                    onChange={(e) => setPaymentData({ ...paymentData, paymentMethod: e.target.value })}
                    className="w-5 h-5 text-[#5a8ca0]"
                  />
                  <span className="ml-3 text-gray-900">M-Pesa</span>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#5a8ca0] transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentData.paymentMethod === 'cash'}
                    onChange={(e) => setPaymentData({ ...paymentData, paymentMethod: e.target.value })}
                    className="w-5 h-5 text-[#5a8ca0]"
                  />
                  <span className="ml-3 text-gray-900">Cash (Pay at Property)</span>
                </label>
              </div>

              {paymentData.paymentMethod === 'mpesa' && (
                <div className="mb-8">
                  <label className="block text-sm text-gray-700 mb-2">M-Pesa Number *</label>
                  <input
                    type="tel"
                    value={paymentData.mpesaNumber}
                    onChange={(e) => setPaymentData({ ...paymentData, mpesaNumber: e.target.value })}
                    placeholder="254XXXXXXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5a8ca0] bg-white"
                    required={paymentData.paymentMethod === 'mpesa'}
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    You will receive an M-Pesa prompt to complete the payment
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 mb-6">
                <Lock size={16} className="text-[#5a8ca0]" />
                <p className="text-sm text-gray-600">Your information is secure and encrypted</p>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#5a8ca0] text-white py-4 rounded-lg hover:bg-[#4a7c8f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isProcessing ? 'Processing...' : 'Confirm Booking'}
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Booking Summary
              </h2>

              <div className="mb-6">
                <img
                  src={bookingData.roomDetails.image}
                  alt={bookingData.roomDetails.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg text-gray-900 mb-1">
                  {bookingData.roomDetails.name}
                </h3>
                {bookingData.roomDetails.type && (
                  <p className="text-sm text-gray-600 mb-2">{bookingData.roomDetails.type}</p>
                )}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Check-in</span>
                  <span className="text-gray-900">
                    {bookingData.checkIn ? new Date(bookingData.checkIn).toLocaleDateString() : 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Check-out</span>
                  <span className="text-gray-900">
                    {bookingData.checkOut ? new Date(bookingData.checkOut).toLocaleDateString() : 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Guests</span>
                  <span className="text-gray-900">{bookingData.guests || 2}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Nights</span>
                  <span className="text-gray-900">{nights}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    ${roomPrice.toFixed(2)} × {nights} {nights === 1 ? 'night' : 'nights'}
                  </span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service charge (10%)</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg mb-6">
                <span className="text-gray-900">Total</span>
                <span className="text-[#5a8ca0]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-3">
                  Need help with your booking?
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+254710393721"
                    className="flex items-center gap-2 text-sm text-[#5a8ca0] hover:text-[#4a7c8f]"
                  >
                    <Phone size={16} />
                    +254 710 393721
                  </a>
                  <a
                    href="mailto:birnelilochi25@gmail.com"
                    className="flex items-center gap-2 text-sm text-[#5a8ca0] hover:text-[#4a7c8f]"
                  >
                    <Mail size={16} />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}