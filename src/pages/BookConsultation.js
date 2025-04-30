import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/pages/bookConsultation.css';

function BookConsultation() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const doctors = {
    'sarah-johnson': {
      name: "Dr. Sarah Johnson",
      specialty: "Orthodontics",
      image: "/images/doctor2.jpg"
    },
    'michael-chen': {
      name: "Dr. Michael Chen",
      specialty: "Oral Surgery",
      image: "/images/doctor1.jpg"
    },
    'priya-patel': {
      name: "Dr. Priya Patel",
      specialty: "Pediatric Dentistry",
      image: "/images/doctor4.jpg"
    },
    'robert-williams': {
      name: "Dr. Robert Williams",
      specialty: "Cosmetic Dentistry",
      image: "/images/doctor3.jpg"
    },
    'emma-rodriguez': {
      name: "Dr. Emma Rodriguez",
      specialty: "Periodontics",
      image: "/images/doctor5.jpg"
    },
    'david-kim': {
      name: "Dr. David Kim",
      specialty: "Endodontics",
      image: "/images/doctor6.jpg"
    }
  };

  const doctor = doctors[doctorId] || {
    name: "Our Dentist",
    specialty: "General Dentistry",
    image: "/images/doctor-default.jpg"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create consultation object
    const consultation = {
      id: Date.now().toString(),
      doctorId,
      doctorName: doctor.name,
      doctorSpecialty: doctor.specialty,
      doctorImage: doctor.image,
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const consultations = JSON.parse(localStorage.getItem('consultations')) || [];
    consultations.push(consultation);
    localStorage.setItem('consultations', JSON.stringify(consultations));

    // Show confirmation and redirect
    alert(`Appointment request sent to ${doctor.name}! We'll contact you shortly.`);
    navigate('/consultations');
  };

  // Generate time slots based on doctor's availability
  const generateTimeSlots = () => {
    const slots = [];
    
    if (doctorId === 'david-kim') {
      // Dr. Kim's availability (7:30 AM - 3:30 PM)
      for (let hour = 7; hour <= 15; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:30`;
        slots.push(<option key={time} value={time}>{hour > 12 ? `${hour-12}:30 PM` : `${hour}:30 AM`}</option>);
      }
    } 
    else if (doctorId === 'emma-rodriguez') {
      // Dr. Rodriguez's availability
      const currentDay = new Date().toLocaleString('en-us', {weekday: 'long'}).toLowerCase();
      const isMWF = ['monday', 'wednesday', 'friday'].includes(currentDay);
      
      if (isMWF) {
        // 8:00 AM - 3:00 PM
        for (let hour = 8; hour <= 15; hour++) {
          const time = `${hour.toString().padStart(2, '0')}:00`;
          slots.push(<option key={time} value={time}>{hour > 12 ? `${hour-12}:00 PM` : `${hour}:00 AM`}</option>);
        }
      } else {
        // 10:00 AM - 5:00 PM
        for (let hour = 10; hour <= 17; hour++) {
          const time = `${hour.toString().padStart(2, '0')}:00`;
          slots.push(<option key={time} value={time}>{hour > 12 ? `${hour-12}:00 PM` : `${hour}:00 AM`}</option>);
        }
      }
    } 
    else {
      // Default availability (9:00 AM - 4:00 PM)
      for (let hour = 9; hour <= 16; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:00`;
        slots.push(<option key={time} value={time}>{hour > 12 ? `${hour-12}:00 PM` : `${hour}:00 AM`}</option>);
      }
    }
    
    return slots;
  };

  return (
    <div className="consultation-container">
      <div className="doctor-info-section">
        <h2>Book Consultation with {doctor.name}</h2>
        <p className="specialty">{doctor.specialty}</p>
        
        <div className="doctor-image-container">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "/images/doctor-default.jpg"
            }}
          />
        </div>
        
        <div className="availability">
          <h3>Availability</h3>
          <ul>
            {doctorId === 'emma-rodriguez' ? (
              <>
                <li>Monday, Wednesday, Friday: 8:00 AM - 3:00 PM</li>
                <li>Tuesday, Thursday: 10:00 AM - 5:00 PM</li>
              </>
            ) : doctorId === 'david-kim' ? (
              <li>Monday - Thursday: 7:30 AM - 4:30 PM</li>
            ) : (
              <>
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
              </>
            )}
            <li>Emergency services available</li>
          </ul>
        </div>
        
        <div className="consultation-info">
          <h3>Consultation Includes:</h3>
          <ul>
            <li>Comprehensive oral examination</li>
            <li>Personalized treatment plan</li>
            <li>Cost estimate</li>
            <li>Insurance consultation</li>
            <li>Q&A session with the doctor</li>
            {doctorId === 'emma-rodriguez' && <li>Gum health assessment</li>}
            {doctorId === 'david-kim' && <li>Root canal evaluation</li>}
          </ul>
        </div>
      </div>
      
      <div className="booking-form-section">
        <h3>Appointment Request</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Preferred Date</label>
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
            <label>Preferred Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              {generateTimeSlots()}
            </select>
          </div>
          
          <div className="form-group">
            <label>Additional Information</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder={
                doctorId === 'emma-rodriguez' ? "Any specific gum concerns?" :
                doctorId === 'david-kim' ? "Any tooth pain or sensitivity?" :
                "Any specific dental concerns?"
              }
            />
          </div>
          
          <button type="submit" className="submit-button">
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookConsultation;