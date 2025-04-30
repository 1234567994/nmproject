import React from 'react';
import '../styles/pages/termsConditions.css';

function TermsConditions() {
  return React.createElement(
    'div',
    { className: 'terms-container' },
    [
      React.createElement('h1', { key: 'title' }, 'Terms and Conditions'),
      React.createElement('div', { className: 'last-updated', key: 'updated' }, 'Effective Date: January 2023'),
      React.createElement(
        'div',
        { className: 'terms-content', key: 'content' },
        [
          createTermSection('1. Appointments', 'We require 24 hours notice for appointment cancellations. Late cancellations may incur a fee.'),
          createTermSection('2. Payments', 'Payment is due at the time of service. We accept cash, credit cards, and most insurance plans.'),
          createTermSection('3. Insurance', 'We will submit claims to your insurance provider as a courtesy. However, you are ultimately responsible for all charges.'),
          createTermSection('4. Treatment Plans', 'All treatment plans are estimates and may change based on your actual dental needs.'),
          createTermSection('5. Patient Responsibilities', 'Patients must provide accurate medical history and follow post-treatment instructions.'),
          createTermSection('6. Limitation of Liability', 'DentalCare Pro is not liable for complications arising from failure to follow recommended treatment or care instructions.'),
          React.createElement(
            'div',
            { className: 'acknowledgment', key: 'ack' },
            'By using our services, you acknowledge that you have read and agree to these terms and conditions.'
          )
        ]
      )
    ]
  );
}

function createTermSection(title, content) {
  return React.createElement(
    'section',
    { key: title },
    [
      React.createElement('h2', { key: 'section-title' }, title),
      React.createElement('p', { key: 'section-content' }, content)
    ]
  );
}

export default TermsConditions;