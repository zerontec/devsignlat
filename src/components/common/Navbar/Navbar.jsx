import Logo from "../Logo/Logo";



const Navbar = () => {
	return (

<>
<nav>
            <div className="contained">
                <a href="index.html" className="logo fc-primary ff-damion row flex-alig-center">
                   <Logo/> 
                </a>
                <input type="checkbox" name="tablet-mobile-menu" className="tab-mob-menu" aria-label="tablet and mobile menu"/>
                <div className="navigation-container">
                    <a href="index.html" className="btn-bg1 border-round">Home</a>
                    <a href="about.html" className="btn-bg1 border-round">About</a>
                    <a href="service.html" className="btn-bg1 border-round">Service</a>
                    {/* <a href="industries.html" className="btn-bg1 border-round">Industries</a>
                    <a href="blog/blog.html" className="btn-bg1 border-round">Blog</a> */}
                    <a href="career/career.html" className="btn-bg1 border-round">Career</a>
                    <a href="contact.html" className="btn-bg1 border-round">Contact Us</a>
                </div>
            </div>
        </nav>
        <a href="#" className="btn-back-to-top" aria-label="Back to top button">
            <i className="bi bi-chevron-up"></i>
        </a>

</>

	)
};



Navbar.propTypes = {};

export default Navbar;