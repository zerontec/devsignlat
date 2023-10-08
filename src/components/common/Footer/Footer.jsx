import LogoA from "../LogoA/LogoA";


const Footer = () => {
	return (
<>
<footer className="fc-white">
        <div className="contained row flex-just-center">

          
            <div className="col-quad">
                <LogoA/>
                <p>
                    Our mission is your vision and your mission is to tell
                    us your vision, so that what you envision will become our mission.
                </p>
                <p>
                    We are a placeholder text and yes we are aware of that. We have generated self awareness ever since
                    the beginning of time and space.
                </p>
            </div>
        
            <div className="col-quad">
                <h3 className="ff-damion">Get in touch</h3>
                <a href="#" className="display-block fc-white icon-link mt-10 mb-10">
                    <i className="bi bi-envelope-fill"></i>
                    nonexistentadd@gmail.com
                </a>
                <a href="#" className="display-block fc-white icon-link mt-10 mb-10">
                    <i className="bi bi-telephone-fill"></i>
                    +639123456789
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
                <h3 className="ff-damion">Opening hours</h3>
                <p className="mt-10 mb-10 fw-bold">
                    Monday - Friday:
                    <span className="fw-normal display-block">Closed</span>
                </p>
                <p className="mt-10 mb-10 fw-bold">
                    Saturday:
                    <span className="fw-normal display-block">8:00 - 8:01</span>
                </p>
                <p className="mt-10 mb-10 fw-bold">
                    Sunday:
                    <span className="fw-normal display-block">10:00 - 10:01</span>
                </p>
            </div>
           
            <div className="col-quad">
                <h3 className="ff-damion">Useful Links</h3>
                <a href="index.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Home
                </a>
                <a href="about.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    About
                </a>
                <a href="service.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Service
                </a>
                <a href="industries.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Industries
                </a>
                <a href="blog/blog.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Blog
                </a>
                <a href="career/career.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Career
                </a>
                <a href="contact.html" className="display-block fc-white mt-5 mb-5">
                    <i className="bi bi-chevron-compact-right"></i>
                    Contact
                </a>
            </div>
           
        </div>
        <div className="copy ta-center fc-white">
            <small>&copy; Your site - Copyright 2023</small>
        </div>
    </footer>


</>


	)
};

Footer.propTypes = {};

export default Footer;