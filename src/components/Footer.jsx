import React, { useState } from 'react';

function Footer() {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("marianelamvieyto@hotmail.com").then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      window.location.href = "mailto:marianelamvieyto@hotmail.com";
    }).catch(() => {
      window.location.href = "mailto:marianelamvieyto@hotmail.com";
    });
  };

  return (
    <footer id="contato" className="footer" style={{ position: 'relative' }}>
        <div className="container footer-content">
            <div className="footer-logo">
                <h2>NEXO</h2>
                <p className="gold-text">Tradução Empresarial</p>
                <p>Português ↔ Espanhol</p>
                <p>Brasil • América Latina</p>
            </div>
            <div className="footer-tagline">
                <p>Experiência que conecta.</p>
                <p>Precisão que comunica.</p>
            </div>
            <div className="footer-contact">
                <a href="https://wa.me/554896191449" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">FALE COM A NEXO</a>
                <div className="social-links mt-3" style={{ position: 'relative' }}>
                    <a href="https://wa.me/554896191449" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/marianelamarana?stkn=NXk0bDV3b28yZ3J1" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                    <a 
                      href="mailto:marianelamvieyto@hotmail.com" 
                      title="E-mail" 
                      aria-label="E-mail"
                      onClick={handleEmailClick}
                    >
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 NEXO Tradução Empresarial. Todos os direitos reservados.</p>
        </div>
        
        {/* Toast Notification */}
        <div className={`toast-notification ${showToast ? 'show' : ''}`}>
          <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
          E-mail copiado com sucesso!
        </div>
    </footer>
  );
}

export default Footer;
