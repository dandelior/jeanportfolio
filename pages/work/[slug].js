import Head from 'next/head'
import Link from 'next/link'
import Styles from '../../parts/styles'
import Header from '../../parts/header'
import Footer from '../../parts/footer'
import client from '../../client'
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Item = (props) => {

	const { 
        title, 
		workType, 
		slug,
		headerType,
		featuredImage,
		description,
        content,
		createdAt,
		trabajos
    } = props

    return (
		<div className="container">
			<Head>
				<title>{title} — Jean Gutierrez</title>
				<Styles />
				<link rel="stylesheet" href="/css/app.css" />
			</Head>

			<Header headerType={headerType} />
			
			<section className="hero">
				<div class="parallax" style={{ backgroundImage: 'url(' + urlFor(featuredImage).url() + ')' }}></div>
			</section>

			<section className="portfolio-content">
				<section className="portfolio-head">
					<div className="head-title">
						<p>
							{workType}
						</p>
						<h2>
							{title}
						</h2>
					</div>
					<div className="head-description">
						<BlockContent blocks={description} {...client.config()} />
					</div>
				</section>
				<section className="portfolio-body">
					<BlockContent blocks={content} {...client.config()} />
					{/* <img className="alignnone wp-image-262 size-full" src="https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1.png" alt="" width="2160" height="1440" srcset="https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1.png 2160w, https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1-300x200.png 300w, https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1-768x512.png 768w, https://jeangutierrez.com/wp-content/uploads/2019/08/PortadaRevistaCCHC-1-1024x683.png 1024w" sizes="(max-width: 2160px) 100vw, 2160px" /> */}
				</section>
			</section>

			{trabajos.map(
				({ title = '', slug = '' }) =>
				{
					return (
						<Link href="/work/[slug]" as={`/work/${slug.current}`}>
							<a className="portfolio-next-wrapper">
								<section className="portfolio-next">
									<p>Siguiente Proyecto</p>
									<h2>{title}</h2>
								</section>
							</a>
						</Link>
					)
				}
			)[0]}

			<Footer/>
		</div>
	)
}

const query = groq`*[_type == "trabajo" && slug.current == $slug][0]{
    title, 
	workType, 
	headerType, 
	slug,
	featuredImage,
	description,
	content,
    "createdAt": _createdAt,
    "trabajos": *[_type == "trabajo" && _createdAt < (^._createdAt)] | order(_createdAt desc) { title, _createdAt, slug }
}`

Item.getInitialProps = async function(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = "" } = context.query
	return await client.fetch(query, {
		slug
	})
}

export default Item;