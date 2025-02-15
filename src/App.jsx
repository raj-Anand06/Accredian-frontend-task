import React, { useState } from 'react';
import './styles/App.css';
import image from './assets/hero.png';
import money1 from './assets/money1.png';
import money2 from './assets/money2.png';
import money3 from './assets/money3.png';
import money4 from './assets/money4.png';
import Refer from './Refer';
import ReferBen from './RefBen';
import Faq from './Faq';
import Gtouch from './Gtouch';
import Footer from './Footer';
import Details from './Details';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); 

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="referral-page">
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>Accredian</h2>
        </div>
        <div className="navbar-links-container">
          <ul className="navbar-links">
            <li>Refer & Earn</li>
            <li>Resources</li>
            <li>About Us</li>
            <li>Login</li>
            <li>
              <button className="try-free-btn">Try for Free</button>
            </li>
          </ul>
          <button className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={closeSidebar}>&times;</button>
        <ul>
          <li onClick={closeSidebar}>Refer & Earn</li>
          <li onClick={closeSidebar}>Resources</li>
          <li onClick={closeSidebar}>About Us</li>
          <li onClick={closeSidebar}>Login</li>
          <li onClick={closeSidebar}>
            <button className="try-free-btn">Try for Free</button>
          </li>
        </ul>
      </div>
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Let's Learn & Earn</h1>
          <p>
            Get a chance to win up to <span className="highlight">Rs. 15,000</span>
          </p>
          <button className="refer-now-btn" onClick={openModal}>
            Refer Now
          </button>
        </div>

        <div className="hero-image">
          <img src={image} alt="hero" />
        </div>
        <img src={money1} alt="money" className="money money-1" />
        <img src={money2} alt="money" className="money money-2" />
        <img src={money3} alt="money" className="money money-3" />
        <img src={money4} alt="money" className="money money-4" />
      </section>

      {/* Directly Render Components */}
      <Refer />
      <ReferBen />
      <Faq />
      <Gtouch />
      <Footer />
      <Details open={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
