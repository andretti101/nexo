import React, { useState } from 'react';

function QuoteModal({ isOpen, onClose }) {
  const [emailText, setEmailText] = useState('E-mail');

  if (!isOpen) return null;

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("marianelamvieyto@hotmail.com").then(() => {
      setEmailText('Copiado!');
      setTimeout(() => setEmailText('E-mail'), 2000);
      window.location.href = "mailto:marianelamvieyto@hotmail.com";
    }).catch(() => {
      // Fallback
      window.location.href = "mailto:marianelamvieyto@hotmail.com";
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <h3 className="modal-title">Selecione um dos meios para enviar o arquivo</h3>
        <div className="modal-options">
          <a href="mailto:marianelamvieyto@hotmail.com" className="modal-option" aria-label="E-mail" onClick={handleEmailClick}>
            <i className="fas fa-envelope"></i>
            <span>{emailText}</span>
          </a>
          <a href="https://wa.me/554896191449" target="_blank" rel="noopener noreferrer" className="modal-option" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/marianelamarana?stkn=NXk0bDV3b28yZ3J1" target="_blank" rel="noopener noreferrer" className="modal-option" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuoteModal;
