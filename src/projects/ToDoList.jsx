import React from 'react'
import TodoList from '../assets/toDoList.png';

const ToDoList = () => {
    return (
        <main className="projetos-card">
            <a href="https://to-do-list-liedson.vercel.app" target="_blank">
                <img src={TodoList} alt="To-Do List" className="projetos-imagem" />
                <div className="caixa-textos-projetos">
                    <h3 className="info-projetos">To-Do List</h3>
                    <p className="paragrafo-projetos">
                        Aplicação de lista de tarefas que salva, exibe, edita e remove tarefas, com integração ao back-end e banco de dados.
                    </p>
                    <ul>
                        <li className="tecnologia">NodeJs</li>
                        <li className="tecnologia">MongoDB</li>
                        <li className="tecnologia">ExpressJs</li>
                        <li className="tecnologia">ReactJs</li>
                    </ul>
                </div>
            </a>
        </main>
    )
}

export default ToDoList