import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import ProjectModal from './ProjectModal';
import Project from './Project';

import projects from '../data/projects'

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
