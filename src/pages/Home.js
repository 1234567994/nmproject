import React from 'react';
import FloatingBox from '../components/FloatingBox';
import '../styles/pages/home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>
  <div>Welcome to</div>
  <div>DentalCare Pro</div>
</h1>

        <p>Providing world-class dental services to ensure your oral health is at its best.</p>
      </div>
      
      <FloatingBox title="Our Mission">
        <p>Our mission is to deliver exceptional dental care and improve oral health outcomes for our community.</p>
      </FloatingBox>
      
      <FloatingBox title="Our Vision">
        <p>To be the leading dental care provider known for innovative treatment and compassionate care.</p>
      </FloatingBox>
      
      <div className="cta-section">
        <h2>Ready for a healthier smile?</h2>
        <button className="cta-button">Book an Appointment</button>
      </div>
    </div>
  );
}

export default Home;