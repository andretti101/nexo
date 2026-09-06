import React from 'react';

function WhyChooseUs() {
  return (
    <section className="why-us section bg-teal reveal">
        <div className="container">
            <h2 className="section-title text-center light-text">Por que escolher a NEXO?</h2>
            <div className="features-grid">
                <div className="feature-item">
                    <i className="fas fa-check-circle gold-text"></i>
                    <div>
                        <h4 className="light-text">Experiência</h4>
                        <p className="light-text-muted">Mais de duas décadas trabalhando com tradução de materiais empresariais.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <i className="fas fa-check-circle gold-text"></i>
                    <div>
                        <h4 className="light-text">Domínio dos dois idiomas</h4>
                        <p className="light-text-muted">Espanhol nativo e domínio profissional do português.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <i className="fas fa-check-circle gold-text"></i>
                    <div>
                        <h4 className="light-text">Precisão</h4>
                        <p className="light-text-muted">Atenção à terminologia, ao contexto e ao significado do documento.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <i className="fas fa-check-circle gold-text"></i>
                    <div>
                        <h4 className="light-text">Fidelidade</h4>
                        <p className="light-text-muted">Preservação do conteúdo e da estrutura original sempre que possível.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <i className="fas fa-check-circle gold-text"></i>
                    <div>
                        <h4 className="light-text">Confidencialidade</h4>
                        <p className="light-text-muted">Respeito e segurança no tratamento dos documentos recebidos.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <i className="fas fa-check-circle gold-text"></i>
                    <div>
                        <h4 className="light-text">Atendimento personalizado</h4>
                        <p className="light-text-muted">Cada projeto é analisado de acordo com suas características e necessidades.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default WhyChooseUs;
