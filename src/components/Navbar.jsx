import React, { useState, useEffect } from 'react';

function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      setMenuActive(false);
    }
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbar = document.querySelector('.navbar');
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
            <a href="#home" className="logo-link" onClick={(e) => handleLinkClick(e, '#home')}>
                <img src="/2.png" alt="NEXO Tradução Empresarial" className="logo-img" />
            </a>
        </div>
        <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>HOME</a>
            <a href="#servicos" onClick={(e) => handleLinkClick(e, '#servicos')}>SERVIÇOS</a>
            <a href="#sobre" onClick={(e) => handleLinkClick(e, '#sobre')}>SOBRE</a>
            <a href="#como-funciona" onClick={(e) => handleLinkClick(e, '#como-funciona')}>COMO FUNCIONA</a>
            <a href="#contato" onClick={(e) => handleLinkClick(e, '#contato')}>CONTATO</a>
        </nav>
        <a href="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>SOLICITE UM ORÇAMENTO</a>
        <button 
          type="button" 
          className="mobile-menu-btn" 
          aria-label="Menu"
          onClick={() => setMenuActive(!menuActive)}
        >
          <i className="fas fa-bars"></i>
        </button>
    </header>
  );
}

export default Navbar;
