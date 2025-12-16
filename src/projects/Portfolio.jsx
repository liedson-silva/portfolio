import React from 'react'
import portfolio from '../assets/portfolio.png';

const Portfolio = () => {
    return (
        <main className="projetos-card">
            <a href="https://liedson.vercel.app" target="_blank">
                <img src={portfolio} alt="Portfólio" className="projetos-imagem" />
                <div className="caixa-textos-projetos">
                    <h3 className="info-projetos">Portfólio</h3>
                    <p className="paragrafo-projetos">
                        Site que desenvolvi para apresentar a mim e meus projetos.
                    </p>
                    <ul>
                        <li className="tecnologia">React</li>
                    </ul>
                </div>
            </a>
        </main>
    )
}

export default Portfolio