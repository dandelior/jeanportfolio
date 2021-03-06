import Head from 'next/head'
import Styles from '../parts/styles'
import Link from 'next/link'
import Header from '../parts/header'
import Footer from '../parts/footer'
import groq from 'groq'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
  const { posts = [] } = props
  return (
    <div className="container">
      <Head>
        <title>Jean Gutierrez — Diseñadora en Comunicación Visual</title>
        <Styles />
        <link rel="stylesheet" href="/css/app.css" />
      </Head>

      <Header/>

      <section className="hero">
        <div className="no-parallax index-hero" style={{ backgroundImage: 'url(../img/_front.jpg)' }}></div>
        <div className="no-parallax index-hero-tablet" style={{ backgroundImage: 'url(../img/_front-m.jpg)' }}></div>
        <div className="no-parallax index-hero-desktop" style={{ backgroundImage: 'url(../img/_front-l.jpg)' }}></div>
      </section>

      <div className="portfolio-grid-wrapper" id="portfolio">
        <section className="portfolio-grid">

          {posts.map (
            ({ title = '', slug = '', featuredImage, workType = '' }) =>
            slug && (
              <Link href="/work/[slug]" as={`/work/${slug.current}`} key={slug.current}>
                  <a>
                      <div className="portfolio-grid-item" style={{ backgroundImage: 'url(' + urlFor(featuredImage).url() + ')' }}>
                          <div className="portfolio-grid-hover">
                              <div className="hover">
                                  <h4>{title}</h4>
                                  <p>
                                      {workType}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </a>
              </Link>
            )
          )}


        </section>
      </div>

      <Footer/>
    </div>
    )
  }

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "trabajo"] | order(_createdAt desc) {title, workType, slug, featuredImage }[0...50]
  `)
})

export default Index
