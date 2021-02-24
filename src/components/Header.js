import React from 'react';

import Typed from 'react-typed';
import Particles from 'react-particles-js';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Particles
        className="header-particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          },
        }}
      />
      <div className='header-info'>
        <h1>Joaquin Carbonell</h1>
        <h3>Front end Developer</h3>
        <Typed
          className='header-typed-text'
          strings={[
            'Team work',
            'Self-taught',
            'Adaptability',
            'Creativity',
            'Reliability',
            'Problem solving',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='#' className='header-main-offer'>
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
