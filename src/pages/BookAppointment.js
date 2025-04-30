import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/bookAppointment.css';

function BookAppointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const services = [
    'General Checkup',
    'Teeth Cleaning',
    'Root Canal',
    'Dental Implants',
    'Teeth Whitening',
    'Orthodontics',
    'Pediatric Dentistry',
    'Emergency Care'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Appointment booked:', formData);
    alert('Appointment request received! We will contact you shortly to confirm.');
    navigate('/');
  };

  return (
    <div className="book-appointment-container">
      <div className="appointment-header">
        <h1>Book Your Dental Appointment</h1>
        <p>Schedule your visit with our expert dental team</p>
      </div>

      <div className="appointment-content">
        <div className="appointment-info">
          <h2>Why Choose Us?</h2>
          <ul className="benefits-list">
            <li>✅ Experienced dental professionals</li>
            <li>✅ State-of-the-art facilities</li>
            <li>✅ Personalized treatment plans</li>
            <li>✅ Emergency appointments available</li>
            <li>✅ Comfortable and relaxing environment</li>
          </ul>

          <div className="contact-info">
            <h3>Prefer to call?</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: appointments@dentalcarepro.com</p>
            <p>Hours: Mon-Fri 8:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="appointment-form">
          <form onSubmit={handleSubmit}>
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
                  required
                  min={new Date().toISOString().split('T')[0]}
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
                  <option value="">Select Time</option>
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Service Required*</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any special requests or concerns"
              />
            </div>

            <button type="submit" className="submit-btn">
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;