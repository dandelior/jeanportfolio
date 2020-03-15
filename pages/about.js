import Head from 'next/head'
import Styles from '../parts/styles'
import Header from '../parts/header'
// import Hero from '../parts/hero'
// import PortfolioGrid from '../parts/portfolio-grid'
import HeroSobremi from '../parts/hero-sobremi'
import Footer from '../parts/footer'

const About = () => (
    <div className="container">
        <Head>
        <title>Sobre mi — Jean Gutierrez</title>
        <Styles />
        <link rel="stylesheet" href="/css/app.css" />
        </Head>

        <Header/>
        <HeroSobremi />

        <div className="bio-wrapper">
			<section className="bio">
                <h4 className="bio-highlight">
                    El diseño es más que solo decoración, es contenido y comunica, creo que esa es la mejor forma de describir&nbsp;<a className="link-contact" href="/#portfolio">lo que hago</a>.
                </h4>
                <h4 className="bio-highlight">
                    Intento comunicar y provocar algo en las personas, a través de la experiencia. Soy amante de los desafíos, me gusta aprender cosas nuevas, entendiendo que en esta disciplina siempre debemos estar creciendo. Soy directa, responsable, entusiasta y muy proactiva.
                </h4>
                <h4 className="bio-highlight">
                    Actualmente estoy disponible para nuevos proyectos. Puedes contactarme a&nbsp;<a className="link-contact" href="mailto:hola@jeangutierrez.com">hola@jeangutierrez.com</a>
                </h4>
			</section>
		</div>

        <div className="about-details-wrapper">
            <section className="about-details">
                <div className="details-experience">
                    <h4>Experiencia</h4>
                    <h6>Freelance</h6>
                    <p><i>2017 – Ahora</i></p>
                    <p>Diseñadora Gráfica</p>
                    <p>Community Manager&nbsp;</p>
                    <p>Marketing Manager</p>
                    <p>Diseñadora de Interfáz</p>
                    <h6>FMS</h6>
                    <p><i>2016</i></p>
                    <p>Community Manager</p>
                    <p>Diseñadora Gráfica Digital</p>
                    <p>Diseñadora de Interfaces</p>
                    <h6>Radicales</h6>
                    <p><i>2015 – 2016</i></p>
                    <p>Diseñadora gráfica</p>
                    <p>Diseñadora de experiencia</p>
                </div>
                <div className="details-services">
                    <h4>¿Qué Hago?</h4>
                    <p>Dirección de Arte</p>
                    <p>Diseño de Experiencia</p>
                    <p>Diseño de Gráficas publicitarias</p>
                    <p>Branding</p>
                    <p>Packaging</p>
                    <p>Diseño Editorial</p>
                    <p>Marketing Manager</p>
                    <p>Diseño Interfáz</p>

                    <h4 className="second-title">Social</h4>
                    <p><a href="https://www.linkedin.com/in/jeangutierrezi/" target="_blank" rel="noopener">Linkedin</a></p>
                    <p><a href="https://behance.net/jeangutierrez" target="_blank" rel="noopener">Behance</a></p>
                </div>
            </section>
        </div>

        <Footer/>
    </div>
)

export default About;