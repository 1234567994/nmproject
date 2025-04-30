import React from 'react';
import '../styles/pages/privacyPolicy.css';

function PrivacyPolicy() {
  return React.createElement(
    'div',
    { className: 'privacy-container' },
    [
      React.createElement('h1', { key: 'title' }, 'Privacy Policy'),
      React.createElement('div', { className: 'last-updated', key: 'updated' }, 'Last Updated: January 2023'),
      React.createElement(
        'div',
        { className: 'privacy-content', key: 'content' },
        [
          createPolicySection('Information We Collect', [
            'We collect personal information when you register, book appointments, or contact us. This may include:',
            React.createElement('ul', { key: 'list1' }, [
              createListItem('Name, contact details, and demographic information'),
              createListItem('Medical and dental history'),
              createListItem('Insurance information'),
              createListItem('Payment details')
            ])
          ]),
          createPolicySection('How We Use Your Information', [
            'Your information is used to:',
            React.createElement('ul', { key: 'list2' }, [
              createListItem('Provide dental services and treatment'),
              createListItem('Process payments and insurance claims'),
              createListItem('Send appointment reminders'),
              createListItem('Improve our services')
            ])
          ]),
          createPolicySection('Data Security', [
            'We implement industry-standard security measures to protect your personal information, including encryption and secure servers.'
          ]),
          createPolicySection('Your Rights', [
            'You have the right to:',
            React.createElement('ul', { key: 'list3' }, [
              createListItem('Access your personal data'),
              createListItem('Request corrections'),
              createListItem('Request deletion of your data'),
              createListItem('Opt-out of marketing communications')
            ])
          ]),
          React.createElement(
            'div',
            { className: 'contact-section', key: 'contact' },
            [
              React.createElement('h3', { key: 'contact-title' }, 'Contact Us'),
              React.createElement('p', { key: 'contact-text' }, 'For any privacy-related concerns, please contact our Data Protection Officer at privacy@dentalcarepro.com')
            ]
          )
        ]
      )
    ]
  );
}

function createPolicySection(title, content) {
  return React.createElement(
    'section',
    { key: title },
    [
      React.createElement('h2', { key: 'section-title' }, title),
      Array.isArray(content) 
        ? content.map((item, idx) => React.isValidElement(item) ? item : React.createElement('p', { key: `p-${idx}` }, item))
        : React.createElement('p', null, content)
    ]
  );
}

function createListItem(text) {
  return React.createElement('li', { key: text }, text);
}

export default PrivacyPolicy;