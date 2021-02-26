import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

import project1 from '../images/projects/city-guide-app.png';
import project2 from '../images/projects/mern-blog.png';
import project3 from '../images/projects/netflix.png';
import project4 from '../images/projects/portfolio.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';





const Projects = () => {
  return (
    <div className='projects'>
      <Container>
        <h1 className='text-uppercase text-center py-5'>Projects</h1>
        <Row className='projects-box justify-content-center'>
          <div className='projects-box-image'>
            <Image src={project1} className='projects-box-image-img' alt='' />
            <div className='overflow'></div>
            <FontAwesomeIcon icon={faSearchPlus} className="projects-box-image-icon"  />
          </div>
          <div className='projects-box-image'>
            <Image src={project2} className='projects-box-image-img' alt='' />
            <div className='overflow'></div>
            <FontAwesomeIcon icon={faSearchPlus} className="projects-box-image-icon"  />
          </div>

          <div className='projects-box-image'>
            <Image src={project3} className='projects-box-image-img' alt='' />
            <div className='overflow'></div>
            <FontAwesomeIcon icon={faSearchPlus} className="projects-box-image-icon"  />
          </div>

          <div className='projects-box-image'>
            <Image src={project4} className='projects-box-image-img' alt='' />
            <div className='overflow'></div>
            <FontAwesomeIcon icon={faSearchPlus} className="projects-box-image-icon"  />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
