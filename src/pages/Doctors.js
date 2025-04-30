import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/doctors.css';

function Doctors() {
  const navigate = useNavigate();
  
  const doctors = [
    {
      id: 'sarah-johnson',
      name: "Dr. Sarah Johnson",
      specialty: "Orthodontics",
      experience: "12 years",
      image: "/images/doctor2.jpg",
      bio: "Specialized in braces and aligners for all ages. Harvard-trained with a gentle approach to orthodontic care.",
      availability: "Mon-Fri: 9am-5pm, Sat: 9am-2pm"
    },
    {
      id: 'michael-chen',
      name: "Dr. Michael Chen",
      specialty: "Oral Surgery",
      experience: "15 years",
      image: "/images/doctor1.jpg",
      bio: "Expert in wisdom teeth extraction and implants. Board-certified oral surgeon with extensive reconstructive experience.",
      availability: "Mon-Thu: 8am-4pm, Fri: 8am-1pm"
    },
    {
      id: 'priya-patel',
      name: "Dr. Priya Patel",
      specialty: "Pediatric Dentistry",
      experience: "8 years",
      image: "/images/doctor4.jpg",
      bio: "Makes dental visits fun for kids. Specializes in anxiety-free pediatric dental care.",
      availability: "Tue-Sat: 9am-4pm"
    },
    {
      id: 'robert-williams',
      name: "Dr. Robert Williams",
      specialty: "Cosmetic Dentistry",
      experience: "10 years",
      image: "/images/doctor3.jpg",
      bio: "Creating beautiful, confident smiles. Master of veneers and smile makeovers.",
      availability: "Mon-Wed: 10am-6pm, Thu-Fri: 8am-3pm"
    },
    // New Doctors Added Below
    {
      id: 'emma-rodriguez',
      name: "Dr. Emma Rodriguez",
      specialty: "Periodontics",
      experience: "9 years",
      image: "/images/doctor5.jpg", // Make sure to add this image
      bio: "Gum health specialist providing advanced periodontal treatments and dental implants.",
      availability: "Mon, Wed, Fri: 8am-3pm, Tue, Thu: 10am-5pm"
    },
    {
      id: 'david-kim',
      name: "Dr. David Kim",
      specialty: "Endodontics",
      experience: "11 years",
      image: "/images/doctor6.jpg", // Make sure to add this image
      bio: "Root canal specialist using the latest microscopic endodontic techniques for painless treatment.",
      availability: "Mon-Thu: 7:30am-4:30pm"
    }
  ];

  const handleBookClick = (doctorId) => {
    navigate(`/book-consultation/${doctorId}`);
  };

  return (
    <div className="doctors-container">
      <div className="doctors-header">
        <h1>Meet Our Doctors</h1>
        <p className="subtitle">Highly qualified and compassionate dental professionals</p>
      </div>
      
      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-image-container">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="doctor-image"
                width="300"
                height="300"
                loading="lazy"
              />
              <div className="availability-badge">
                {doctor.availability}
              </div>
            </div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p className="specialty">{doctor.specialty}</p>
              <p className="experience">{doctor.experience} experience</p>
              <p className="bio">{doctor.bio}</p>
              <button 
                className="book-button"
                onClick={() => handleBookClick(doctor.id)}
              >
                Book Consultation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;