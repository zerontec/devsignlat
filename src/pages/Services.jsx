/* eslint-disable react/no-unescaped-entities */
import imagenTeam from '../../art/uiux.jpg';
import imagenLapto from '../../art/lapto.jpg';
import imagenMarketing from '../../art//marketing.jpg';


const Services = ()=> {


return (

<>

<section className="contained">
            <h2 className="section-title ff-damion"  style={{ fontSize: '2.8125rem',
    fontWeight: 700,
    
  
    marginBottom: 0,
    paddingBottom: '10px'}}> Soluciones</h2>
            <p className="col-wide mlmr-a ta-center pchange">
                Conoce algunas de nuestras soluciones, lleva tu emprendimiento a otro nivel 
            </p>
            <div className="row flex-just-center">
                <div className="col-tri">
                    <article className="card-team">
                        <img src={imagenTeam} alt=""/>
                        <h3 className="title ff-damion">UI UX</h3>
                        <div className="info">
                            <h3 className="ff-damion">Experiencia de Usuario</h3>
                            <p>
                                When I gaze upon the stars' gentle embrace, I glimpse a universe of 
                                dreams slipping into space, but dreamers must awaken to a stark and empty place.
                            </p>
                            <p>
                                Whispering in the language of forgotten dreams, I hear the echoes of 
                                desires lost in silent streams.
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-tri">
                    <article className="card-team">
                        <img src={imagenLapto}  alt=""/>
                        <h3 className="title ff-damion">Desarrollo Software</h3>
                        <div className="info">
                            <h3 className="ff-damion">Frontend Developer</h3>
                            <p>
                                When I gaze upon the stars' gentle embrace, I glimpse a universe of 
                                dreams slipping into space, but dreamers must awaken to a stark and empty place.
                            </p>
                            <p>
                                Whispering in the language of forgotten dreams, I hear the echoes of 
                                desires lost in silent streams.
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-tri">
                    <article className="card-team">
                        <img src={imagenMarketing}  alt=""/>
                        <h3 className="title ff-damion">Marketing Digital</h3>
                        <div className="info">
                            <h3 className="ff-damion">Frontend Developer</h3>
                            <p>
                                When I gaze upon the stars' gentle embrace, I glimpse a universe of 
                                dreams slipping into space, but dreamers must awaken to a stark and empty place.
                            </p>
                            <p>
                                Whispering in the language of forgotten dreams, I hear the echoes of 
                                desires lost in silent streams.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
            <br/>
        </section>

</>

)



}


export default Services;