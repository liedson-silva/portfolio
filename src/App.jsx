import foto from './assets/foto.jpg';
import curriculo from './assets/curriculo.pdf';
import ToDoList from './projects/ToDoList.jsx';
import CadastroUsuario from './projects/CadastroUsuario.jsx';
import Calculadora from './projects/Calculadora.jsx';
import PrevisaoTempo from './projects/PrevisaoTempo.jsx';
import { useState, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { HiOutlineViewList } from "react-icons/hi";
import lego from './assets/lego.jpeg';
import Skills from './components/skills.jsx';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import FatalSystem from './projects/FatalSystem.jsx';
import Portfolio from './projects/Portfolio.jsx';
import SocialNetwork from './components/SocialNetwork.jsx';

const App = () => {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [showMenu, setShowMenu] = useState(false);

    const data = [
        { id: '1', projeto: <FatalSystem /> },
        { id: '2', projeto: <PrevisaoTempo /> },
        { id: '3', projeto: <Portfolio /> },
        { id: '4', projeto: <ToDoList /> },
        { id: '5', projeto: <Calculadora /> },
        { id: '6', projeto: <CadastroUsuario /> },
    ];

    useEffect(() => {
        function handleResize() {
            setSlidesPerView(window.innerWidth <= 720 ? 1 : 3);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    const enviarWhats = (event) => {
        event.preventDefault();

        const telefone = "5512987040634";

        const texto = `Olá, me chamo ${nome}, ${mensagem}`;
        const msgFormatada = encodeURIComponent(texto);

        const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

        window.open(url, "_blank");
    }

    return (
        <main>
            <nav className="navegacao">
                <div className="navegacao-container">
                    <ul className="menu">
                        <li>
                            <a href="#inicio" className="menu-nome" onClick={() => setShowMenu(false)}>&lt;Liedson<span className="nome-destaque">Silva/&gt;</span></a>
                        </li>

                        <div className='dropdown-mobile'>
                            <button className='button-dropdown-mobile'
                                onClick={() => setShowMenu(!showMenu)}> <HiOutlineViewList />
                            </button>
                            {showMenu && (
                                <ul className='dropdown-menu'>
                                    <li><a href="#sobre" onClick={() => setShowMenu(!showMenu)}>Sobre mim</a></li>
                                    <li><a href="#projetos" onClick={() => setShowMenu(!showMenu)}>Projetos</a></li>
                                    <li><a href="#skills" onClick={() => setShowMenu(!showMenu)}>Conhecimentos</a></li>
                                    <li><a href="#contatos" onClick={() => setShowMenu(!showMenu)}>Fale comigo</a></li>
                                </ul>
                            )}
                        </div>

                        <li>
                            <a href="#sobre" className="menu-link">Sobre mim</a>
                        </li>
                        <li>
                            <a href="#projetos" className="menu-link">Projetos</a>
                        </li>
                        <li>
                            <a href="#skills" className="menu-link">Conhecimentos</a>
                        </li>
                        <li>
                            <a href="#contatos" className="menu-link">Fale comigo</a>
                        </li>
                    </ul>
                </div>
            </nav>


            <section id="inicio" className="cabecalho">
                <div className="espaco-padrao">
                    <div className="cabecalho-nome">
                        <h1>Desenvolvedor<span className="cabecalho-sub-titulo">de Software</span></h1>

                        <p className="cabecalho-apresentacao">
                            Criando sistemas inovadores, funcionais e eficientes para soluções
                            digitais com foco em desempenho, segurança e integração.
                        </p>
                        <div className="cabecalho-ajuste">
                            <a href="#projetos" className="cabecalho-atalho">Projetos 🔗</a>
                            <a href="#contatos" className="cabecalho-atalho">Contato ✉</a>
                        </div>

                        <SocialNetwork />
                    </div>

                    <div className="ajustar-foto-lego">
                        <img src={lego} alt="Foto lego de Liedson Silva" className="foto-lego" />
                    </div>

                </div>
            </section>

            <section id="sobre" className="sobre">
                <h2 className="sobre-titulo">Sobre mim</h2>
                <div className="espaco-padrao">
                    <div className="ajustar-foto-perfil">
                        <img src={foto} alt="Foto de Liedson Silva" className="foto-perfil" />
                    </div>

                    <div className="sobre-texto">
                        <h2 className="saudacao">Olá, eu sou</h2>
                        <h3 className="apresentar-me">Liedson de Oliveira Silva</h3>
                        <p className="sobre-paragrafo">
                            Tenho 21 anos, graduado em Análise e Desenvolvimento de Sistemas pela UNIP. Desenvolvo software, páginas e sistemas web responsivos de layout atrativo. Ainda
                            sem experiência profissional, me dedico a projetos pessoais e cursos
                            para me preparar para novas oportunidades.
                        </p>
                        <button className="botao-cv" onClick={() => window.open(curriculo, '_blank')}>
                            Download CV
                        </button>
                    </div>
                </div>
            </section>

            <section id="projetos" className="projetos">
                <h2 className="projetos-titulo">Meus Projetos</h2>
                <div className='projeto-container'>
                    <Swiper
                        slidesPerView={slidesPerView}
                        pagination={{ clickable: true }}
                        navigation={true}
                        spaceBetween={30}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                {item.projeto}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section id="skills" className="skills">
                <h4 className="skills-titulo">Skills</h4>
                <Skills />
            </section>

            <section id="contatos" className="contatos">
                <h5 className="contatos-titulo">Entre em Contato</h5>
                <div className="espaco-padrao">
                    <div className="contatos-textos">
                        <h5 className="contatos-subtitulo">
                            Pronto para transformar suas ideia em realidade?
                        </h5>
                        <p className="contatos-paragrafo">
                            Estou aqui para ajudar você a criar soluções digitais que
                            impulsionam o crescimento do seu negócio.
                        </p>
                        <p className="contatos-subparagrafo">Contate-me</p>
                        <p className="contatos-subcontate-me">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" fill="#3b82f6" viewBox="0 0 24 24"
                                style={{ verticalAlign: "middle", marginRight: "0.5em" }}>
                                <path
                                    d="M2 4a2 2 0 012-2h16a2 2 0 012 2v0.01L12 13 2 4.01V4zm0 2.236V20a2 2 0 002 2h16a2 2 0 002-2V6.236l-10 8.5-10-8.5z" />
                            </svg>
                            Email: liedsonsilva987@gmail.com
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" fill="#3b82f6" viewBox="0 0 24 24"
                                style={{ verticalAlign: "middle", marginRight: "0.5em" }}>
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                            </svg>
                            Localização: São José Dos Campos, São Paulo - Brasil
                        </p>
                    </div>
                    <form className="formulario-contato" id="formulario" onSubmit={enviarWhats}>
                        <div className="grupo-form">
                            <input
                                placeholder="Nome"
                                className="campo-form"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="grupo-form">
                            <textarea
                                placeholder="Digite a sua Mensagem"
                                className="campo-form"
                                id="mensagem"
                                rows="5"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}>
                            </textarea>
                        </div>
                        <button type="submit" className="botao-form">Enviar WhatsApp</button>
                    </form>
                </div>
            </section>

        </main>
    )
}

export default App