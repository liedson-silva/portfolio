import React from 'react'
import cadastroUsuario from '../assets/cadastroUsuario.png';

const CadastroUsuario = () => {
    return (
        <main className="projetos-card">
            <a href="https://cadastro-de-usuario-ochre.vercel.app" target="_blank">
                <img src={cadastroUsuario} alt="Cadastro de Usuário" className="projetos-imagem" />
                <div className="caixa-textos-projetos">
                    <h3 className="info-projetos">Cadastro de Usuário</h3>
                    <p className="paragrafo-projetos">
                        Formulário que salva, exibe e remove usuários, com integração ao back-end e banco de dados.
                    </p>
                    <ul>
                        <li className="tecnologia">Node Js</li>
                        <li className="tecnologia">MongoDB</li>
                        <li className="tecnologia">React</li>
                    </ul>
                </div>
            </a>
        </main>
    )
}

export default CadastroUsuario