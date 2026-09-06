import React from 'react';

function CTA({ onOpenQuote }) {
  return (
    <section id="orcamento" className="cta section reveal">
        <div className="container text-center">
            <h2 className="section-title">Sua empresa está chegando a novos mercados?</h2>
            <p className="lead">Conte com uma tradução que ajude sua empresa a ser compreendida.</p>
            <p>Seus manuais e documentos representam sua empresa.<br />
            Eles precisam transmitir profissionalismo, clareza e confiança em qualquer idioma.</p>
            <p className="highlight-text gold-text mt-2">A NEXO conecta empresas brasileiras e latino-americanas através da linguagem.</p>
            <div className="mt-4">
                <p><strong>Solicite uma avaliação do seu documento.</strong></p>
                <a href="#" className="btn btn-gold btn-large mt-2" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>SOLICITAR ORÇAMENTO</a>
            </div>
        </div>
    </section>
  );
}

export default CTA;
