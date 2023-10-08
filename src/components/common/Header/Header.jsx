/* eslint-disable react/no-unescaped-entities */

import LogoA from "../LogoA/LogoA";


const Header = () => {
	return (
<>

<section className="hero-banner">
            <div className="hero-contained">
                <div className="hero-title fc-white">
                   <LogoA/>
                    <p className="fs-h4 fw-normal" style={{
    fontSize: '2.34rem',
    fontWeight: 700,
    color: "white",
    marginBottom: '10px',
    lineHeight: 1.2,
    textTransform: 'capitalize'
}}>
                    Soluciones Digitales a tu Alcance 
                       
                    </p>
                    <a href="#about" className="btn-bg2 border-round mt-20">
                        Contactanos <i className="bi bi-chevron-compact-right"></i>
                    </a>
                </div>
            </div>
            <div className="hero-socials">
                <a href="#" className="mt-a icon-link" aria-label="Follow us on facebook">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="icon-link mt-10" aria-label="Follow us on instagram">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="icon-link mt-10" aria-label="Follow us on twitter">
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="icon-link mt-10" aria-label="Follow us on youtube">
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
        </section>
   


</>



	)
};

Header.propTypes = {};

export default Header;