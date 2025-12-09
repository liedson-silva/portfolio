import React from 'react'
import previsaoTempo from '../assets/previsaoTempo.png'

const PrevisaoTempo = () => {
  return (
    <main className="projetos-card">
      <a href="https://previsao-do-tempo-nine-kappa.vercel.app" target="_blank" >
        <img src={previsaoTempo} alt="Previsão do Tempo" className="projetos-imagem" />
        <div className="caixa-textos-projetos">
          <h3 className="info-projetos">Previsão do Tempo</h3>
          <p className="paragrafo-projetos">
            Mostra o clima atual e a previsão para os próximos 5 dias ao buscar uma cidade ou país.
          </p>
          <ul>
            <li className="tecnologia">React</li>
            <li className="tecnologia">Weather Informations</li>
          </ul>
        </div>
      </a>
    </main>
  )
}

export default PrevisaoTempo