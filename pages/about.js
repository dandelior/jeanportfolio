import Head from 'next/head'
import Styles from '../parts/styles'
import Header from '../parts/header'
// import Hero from '../parts/hero'
// import PortfolioGrid from '../parts/portfolio-grid'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'
import groq from 'groq';
import HeroSobremi from '../parts/hero-sobremi'
import imageUrlBuilder from '@sanity/image-url';
import Footer from '../parts/footer'
import { render } from 'react-dom'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

let lastScrollY = 0;
let ticking = false;

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    parallaxItem = React.createRef();

    handleScroll = () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
              this.parallaxItem.current.style.top = `${(lastScrollY / 1.5) + 1.5}px`;
              ticking = false;
            });
         
            ticking = true;
        }
    }
    
    render() {

        const { about = [] } = this.props

        return (
            <div className="container">
                <Head>
                <title>Sobre mi — Jean Gutierrez</title>
                <Styles />
                <link rel="stylesheet" href="/css/app.css" />
                </Head>
    
                <Header/>
                
                <section className="hero">
                    <div className="parallax" ref={this.parallaxItem} style={{ backgroundImage: 'url(' + urlFor(about[0].presentationImage).url() + ')' }}></div>
                </section>
    
                <div className="bio-wrapper">
                    <section className="bio">
                        <BlockContent blocks={about[0].bio} {...client.config()} />
                        {/* {console.log(about)} */}
                        {/* <h4 className="bio-highlight">
                            El diseño es más que solo decoración, es contenido y comunica, creo que esa es la mejor forma de describir&nbsp;<a className="link-contact" href="/#portfolio">lo que hago</a>.
                        </h4>
                        <h4 className="bio-highlight">
                            Intento comunicar y provocar algo en las personas, a través de la experiencia. Soy amante de los desafíos, me gusta aprender cosas nuevas, entendiendo que en esta disciplina siempre debemos estar creciendo. Soy directa, responsable, entusiasta y muy proactiva.
                        </h4>
                        <h4 className="bio-highlight">
                            Actualmente estoy disponible para nuevos proyectos. Puedes contactarme a&nbsp;<a className="link-contact" href="mailto:hola@jeangutierrez.com">hola@jeangutierrez.com</a>
                        </h4> */}
                    </section>
                </div>
    
                <div className="about-details-wrapper">
                    <section className="about-details">
                        <div className="details-experience">
                            <h4>Experiencia</h4>
                            <BlockContent blocks={about[0].experiencia} {...client.config()} />
                            {/* <h6>Freelance</h6>
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
                            <p>Diseñadora de experiencia</p> */}
                        </div>
                        <div className="details-services">
                            <h4>¿Qué Hago?</h4>
                            <BlockContent blocks={about[0].quehago} {...client.config()} />
                            {/* <p>Dirección de Arte</p>
                            <p>Diseño de Experiencia</p>
                            <p>Diseño de Gráficas publicitarias</p>
                            <p>Branding</p>
                            <p>Packaging</p>
                            <p>Diseño Editorial</p>
                            <p>Marketing Manager</p>
                            <p>Diseño Interfáz</p> */}
    
                            <h4 className="second-title">Social</h4>
                            <p><a href="https://www.linkedin.com/in/jeangutierrezi/" target="_blank" rel="noopener">Linkedin</a></p>
                            <p><a href="https://behance.net/jeangutierrez" target="_blank" rel="noopener">Behance</a></p>
                        </div>
                    </section>
                </div>
    
                <Footer/>
            </div>
        )
    }
    }

About.getInitialProps = async () => ({
    about: await client.fetch(groq`
      *[_type == "about"] {bio, experiencia, quehago, presentationImage }[0...9]
    `)
  })

// const query = groq`*[_type == "about" && slug.current == $slug][0]{
//     bio, 
// 	experiencia, 
// 	quehago
// }`

// About.getInitialProps = async function(context) {
// 	// It's important to default the slug so that it doesn't return "undefined"
// 	const { slug = "" } = context.query
// 	return await client.fetch(query, {
// 		slug
// 	})
// }

export default About;