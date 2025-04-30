import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/pages/BookTreatment.css';

const BookTreatment = () => {
  const { treatmentId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  // Define all possible treatments with their details
  const treatments = {
    'cleaning': {
      name: "Dental Cleaning",
      price: "₹1,500",
      description: "Professional cleaning to remove plaque and tartar."
    },
    'root-canal': {
      name: "Root Canal",
      price: "₹5,000",
      description: "Treatment to repair and save a badly damaged or infected tooth."
    },
    'whitening': {
      name: "Teeth Whitening",
      price: "₹3,000",
      description: "Procedure to lighten the color of your teeth."
    },
    'implants': {
      name: "Dental Implants",
      price: "₹20,000",
      description: "Surgical component that interfaces with the bone of the jaw."
    },
    'braces': {
      name: "Orthodontic Braces",
      price: "₹35,000",
      description: "Correct teeth alignment and bite issues for a perfect smile."
    },
    'crowns': {
      name: "Dental Crowns",
      price: "₹8,000",
      description: "Custom-made caps that cover damaged teeth to restore shape and function."
    }
  };

  // Get the treatment or use a default if not found
  const treatment = treatments[treatmentId] || {
    name: "Dental Treatment",
    price: "Varies",
    description: "General dental procedure"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { treatment, ...formData });
    alert(`Booking confirmed for ${treatment.name}! We'll contact you shortly.`);
    navigate('/');
  };

  return (
    <div className="booking-container">
      <div className="treatment-summary">
        <h2>Booking: {treatment.name}</h2>
        <p className="price">{treatment.price}</p>
        <p className="description">{treatment.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <h3>Patient Information</h3>
        
        <div className="form-group">
          <label>Full Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Preferred Date*</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className="form-group">
            <label>Preferred Time*</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Additional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            placeholder="Any special requirements or concerns?"
          />
        </div>

        <button type="submit" className="submit-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookTreatment;