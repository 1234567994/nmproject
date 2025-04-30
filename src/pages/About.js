import React from 'react';
import FloatingBox from '../components/FloatingBox';
import '../styles/pages/about.css';

function About() {
  return React.createElement('div', { className: 'about-container' },
    [
      React.createElement('div', { className: 'about-hero', key: 'hero' },
        React.createElement('div', { className: 'hero-content' },
          [
            React.createElement('h1', { key: 'title' }, 'About DentalCare Pro'),
            React.createElement('p', { key: 'subtitle' }, 'Your trusted partner in dental health and wellness')
          ]
        )
      ),
      React.createElement('div', { className: 'about-content', key: 'content' },
        [
          React.createElement(FloatingBox, { title: 'Our Story', color: '#4a90e2', key: 'story' },
            [
              React.createElement('p', { key: 'story1' }, 'Founded in 2010, DentalCare Pro has grown from a single practice to a network of dental professionals dedicated to excellence in oral healthcare.'),
              React.createElement('p', { key: 'story2' }, 'What began as a small neighborhood clinic has blossomed into a trusted regional provider with five locations across the city.')
            ]
          ),
          
          React.createElement(FloatingBox, { title: 'Our Mission', color: '#50c878', key: 'mission' },
            [
              React.createElement('p', { key: 'mission1' }, 'Our mission is to deliver exceptional dental care and improve oral health outcomes for our community.'),
              React.createElement('ul', { key: 'mission-list' },
                [
                  React.createElement('li', { key: 'm1' }, 'Provide compassionate, patient-centered care'),
                  React.createElement('li', { key: 'm2' }, 'Utilize the latest dental technologies'),
                  React.createElement('li', { key: 'm3' }, 'Make quality dental care accessible'),
                  React.createElement('li', { key: 'm4' }, 'Educate patients about oral health')
                ]
              )
            ]
          ),
          
          React.createElement(FloatingBox, { title: 'Our Vision', color: '#ff6b6b', key: 'vision' },
            [
              React.createElement('p', { key: 'vision1' }, 'To be the leading dental care provider known for innovative treatment and compassionate care.'),
              React.createElement('p', { key: 'vision2' }, 'We envision a future where everyone has access to high-quality dental care regardless of background or circumstance.')
            ]
          ),
          
          React.createElement('div', { className: 'stats-section', key: 'stats' },
            [
              React.createElement('div', { className: 'stat-card', key: 'stat1' },
                [
                  React.createElement('h3', { key: 's1num' }, '15+'),
                  React.createElement('p', { key: 's1text' }, 'Years of Experience')
                ]
              ),
              React.createElement('div', { className: 'stat-card', key: 'stat2' },
                [
                  React.createElement('h3', { key: 's2num' }, '10,000+'),
                  React.createElement('p', { key: 's2text' }, 'Happy Patients')
                ]
              ),
              React.createElement('div', { className: 'stat-card', key: 'stat3' },
                [
                  React.createElement('h3', { key: 's3num' }, '25+'),
                  React.createElement('p', { key: 's3text' }, 'Qualified Dentists')
                ]
              )
            ]
          ),
          
          React.createElement(FloatingBox, { title: 'Our Approach', color: '#9c88ff', key: 'approach' },
            [
              React.createElement('p', { key: 'approach1' }, 'We combine cutting-edge technology with compassionate care to deliver personalized treatment plans for every patient.'),
              React.createElement('ul', { key: 'approach-list' },
                [
                  React.createElement('li', { key: 'a1' }, 'Pain-free procedures'),
                  React.createElement('li', { key: 'a2' }, 'Sterilized equipment'),
                  React.createElement('li', { key: 'a3' }, 'Emergency services'),
                  React.createElement('li', { key: 'a4' }, 'Child-friendly environment'),
                  React.createElement('li', { key: 'a5' }, 'Multilingual staff')
                ]
              )
            ]
          ),
          
          React.createElement('div', { className: 'cta-section', key: 'cta' },
            [
              React.createElement('h2', { key: 'cta-title' }, 'Ready to experience compassionate dental care?'),
              React.createElement('button', { 
                className: 'cta-button', 
                key: 'cta-btn',
                onClick: () => window.location.href = '/book-appointment'
              }, 'Book Your Appointment')
            ]
          )
        ]
      )
    ]
  );
}

export default About;