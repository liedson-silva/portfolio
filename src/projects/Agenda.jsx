import agenda from '../assets/agenda.png'

const Agenda = () => {
    return (
        <main className="projetos-card">
            <a href="https://agenda-6ij7.vercel.app" target="_blank" >
                <img src={agenda} alt="Agenda" className="projetos-imagem" />
                <div className="caixa-textos-projetos">
                    <h3 className="info-projetos">Agenda (Manicure)</h3>
                    <p className="paragrafo-projetos">
                        PWA para controle de agenda e finanças, com fluxo de faturamento por período e painel de atendimentos integrado.
                    </p>
                    <ul>
                        <li className="tecnologia">Node Js</li>
                        <li className="tecnologia">MongoDb</li>
                        <li className="tecnologia">React Native</li>
                        <li className="tecnologia">JWT</li>
                    </ul>
                </div>
            </a>
        </main>
    )
}

export default Agenda