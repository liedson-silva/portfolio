import React from 'react'
import calculadora from '../assets/calculadora.png';

const Calculadora = () => {
    return (
        <main className="projetos-card">
            <a href="https://calculadora-9rzc.vercel.app" target="_blank">
                <img src={calculadora} alt="Calculadora Simples" className="projetos-imagem" />
                <div className="caixa-textos-projetos">
                    <h3 className="info-projetos">Calculadora Simples</h3>
                    <p className="paragrafo-projetos">
                        Calculadora que envia as operações ao back-end, que processa o calculo e retorna o resultado.
                    </p>
                    <ul>
                        <li className="tecnologia">Node Js</li>
                        <li className="tecnologia">React</li>
                    </ul>
                </div>
            </a>
        </main>
    )
}

export default Calculadora