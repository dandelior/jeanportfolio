import Head from 'next/head'
import Styles from '../parts/styles'
import Header from '../parts/header'
import HeroIndex from '../parts/hero-index'
import PortfolioGrid from '../parts/portfolio-grid'
import Footer from '../parts/footer'

const Home = () => (
  <div className="container">
    <Head>
      <title>Jean Gutierrez — Diseñadora en Comunicación Visual</title>
      <Styles />
      <link rel="stylesheet" href="/css/app.css" />
    </Head>

    <Header/>
    <HeroIndex/>
    <PortfolioGrid/>
    <Footer/>
  </div>
)

export default Home
