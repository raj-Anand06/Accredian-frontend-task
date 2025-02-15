import React, { useState } from 'react';
import './styles/faq.css';

function Faq() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      label: 'Eligibility',
      qa: [
        {
          question:
            'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
          answer:
            'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.',
        },
        {
          question: 'What is the minimum system configuration required?',
          answer:
            'A computer (Windows or Mac) with a reliable internet connection, minimum 4GB RAM, and updated web browser should suffice for all course-related materials and activities.',
        },
      ],
    },
    {
      label: 'How To Use?',
      qa: [
        {
          question: 'How do I navigate the platform?',
          answer: 'After logging in, you’ll find a dashboard with all your enrolled programs and materials...',
        },
      ],
    },
    {
      label: 'Terms & Conditions',
      qa: [
        {
          question: 'What are the refund policies?',
          answer: 'Refund policies depend on the specific program; please check the official guidelines...',
        },
      ],
    },
  ];

  return (
    <div className="faq-container">
      {/* Heading */}
      <h2 className="faq-heading">
        Frequently Asked <span className="highlight">Questions</span>
      </h2>

      {/* Main Content: Left Tabs + Right Q&A */}
      <div className="faq-content">
        {/* Sidebar Tabs */}
        <div className="faq-sidebar">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`faq-tab ${selectedTab === index ? 'selected' : ''}`}
              onClick={() => setSelectedTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Display the questions and answers for the selected tab */}
        <div className="faq-qa-list">
          {tabs[selectedTab].qa.map((item, idx) => (
            <div key={idx} className="faq-qa-item">
              <p className="faq-question"><strong>{item.question}</strong></p>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
