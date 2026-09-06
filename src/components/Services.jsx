import React from 'react';

function Services() {
  return (
    <section id="servicos" className="services section bg-light reveal">
        <div className="container">
            <h2 className="section-title text-center">Especialistas em tradução empresarial</h2>
            <div className="services-grid">
                <div className="service-card">
                    <div className="icon-wrapper"><i className="fas fa-book"></i></div>
                    <h3>Manuais</h3>
                    <p>Tradução de manuais de operação, utilização, instalação e procedimentos.</p>
                </div>
                <div className="service-card">
                    <div className="icon-wrapper"><i className="fas fa-cogs"></i></div>
                    <h3>Documentação técnica</h3>
                    <p>Materiais relacionados a equipamentos, produtos, processos e serviços.</p>
                </div>
                <div className="service-card">
                    <div className="icon-wrapper"><i className="fas fa-folder-open"></i></div>
                    <h3>Documentos empresariais</h3>
                    <p>Documentos corporativos, apresentações, instruções e materiais institucionais.</p>
                </div>
                <div className="service-card">
                    <div className="icon-wrapper"><i className="fas fa-clipboard-list"></i></div>
                    <h3>Procedimentos e instruções</h3>
                    <p>Conteúdos destinados a funcionários, clientes, representantes e usuários.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Services;
