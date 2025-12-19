import React from 'react'
import fatalSystem from '../assets/fatalSystem.png'

const FatalSystem = () => {
  return (
    <main className="projetos-card">
      <a href="https://fatal-system.vercel.app/#/" target="_blank" >
        <img src={fatalSystem} alt="Fatal System" className="projetos-imagem" />
        <div className="caixa-textos-projetos">
          <h3 className="info-projetos">Fatal System</h3>
          <p className="paragrafo-projetos">
            Gestão de chamados com triagem e resolução sugerida por IA. Compatível com Web, Mobile e Desktop.
          </p>
          <ul>
            <li className="tecnologia">Node Js</li>
            <li className="tecnologia">React Native</li>
            <li className="tecnologia">Windows Form</li>
            <li className="tecnologia">Sql Server</li>
            <li className="tecnologia">React</li>
            <li className="tecnologia">JWT</li>
            <li className="tecnologia">GenAI</li>
          </ul>
        </div>
      </a>
    </main>
  )
}

export default FatalSystem