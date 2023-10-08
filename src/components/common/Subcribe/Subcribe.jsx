// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Subcribe = () => {
	return (

		<>
		<section className="subscribe bg-primary-foot" style={{backgroundImage: `url('art/devsignS.png')`  }}
			>
            <div className="contained row ta-center">
                <div className="col-balance fc-white">
                    <h3 className="mb-a ff-damion mt-a">Subscribe to our newsletter:</h3>
                </div>
                <div className="col-balance">
                    <form action="#">
                        <input type="email" id="subscribe-email" aria-label="Subscribe to our email news" placeholder="Email" required />
                        <button className="btn-bg2">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
		
		
		</>
	)
};



Subcribe.propTypes = {};

export default Subcribe;