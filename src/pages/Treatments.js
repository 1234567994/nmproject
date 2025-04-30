import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/treatments.css';

function Treatments() {
  const navigate = useNavigate();

  const treatments = [
    {
      id: 'cleaning', // Added ID for routing
      name: "Dental Cleaning",
      description: "Professional cleaning to remove plaque and tartar.",
      price: "₹1,500",
      image: "/images/treatment1.jpg"
    },
    {
      id: 'root-canal',
      name: "Root Canal",
      description: "Treatment to repair and save a badly damaged or infected tooth.",
      price: "₹5,000",
      image: "/images/treatment2.jpg"
    },
    {
      id: 'whitening',
      name: "Teeth Whitening",
      description: "Procedure to lighten the color of your teeth.",
      price: "₹3,000",
      image: "/images/treatment3.jpg"
    },
    {
      id: 'implants',
      name: "Dental Implants",
      description: "Surgical component that interfaces with the bone of the jaw.",
      price: "₹20,000",
      image: "/images/treatment4.jpg"
    },
    {
      id: 'braces',
      name: "Orthodontic Braces",
      description: "Correct teeth alignment and bite issues for a perfect smile.",
      price: "₹35,000",
      image: "/images/treatment5.jpg"
    },
    {
      id: 'crowns',
      name: "Dental Crowns",
      description: "Custom-made caps that cover damaged teeth to restore shape and function.",
      price: "₹8,000",
      image: "/images/treatment6.jpg"
    }
  ];

  const handleBookNow = (treatmentId) => {
    navigate(`/book-treatment/${treatmentId}`);
  };

  return (
    <div className="treatments-container">
      <h1>Available Treatments</h1>
      <div className="treatments-grid">
        {treatments.map((treatment) => (
          <div key={treatment.id} className="treatment-card">
            <div className="treatment-image-container">
              <img 
                src={treatment.image} 
                alt={treatment.name} 
                className="treatment-image"
                onError={(e) => {
                  e.target.src = '/images/treatment-default.jpg';
                }}
              />
            </div>
            <div className="treatment-content">
              <h3>{treatment.name}</h3>
              <p>{treatment.description}</p>
              <div className="price">{treatment.price}</div>
              <button 
                className="book-button"
                onClick={() => handleBookNow(treatment.id)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treatments;