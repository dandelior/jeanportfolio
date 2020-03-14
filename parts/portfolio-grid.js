import Link from 'next/link'

const PortfolioGrid = () => (
    <>
        <div className="portfolio-grid-wrapper" id="portfolio">
            <section className="portfolio-grid">


                        <Link href="/item">
                            <a>
                                <div className="portfolio-grid-item" style={{ backgroundImage: 'url(../img/front.jpg)' }}>
                                    <div className="portfolio-grid-hover">
                                        <div className="hover">
                                            <h4>Titulo</h4>
                                            <p>
                                                no sé que va aquíii
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>


            </section>
        </div>
    </>
)

export default PortfolioGrid;