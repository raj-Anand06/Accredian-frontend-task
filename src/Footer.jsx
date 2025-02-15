import React from 'react';
import './styles/footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          {/* Left: Text logo in lowercase with tagline */}
          <div className="footer-logo-wrap">
            <h2 className="footer-logo-text">accredian</h2>
            <p className="footer-tagline">credentials that matters</p>
          </div>

          {/* Right: Button & Subtitle */}
          <div className="footer-top-right">
            <button className="schedule-btn">Schedule a 1-on-1 Call Now</button>
            <span className="footer-subtitle">Speak with our Learning Advisor</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-main">
          {/* Column 1: Programs */}
          <div className="footer-col">
            <h3>Programs</h3>
            <ul>
              <li>
                Data Science & AI <span>+</span>
              </li>
              <li>
                Product Management <span>+</span>
              </li>
              <li>
                Business Analytics <span>+</span>
              </li>
              <li>
                Digital Transformation <span>+</span>
              </li>
              <li>
                Fintech <span>+</span>
              </li>
              <li>
                Senior Management <span>+</span>
              </li>
              <li>
                Strategy & Leadership <span>+</span>
              </li>
              <li>
                Project Management <span>+</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div className="footer-col contact">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: ds@accredian.com (For Data Science Queries)</li>
              <li>Email: pm@accredian.com (For Product Management Queries)</li>
              <li>Phone: +91-12345-67890 (Mon-Fri: 10AM - 7PM)</li>
              <li>
                Product Management Office: <br />123 Main Street, Example City
              </li>
            </ul>

            <h4 className="footer-link">
                <a href="https://accredian.com/whyaccredian" target="_blank" rel="noopener noreferrer">
                Why Accredian
                </a>
            </h4>
            <p>Follow Us</p>
            <div className="footer-social-icons">
              <FacebookIcon className="social-icon" />
              <LinkedInIcon className="social-icon" />
              <TwitterIcon className="social-icon" />
              <InstagramIcon className="social-icon" />
              <YouTubeIcon className="social-icon" />
            </div>
          </div>

          {/* Column 3: Accredian */}
          <div className="footer-col">
            <h3>Accredian</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Revision Policy</li>
              <li>Terms of Service</li>
              <li>Master FAQ</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2023 Accredian Brand of NxTGen Education Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
