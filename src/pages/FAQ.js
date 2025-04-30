import React, { useState } from 'react';
import '../styles/pages/faq.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend regular check-ups every 6 months for most patients, though some may need more frequent visits based on their oral health."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Please contact us with your insurance details and we'll verify your coverage."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, checks, and offer financing options for major procedures."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we provide emergency dental care. Call our emergency line at (123) 456-7890 for immediate assistance."
    },
    {
      question: "Is teeth whitening safe?",
      answer: "Professional teeth whitening under dental supervision is safe and effective. We customize treatment based on your tooth sensitivity and desired results."
    },
    {
      question: "How can I overcome dental anxiety?",
      answer: "We offer various options including sedation dentistry, calming environments, and gentle techniques to make your visit comfortable."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return React.createElement(
    'div',
    { className: 'faq-container' },
    [
      React.createElement('h1', { key: 'title' }, 'Frequently Asked Questions'),
      React.createElement('p', { className: 'subtitle', key: 'subtitle' }, 'Find answers to common questions about our services'),
      React.createElement(
        'div',
        { className: 'faq-list', key: 'faq-list' },
        faqs.map((faq, index) => createFAQItem(faq, index, activeIndex === index, toggleFAQ))
      ),
      React.createElement(
        'div',
        { className: 'contact-prompt', key: 'contact' },
        [
          React.createElement('h3', { key: 'contact-title' }, 'Still have questions?'),
          React.createElement('p', { key: 'contact-text' }, 'Contact our friendly staff who will be happy to assist you.'),
          React.createElement('button', { className: 'contact-button', key: 'contact-btn' }, 'Contact Us')
        ]
      )
    ]
  );
}

function createFAQItem(faq, index, isActive, toggleFAQ) {
  return React.createElement(
    'div',
    {
      className: `faq-item ${isActive ? 'active' : ''}`,
      key: `faq-${index}`
    },
    [
      React.createElement(
        'div',
        {
          className: 'faq-question',
          onClick: () => toggleFAQ(index),
          key: `question-${index}`
        },
        [
          React.createElement('h3', { key: `question-text-${index}` }, faq.question),
          React.createElement('span', { className: 'toggle-icon', key: `icon-${index}` }, isActive ? '-' : '+')
        ]
      ),
      isActive && React.createElement(
        'div',
        { className: 'faq-answer', key: `answer-${index}` },
        React.createElement('p', null, faq.answer)
      )
    ]
  );
}

export default FAQ;