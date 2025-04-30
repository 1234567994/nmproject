import React from 'react';
import '../styles/pages/facilities.css';

function Facilities() {
  const facilities = [
    {
      name: "Digital X-Ray",
      description: "State-of-the-art digital imaging for accurate diagnosis",
      icon: "fa-x-ray",
      image: "/images/facility-xray.jpg"  // Added image path
    },
    {
      name: "Sterilization Unit",
      description: "Advanced sterilization protocols for your safety",
      icon: "fa-biohazard",
      image: "/images/facility-sterilization.jpg"
    },
    {
      name: "Comfort Lounge",
      description: "Relaxing waiting area with amenities",
      icon: "fa-couch",
      image: "/images/facility-lounge.jpg"
    },
    {
      name: "Kids Zone",
      description: "Special area for our young patients",
      icon: "fa-child",
      image: "/images/facility-kids.jpg"
    },
    {
      name: "Emergency Care",
      description: "24/7 emergency dental services",
      icon: "fa-ambulance",
      image: "/images/facility-emergency.jpg"
    },
    {
      name: "Parking",
      description: "Ample parking space available",
      icon: "fa-parking",
      image: "/images/facility-parking.jpg"
    }
  ];

  return (
    <div className="facilities-container">
      <h1>Our Facilities</h1>
      <p className="subtitle">We invest in the best technology and amenities for your comfort</p>
      
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="facility-image-container">
              <img 
                src={facility.image} 
                alt={facility.name}
                className="facility-image"
              />
              <div className="facility-icon-overlay">
                <i className={`fas ${facility.icon}`}></i>
              </div>
            </div>
            <div className="facility-content">
              <h3>{facility.name}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="virtual-tour">
        <h2>Take a Virtual Tour</h2>
        <button className="tour-button">Start Tour</button>
      </div>
    </div>
  );
}

export default Facilities;