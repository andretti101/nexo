import React from 'react';

function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works section reveal">
        <div className="container">
            <h2 className="section-title text-center">Como funciona?</h2>
            <div className="steps">
                <div className="step">
                    <div className="step-number">01</div>
                    <h4>Você envia o documento</h4>
                    <p>Envie seu manual ou documento para uma avaliação inicial.</p>
                </div>
                <div className="step">
                    <div className="step-number">02</div>
                    <h4>Analisamos o projeto</h4>
                    <p>Consideramos conteúdo, extensão, complexidade e prazo necessário.</p>
                </div>
                <div className="step">
                    <div className="step-number">03</div>
                    <h4>Você recebe seu orçamento</h4>
                    <p>Apresentamos uma proposta personalizada para o seu projeto.</p>
                </div>
                <div className="step">
                    <div className="step-number">04</div>
                    <h4>Seu documento é traduzido</h4>
                    <p>O trabalho é realizado com atenção à precisão, terminologia e clareza.</p>
                </div>
                <div className="step">
                    <div className="step-number">05</div>
                    <h4>Você recebe o material</h4>
                    <p>Entrega conforme o prazo combinado.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default HowItWorks;
