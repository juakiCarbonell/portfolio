import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Image } from 'react-bootstrap';

import avatar1 from '../images/avatars/avatar-1.png';
import avatar2 from '../images/avatars/avatar-2.png';
import avatar3 from '../images/avatars/avatar-3.png';
import avatar4 from '../images/avatars/avatar-4.png';

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <Image src={avatar1} alt='John Doe' />
        <div className='testimonials-carousel'>
          <h3>Jonh Doe 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            voluptatem sint perferendis repudiandae incidunt nesciunt doloribus
            nostrum placeat commodi adipisci porro quae iure at labore
            consequuntur quidem deleniti blanditiis laboriosam!
          </p>
        </div>
      </>
      <>
        <Image src={avatar2} alt='John Doe' />
        <div className='testimonials-carousel'>
          <h3>Jonh Doe 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            voluptatem sint perferendis repudiandae incidunt nesciunt doloribus
            nostrum placeat commodi adipisci porro quae iure at labore
            consequuntur quidem deleniti blanditiis laboriosam!
          </p>
        </div>
      </>
      <>
        <Image src={avatar3} alt='John Doe' />
        <div className='testimonials-carousel'>
          <h3>Jonh Doe 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            voluptatem sint perferendis repudiandae incidunt nesciunt doloribus
            nostrum placeat commodi adipisci porro quae iure at labore
            consequuntur quidem deleniti blanditiis laboriosam!
          </p>
        </div>
      </>
      <>
        <Image src={avatar4} alt='John Doe' />
        <div className='testimonials-carousel'>
          <h3>Jonh Doe 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            voluptatem sint perferendis repudiandae incidunt nesciunt doloribus
            nostrum placeat commodi adipisci porro quae iure at labore
            consequuntur quidem deleniti blanditiis laboriosam!
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
