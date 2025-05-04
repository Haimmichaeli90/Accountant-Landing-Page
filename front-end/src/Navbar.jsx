import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './assets/NavBar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const onScroll = () => {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= 150 && top >= -section.offsetHeight + 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/drhqxomnq/image/upload/v1746339316/LOGO_j5lzbr.png"
          alt="HM Logo"
          className="logo-img"
        />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>שירותים</a>
        </li>
        <li>
          <a href="#faq" className={activeSection === 'faq' ? 'active' : ''}>שאלות נפוצות</a>
        </li>
        <li>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>אודות</a>
        </li>
        <li>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>צור קשר</a>
        </li>
      </ul>

      <div className="lang-hamburger" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
        🌐
      </div>

      {isLangMenuOpen && (
        <div className="mobile-lang-menu">
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
