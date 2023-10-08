/* eslint-disable react/no-unescaped-entities */







const More = () => {


return (

<>
<section className="bg-primary-foot ta-center">
            <h2 className="section-title ff-damion bg-primary-foot"  style={{ fontSize: '2.8125rem',
    fontWeight: 700,
    
  
    marginBottom: 0,
    paddingBottom: '10px'}}>Servicios</h2>
            <div className="contained">
                <h4 className="col-wide mlmr-a">
                Servicios Destacados:
                </h4>
            </div>
            <div className="contained row flex-just-center">
                <div className="col-full">
                   
                </div>
                <div className="col-tri">
                    <i className="bi bi-stars fs-h2"></i>
                    <h3 className="mt-10 ff-damion">Apliciones Web</h3>
                    <p>
                    Creamos aplicaciones Web , Moviles 
                    intuitivas y de alto rendimiento que cautivan a los usuarios y expanden su presencia en el mercado digital.
                    </p>
                </div>
                <div className="col-tri">
                    {/* <i className="bi bi-diagram-3 fs-h2"></i> */}
                    <h3 style={{paddingTop:40}} className="mt-10 ff-damion">Diseño de Experiencia de Usuario </h3>
                    <p>
                    Elevamos la experiencia del usuario a través de interfaces atractivas y funcionales que garantizan una interacción intuitiva y satisfactoria con su plataforma.
                    </p>
                </div>
                <div className="col-tri">
                    <i className="bi bi-code-slash fs-h2"></i>
                    <h3 className="mt-10 ff-damion">Desarrollo </h3>
                    <p>
                        Desarrollo de soluciones digitales a medida quiere hacer crecer su negocio
                        necesita las herramientas necesarias 
                    </p>
                </div>
            </div>
            <a href="service.html" className="btn-bg2 border-round mt-25">
                Muchos más Servicios
            </a>
        </section>


</>



)





}


export default More;