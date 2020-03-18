import Link from 'next/link'

let lastScrollY = 0;
let ticking = false;

// const Header = props => (
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {headerActive: 'noactive'}
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    headerScroll = React.createRef();
    // logoBig = React.createRef();
    // logoSmall = React.createRef();

    handleScroll = () => {
        lastScrollY = window.scrollY;

        if (!ticking && lastScrollY > 200) {
            window.requestAnimationFrame(() => {
              this.headerScroll.current.style.position = 'fixed';
              this.setState ({
                  headerActive: 'active'
              })
            //   this.logoBig.current.style.display = 'none';
            //   this.logoSmall.current.style.display = 'inherit';
              ticking = false;
            });
         
            ticking = true;
        } else {
            window.requestAnimationFrame(() => {
                this.headerScroll.current.style.position = 'nofixed';
                this.setState ({
                    headerActive: 'noactive'
                })
              //   this.logoBig.current.style.display = 'none';
              //   this.logoSmall.current.style.display = 'inherit';
                ticking = false;
              });
        }
    }

    render() {
        return (
            <>
                <header className={this.state.headerActive} ref={this.headerScroll}>
                    <div className={ "header-inner " + this.props.headerType }>

                        <Link href="/">
                            <a className="logo">
                                <svg width="100%" height="100%" ref={this.logoBig} className="logo-big" viewBox="0 0 218 218" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421' }}>
                                    <g id="logo-Jean" transform="matrix(1,0,0,1,-415.582,141.338)">
                                        <rect x="415.582" y="-141.338" width="217.459" height="217.459" style={{ fill: 'none' }}/>
                                        <g id="Capa-1" transform="matrix(1.34195,0,0,1.34195,425.127,-131.792)">
                                            <g>
                                                <g transform="matrix(-0.707109,0.707104,0.707104,0.707109,76.0576,176.289)">
                                                    <rect x="-173.254" y="-76.058" width="204.758" height="4.294"/>
                                                </g>
                                                <g>
                                                    <clipPath id="_clip1">
                                                        <path d="M29.776,129.204L118.047,129.204L118.047,40.374L29.776,129.204Z" clip-rule="nonzero"/>
                                                    </clipPath>
                                                    <g clip-path="url(#_clip1)">
                                                        <g transform="matrix(1,0,0,1,65.6189,126.076)">
                                                            <path d="M0,-84.62L0,-15.044C0,-6.686 -6.686,0 -15.042,0L-16.714,0C-25.072,0 -31.758,-6.686 -31.758,-15.044L-31.758,-31.55L-26.534,-31.55L-26.534,-15.044C-26.534,-9.611 -22.146,-5.224 -16.714,-5.224L-15.042,-5.224C-9.61,-5.224 -5.222,-9.611 -5.222,-15.044L-5.222,-84.62L0,-84.62Z" style={{ fillRule: 'nonzero' }}/>
                                                        </g>
                                                        <g transform="matrix(1,0,0,1,96.4392,46.0536)">
                                                            <path d="M0,74.799C5.432,74.799 9.82,70.412 9.82,64.979L9.82,43.25L-0.836,43.25L-0.836,38.026L15.044,38.026L15.044,64.979C15.044,73.337 8.358,80.023 0,80.023L-1.672,80.023C-10.03,80.023 -16.716,73.337 -16.716,64.979L-16.716,9.82C-16.716,1.462 -10.03,-5.224 -1.672,-5.224L0,-5.224C8.358,-5.224 15.044,1.462 15.044,9.82L15.044,22.983L9.82,22.983L9.82,9.82C9.82,4.387 5.432,0 0,0L-1.672,0C-7.104,0 -11.492,4.387 -11.492,9.82L-11.492,64.979C-11.492,70.412 -7.104,74.799 -1.672,74.799L0,74.799Z" style={{ fillRule: 'nonzero' }}/>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g>
                                                    <clipPath id="_clip2">
                                                        <path d="M19.571,27.893L16.654,119.927L108.743,27.893L19.571,27.893Z" clip-rule="nonzero"/>
                                                    </clipPath>
                                                    <g clip-path="url(#_clip2)">
                                                        <g transform="matrix(1,0,0,1,59.1775,116.799)">
                                                            <path d="M0,-84.62L0,-15.044C0,-6.686 -6.686,0 -15.042,0L-16.714,0C-25.072,0 -31.758,-6.686 -31.758,-15.044L-31.758,-31.55L-26.534,-31.55L-26.534,-15.044C-26.534,-9.611 -22.146,-5.224 -16.714,-5.224L-15.042,-5.224C-9.61,-5.224 -5.222,-9.611 -5.222,-15.044L-5.222,-84.62L0,-84.62Z" style={{ fillRule: 'nonzero' }}/>
                                                        </g>
                                                        <g transform="matrix(1,0,0,1,89.9978,36.7765)">
                                                            <path d="M0,74.799C5.432,74.799 9.82,70.412 9.82,64.979L9.82,43.25L-0.836,43.25L-0.836,38.026L15.044,38.026L15.044,64.979C15.044,73.337 8.358,80.023 0,80.023L-1.672,80.023C-10.03,80.023 -16.716,73.337 -16.716,64.979L-16.716,9.82C-16.716,1.462 -10.03,-5.224 -1.672,-5.224L0,-5.224C8.358,-5.224 15.044,1.462 15.044,9.82L15.044,22.983L9.82,22.983L9.82,9.82C9.82,4.387 5.432,0 0,0L-1.672,0C-7.104,0 -11.492,4.387 -11.492,9.82L-11.492,64.979C-11.492,70.412 -7.104,74.799 -1.672,74.799L0,74.799Z" style={{ fillRule: 'nonzero' }}/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="logo-small" ref={this.logoSmall}>JEAN GUTIERREZ</p>
                            </a>
                        </Link>

                        <nav className="menu">
                            <Link href="/">
                                <a>Inicio</a>
                            </Link>
                            <Link href="/about">
                                <a>Sobre Mi</a>
                            </Link>
                        </nav>

                    </div>
                </header>
            </>
        )
    }
}

export default Header;