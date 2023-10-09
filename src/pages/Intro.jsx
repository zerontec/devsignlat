/* eslint-disable react/no-unescaped-entities */


import imagenChico from '../assets/images/profes.png';
import imagenChica from '../assets/images/chica.png';
import blob from '../../svg/blob.svg';



const Intro = () => {

return (


<>

<section className="contained row" id="about" >
            <h2 className="section-title ff-damion" style={{ fontSize: '2.8125rem',
    fontWeight: 700,
    
  
    marginBottom: 0,
    paddingBottom: '10px'}}>La Empresa</h2>
            <div className="col-balance">
                <span className="fc-primary fs-h2">
                Transformando Ideas en Soluciones Digitales Innovadoras
                </span>
                <p className="pchange">
                Somos una empresa apasionada por la creación de soluciones tecnológicas de vanguardia. Nuestro equipo de expertos en desarrollo de software se dedica a convertir ideas en productos digitales que impulsan el éxito de nuestros clientes.
                </p>
                <p className="pchange">
                Con un enfoque centrado en la innovación, colaboramos estrechamente con cada cliente para entender sus necesidades y objetivos. Ya sea que necesite una aplicación móvil intuitiva, un sistema de gestión eficiente o una plataforma web escalable, 
                estamos aquí para hacerlo realidad.
                </p>
                <p className="pchange">
                Nuestro compromiso con la excelencia y la calidad nos ha convertido en líderes en la industria. Descubra cómo podemos llevar su proyecto al siguiente nivel y hacerlo destacar en el competitivo mundo digital.








                </p>
                {/* <p>
                    Yes we are a top notch high quality, another top notch and high I wonder where we are 
                    now, in space probably.
                </p> */}
                <a href="about.html" className="btn-bg1 mt-25 border-round">Quiere saber más</a>
            </div>
            <>
            <div className="col-balance">
                <div className="sticky-img-dual">
                    <img src={imagenChico} alt="chico desarrollando"/>
                    <img src={blob} alt="" className="blob" />
                    <img src={imagenChica} alt=""/>
                </div>
            </div>
            <div className="sticky-img-dual-spacer"></div>
            </>
        </section>


</>
       
)


};

export default Intro;