import lojaVirtual from '../assets/lojaVirtual.png'

const LojaVirtual = () => {
  return (
    <main className="projetos-card">
      <a href="https://loja-virtual-liedson.vercel.app" target="_blank" >
        <img src={lojaVirtual} alt="Loja Virtual" className="projetos-imagem" />
        <div className="caixa-textos-projetos">
          <h3 className="info-projetos">Loja Virtual</h3>
          <p className="paragrafo-projetos">
            Loja Virtual moderno, com recursos como cadastro de produtos, carrinho de compras e gerenciamento de pedidos, simulando uma loja virtual completa.
          </p>
          <ul>
            <li className="tecnologia">Node Js</li>
            <li className="tecnologia">MongoDb</li>
            <li className="tecnologia">React</li>
            <li className="tecnologia">JWT</li>
            <li className="tecnologia">Tailwind</li>
          </ul>
        </div>
      </a>
    </main>
  )
}

export default LojaVirtual