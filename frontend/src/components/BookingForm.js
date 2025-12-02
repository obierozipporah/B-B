import React, { useState } from 'react';
import { createBooking } from '../api';

export default function BookingForm({ roomId, price }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setStatus('loading');
    const payload = {
      roomId,
      checkIn,
      checkOut,
      guests,
      contact: { name, email, note }
    };
    try {
      const res = await createBooking(payload);
      if (res.error) {
        setStatus(res.error);
      } else {
        setStatus('Booking confirmed! ID: ' + (res.booking && res.booking.id));
        // reset form
        setCheckIn(''); setCheckOut(''); setGuests(1);
      }
    } catch (err) {
      setStatus('Failed to create booking');
    }
  }

  return (
    <form onSubmit={submit}>
      <label>Check-in<input required value={checkIn} onChange={e=>setCheckIn(e.target.value)} type="date"/></label>
      <label>Check-out<input required value={checkOut} onChange={e=>setCheckOut(e.target.value)} type="date"/></label>
      <label>Guests<input required value={guests} min={1} max={6} onChange={e=>setGuests(e.target.value)} type="number"/></label>
      <hr />
      <label>Your name<input required value={name} onChange={e=>setName(e.target.value)} /></label>
      <label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} /></label>
      <label>Note<textarea value={note} onChange={e=>setNote(e.target.value)} /></label>
      <div style={{marginTop:10}}>
        <button type="submit">Book Now</button>
      </div>
      {status && <div style={{marginTop:10}} className="meta">{status}</div>}
    </form>
  );
}
