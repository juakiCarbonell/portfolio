import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import ProjectModal from './ProjectModal';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'City Guide',
    description: 'This is an awesome project',
    img: 'city-guide-app.png',
  },
  {
    id: 2,
    title: 'Mern Blog',
    description: 'This is an awesome project',
    img: 'mern-blog.png',
  },
  {
    id: 3,
    title: 'Netflix',
    description: 'This is an awesome project',
    img: 'netflix.png',
  },
  {
    id: 4,
    title: 'Portflio',
    description: 'This is an awesome project',
    img: 'portfolio.png',
  },
];

const Projects = () => {
  const [show, setShow] = useState(false);
  const [projectInModal, setProjectInModal] = useState(null);

  const handleClose = () => {
    setShow(false);
    setProjectInModal(null);
  };

  const handleShow = (id) => {
    const pro = projects.find((project) => project.id === id);
    setProjectInModal(pro);
    setShow(true);
  };
  return (
    <div className='projects'>
      <Container>
        <h1 className='text-uppercase text-center py-5'>Projects</h1>
        <Row className='projects-box justify-content-center'>
          {projects.map((project) => (
            <Project
              key={project.id}
              project={project}
              handleShow={handleShow}
            />
          ))}
        </Row>
      </Container>
      <ProjectModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        project={projectInModal}
      />
    </div>
  );
};

export default Projects;
