import React from 'react';

function About() {
  return (
    <section id="sobre" className="about section reveal">
        <div className="container about-grid">
            <div className="about-text">
                <h2 className="section-title">Experiência que faz diferença</h2>
                <div className="stats">
                    <div className="stat">
                        <span className="number">30+</span>
                        <span className="label">Anos na área de Letras</span>
                    </div>
                    <div className="stat">
                        <span className="number">20+</span>
                        <span className="label">Anos dedicados à tradução</span>
                    </div>
                </div>
                <p>Sou <strong>Marianela Marana Vieyto</strong>, professora e intérprete formada em Letras, com pós-graduação na área e mais de três décadas de experiência profissional.</p>
                <p>Sou nativa de língua espanhola, nascida no Uruguai, e atuo com tradução profissional entre português e espanhol.</p>
                <p>Minha experiência une conhecimento linguístico, domínio dos dois idiomas e compreensão das necessidades da comunicação empresarial.</p>
                <p className="highlight-text gold-text"><strong>Precisão, experiência e cuidado em cada projeto.</strong></p>
            </div>
            <div className="about-image">
                <img src="/marianela.jpg" alt="Marianela Marana Vieyto" className="about-photo" />
            </div>
        </div>
    </section>
  );
}

export default About;
