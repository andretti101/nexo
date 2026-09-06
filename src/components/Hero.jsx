import React from 'react';

function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="hero">
        <div className="hero-content">
            <h2>Tradução de manuais e documentos empresariais</h2>
            <h3 className="gold-text">Português ↔ Espanhol</h3>
            <p>Mais de 20 anos de experiência ajudando empresas a se comunicar com clareza e profissionalismo, em diferentes mercados.</p>
            <a href="#" className="btn btn-gold" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>SOLICITE UM ORÇAMENTO</a>
        </div>
        <div className="hero-image">
            <img src="/hero-image.jpg" alt="Tradução Empresarial Manuais" />
        </div>
    </section>
  );
}

export default Hero;
