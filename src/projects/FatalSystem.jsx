import React from 'react'
import fatalSystem from '../assets/fatalSystem.png'

const FatalSystem = () => {
  return (
    <main className="projetos-card">
      <a href="https://fatal-system.vercel.app/#/" target="_blank" >
        <img src={fatalSystem} alt="Fatal System" className="projetos-imagem" />
        <div className="caixa-textos-projetos">
          <h3 className="info-projetos">Fatal System -<span className='info-projetos-login'>login: liedson | senha: 1</span></h3>
          <p className="paragrafo-projetos">
            Gerenciamento de chamados para suporte técnico, com triagem e resposta pela IA. Compatível com as versões Web, Mobile e Desktop.
          </p>
          <ul>
            <li className="tecnologia">Node Js</li>
            <li className="tecnologia">Sql Server</li>
            <li className="tecnologia">React</li>
            <li className="tecnologia">JWT</li>
            <li className="tecnologia">GenAI</li>
            <li className="tecnologia">React Native</li>
            <li className="tecnologia">Windows Form</li>
          </ul>
        </div>
      </a>
    </main>
  )
}

export default FatalSystem