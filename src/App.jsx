import foto from './assets/foto.jpg';
import curriculo from './assets/curriculo.pdf';
import ToDoList from './projects/ToDoList.jsx';
import CadastroUsuario from './projects/CadastroUsuario.jsx';
import Calculadora from './projects/Calculadora.jsx';
import PrevisaoTempo from './projects/PrevisaoTempo.jsx';
import { useState, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { HiOutlineViewList } from "react-icons/hi";

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import FatalSystem from './projects/FatalSystem.jsx';
import Portfolio from './projects/Portfolio.jsx';

const App = () => {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [slidesPerView, setSlidesPerView] = useState(3);

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
                            <a href="#inicio" className="menu-nome">&lt;Liedson<span className="nome-destaque">Silva/&gt;</span></a>
                        </li>

                        <div className="dropdown-mobile" tabIndex={0}>
                            <button className="menu-mobile"><HiOutlineViewList /></button>
                            <ul className="dropdown-menu">
                                <li><a href="#sobre" className="menu">Sobre mim</a></li>
                                <li><a href="#projetos" className="menu">Projetos</a></li>
                                <li><a href="#skills" className="menu">Conhecimentos</a></li>
                                <li><a href="#contatos" className="menu">Fale comigo</a></li>
                            </ul>
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

                        <div className="container-logotipo">
                            <a href="https://github.com/liedson-silva" target="_blank" aria-label="GitHub" className="logotipo">
                                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48
                                    0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47
                                    -.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65
                                    .35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25
                                    -.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.7.115
                                    2.5.338 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59
                                    1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.012 2.42-.012 2.75
                                    0 .26.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/liedson-silva-20b78b295" target="_blank" aria-label="LinkedIn"
                                className="logotipo">
                                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001 2.5 2.5 0 01.001-5.001zM3 8.75h4v12.75H3V8.75zm7
                                    0h3.66v1.75h.05c.51-.96 1.76-1.97 3.63-1.97 3.88 0 4.59 2.56 4.59 5.9v6.02h-4v-5.34c0-1.28-.02-2.92-1.78-2.92-1.78
                                    0-2.05 1.39-2.05 2.83v5.43h-4V8.75z" />
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/liedsonprx" target="_blank" aria-label="Instagram" className="logotipo">
                                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0
                                    012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25
                                    4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0
                                    100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div >
                        <dotlottie-wc src="https://lottie.host/3c3c339b-fd9e-4914-ba45-f133ff64f8c5/duQvqEvV2w.lottie" className="animacao-cabecalho" speed="1" autoplay loop></dotlottie-wc>
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
                            Tenho 21 anos, graduando no curso de Análise e desenvolvimento de sistemas pela UNIP. Desenvolvo software, páginas e sistemas web responsívos de layout atrativo. Tenho uma trajetória de estudos com cerca de 2 anos na área de desenvolvimento. Ainda
                            sem experiência profissional, me dedico a projetos pessoais e cursos
                            para me preparar para novas oportunidades.
                        </p>
                        <button className="botao-cv" onClick={() => window.open(curriculo, '_blank')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="9" y1="13" x2="15" y2="13" />
                                <line x1="9" y1="17" x2="15" y2="17" />
                            </svg>
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
                <div className="skills-grid">
                    <ul>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                                title="Node.js" width="50px" />Node.js
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                                title="Express.js" width="50px" />Express.js
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="50px" />MongoDB
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="React.js"
                                width="50px" />React.js
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                title="Tailwind" width="50px" />Tailwind
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" title="HTML"
                                width="50px" />HTML
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" title="CSS"
                                width="50px" />CSS
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                title="JavaScript" width="50px" />JavaScript
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" title="C"
                                width="50px" />C
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" title="C#"
                                width="50px" />C#
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" title="Git"
                                width="50px" />Git
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" title="GitHub"
                                width="50px" />GitHub
                        </li>
                        <li className="skills-box">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" title="Figma"
                                width="50px" />Figma
                        </li>
                    </ul>
                </div>
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