import Head from 'next/head'
import Styles from '../parts/styles'
import Header from '../parts/header'
import HeroItem from '../parts/hero-item'
import Footer from '../parts/footer'

const Item = () => (
    <div className="container">
        <Head>
            <title>Item — Jean Gutierrez</title>
            <Styles />
            <link rel="stylesheet" href="/css/app.css" />
        </Head>

        <Header/>
        <HeroItem />

        <section className="portfolio-content">
			<section className="portfolio-head">
				<div className="head-title">
					<p>
						Diseño editorial
					</p>
					<h2>Manual de sostenibilidad para CCHC</h2>
				</div>
				<div className="head-description">
                    <p>
                        Proyecto realizado para la Cámara Chilena de la Construcción. El encargo era principalmente ordenar la información de ocho etapas sobre los estándares de sostenibilidad de las empresa pertenecientes a la CCHC. Cada etapa, tiene el nombre del pilar y este cuenta con una paleta monocromática, para diferenciarlas entre ellas.
                    </p>
				</div>
			</section>
			<section className="portfolio-body">
                <img className="alignnone wp-image-262 size-full" src="https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1.png" alt="" width="2160" height="1440" srcset="https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1.png 2160w, https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1-300x200.png 300w, https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1-768x512.png 768w, https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1-1024x683.png 1024w" sizes="(max-width: 2160px) 100vw, 2160px" />
			</section>
		</section>

        <a className="portfolio-next-wrapper" href="https://jeangutierrez.com/?post_type=portafolio&amp;p=251">
			<section className="portfolio-next">
				<p>Siguiente Proyecto</p>
				<h2>Proyecto Ayllu Solar Educación</h2>
			</section>
		</a>

        <Footer/>
    </div>
)

export default Item;