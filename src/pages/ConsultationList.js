import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/consultationList.css';

function ConsultationList() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const savedConsultations = JSON.parse(localStorage.getItem('consultations')) || [];
    setConsultations(savedConsultations);
    setLoading(false);
  }, []);

  const handleCancel = (indexToRemove) => {
    const updatedConsultations = consultations.filter((_, index) => index !== indexToRemove);
    localStorage.setItem('consultations', JSON.stringify(updatedConsultations));
    setConsultations(updatedConsultations);
  };

  const getDoctorById = (doctorId) => {
    return doctors[doctorId] || {
      name: "Our Dentist",
      specialty: "General Dentistry",
      image: "/images/doctor-default.jpg"
    };
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    return hour > 12 ? `${hour - 12}:${minutes} PM` : `${hour}:${minutes} AM`;
  };

  if (loading) {
    return <div className="loading">Loading consultations...</div>;
  }

  return (
    <div className="consultation-list-container">
      <h1>Your Booked Consultations</h1>

      {consultations.length === 0 ? (
        <div className="no-consultations">
          <p>You haven't booked any consultations yet.</p>
          <Link to="/doctors" className="book-now-button">
            Book a Consultation
          </Link>
        </div>
      ) : (
        <div className="consultations-grid">
          {consultations.map((consultation, index) => {
            const doctor = getDoctorById(consultation.doctorId);
            return (
              <div key={index} className="consultation-card">
                <div className="doctor-info">
                  <div className="doctor-image">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/doctor-default.jpg";
                      }}
                    />
                  </div>
                  <div className="doctor-details">
                    <h3>{doctor.name}</h3>
                    <p className="specialty">{doctor.specialty}</p>
                  </div>
                </div>

                <div className="consultation-details">
                  <div className="detail-row">
                    <span className="detail-label">Patient:</span>
                    <span>{consultation.name}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Date:</span>
                    <span>{formatDate(consultation.date)}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Time:</span>
                    <span>{formatTime(consultation.time)}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Contact:</span>
                    <span>{consultation.phone} / {consultation.email}</span>
                  </div>
                  {consultation.message && (
                    <div className="detail-row message">
                      <span className="detail-label">Notes:</span>
                      <span>{consultation.message}</span>
                    </div>
                  )}
                </div>

                <div className="consultation-status">
                  <span className="status-badge pending">Pending Confirmation</span>
                  <button
                    className="cancel-button"
                    onClick={() => handleCancel(index)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ConsultationList;
