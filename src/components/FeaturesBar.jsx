import React from 'react';

function FeaturesBar() {
  return (
    <section className="features-bar">
        <div className="feature">
            <i className="fas fa-file-contract"></i>
            <h4>TRADUÇÃO TÉCNICA E ESPECIALIZADA</h4>
        </div>
        <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h4>CONFIDENCIALIDADE E SEGURANÇA</h4>
        </div>
        <div className="feature">
            <i className="fas fa-bullseye"></i>
            <h4>PRECISÃO E ATENÇÃO AOS DETALHES</h4>
        </div>
        <div className="feature">
            <i className="fas fa-globe-americas"></i>
            <h4>FOCO EM EMPRESAS E RESULTADOS</h4>
        </div>
    </section>
  );
}

export default FeaturesBar;
