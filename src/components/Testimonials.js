import React from 'react';

import { Container } from 'react-bootstrap';

import TestimonialsCarousel from './TestimonialsCarousel';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h1>My happy Clients</h1>
      <Container>
        <div className='testimonials-content'>
          <TestimonialsCarousel />
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
