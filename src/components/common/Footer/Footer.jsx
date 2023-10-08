import LogoA from "../LogoA/LogoA";


const Footer = () => {
	return (
<>
<footer className="fc-white">
        <div className="contained row flex-just-center">

          
            <div className="col-quad">
                <LogoA/>
                <p>
                    Nuestra Misión  Potenciar el éxito de nuestros clientes a través de soluciones tecnológicas innovadoras y servicios 
                    de desarrollo de software de vanguardia.
                </p>
                <p>
                    Visión:Ser líderes en la creación de soluciones digitales que transformen industrias y mejoren la vida de las personas en todo el mundo.

                </p>
            </div>
        
            <div className="col-quad">
                <h3 className="ff-damion">Contactanos</h3>
                <a href="#" className="display-block fc-white icon-link mt-10 mb-10">
                    <i className="bi bi-envelope-fill"></i>
                    admin@devsign.lat
                </a>
                <a href="#" className="display-block fc-white icon-link mt-10 mb-10">
                    <i className="bi bi-telephone-fill"></i>
                    +58 286 -9712433 
                    +58 4148825193
                </a>
                <a href="#" className="display-block fc-white icon-link mt-10 mb-10">
                    <i className="bi bi-geo-alt-fill"></i>
                    20th street, Dreamland
                </a>
                <a href="#" className="display-inblock fc-white icon-link mt-20" aria-label="Follow on facebook">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="display-inblock fc-white icon-link" aria-label="Follow on instagram">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="display-inblock fc-white icon-link" aria-label="Follow on twitter">
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="display-inblock fc-white icon-link" aria-label="Follow on youtube">
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
           
            <div className="col-quad">
                <h3 className="ff-damion">horarios</h3>
                <p className="mt-10 mb-10 fw-bold">
                    Lunes - viernes:
                    <span className="fw-normal display-block">08:00 am - 5:00 pm</span>
                </p>
                <p className="mt-10 mb-10 fw-bold">
                    Sabados:
                    <span className="fw-normal display-block">8:00 am - 01:00 pm</span>
                </p>
                <p className="mt-10 mb-10 fw-bold">
                    Domingos:
                    <span className="fw-normal display-block">Cerrado</span>
                </p>
            </div>
           
            <div className="col-quad">
                <h3 className="ff-damion"> Links</h3>
                <a href="index.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Home
                </a>
                <a href="about.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Empresa
                </a>
                <a href="service.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Servicios
                </a>
             
                <a href="blog/blog.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Empleo
                </a>
            
                <a href="contact.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Contactanos
                </a>
            </div>
           
        </div>
        <div className="copy ta-center fc-white" style={{color:"black"}}>
            <small>&copy; https//:www.devsign.lat 2023</small>
        </div>
    </footer>


</>


	)
};

Footer.propTypes = {};

export default Footer;