import React from 'react';

function Intro() {
  return (
    <section className="intro section">
        <div className="container text-center reveal">
            <h2 className="section-title">Seu conteúdo. Nossa experiência.</h2>
            <p className="lead">Uma boa tradução empresarial não é apenas trocar palavras de um idioma para outro.</p>
            <p>É compreender o conteúdo, respeitar a terminologia, preservar o sentido e adaptar a linguagem para que a mensagem seja clara e natural no idioma de destino.</p>
            <p>Na NEXO, cada projeto é realizado com atenção aos detalhes e compromisso com a qualidade.</p>
            <div className="languages-box">
                <span className="flag">🇧🇷</span> Português ↔ <span className="flag">🇪🇸</span> Espanhol
                <p className="small-text">Traduções para os dois idiomas com foco em empresas de todo o Brasil e países hispanofalantes.</p>
            </div>
        </div>
    </section>
  );
}

export default Intro;
