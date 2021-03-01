import React from 'react';
import { Button, Modal, Image } from 'react-bootstrap';

const ProjectModal = ({ show, handleClose, project }) => {
  if (!project) {
    return null;
  }
  const { title, description, img } = project;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className='projects-modal'
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Image
            src={require(`../images/projects/${img}`).default}
            className='projects-modal-img'
            alt=''
          />
        </div>
        <div>{description}</div>
        <b>Github: </b>
        <a
          className='projects-modal-hyper-link'
          onClick={() =>
            window.open('https://github.com/juakiCarbonell/phones/', '_blank')
          }
        >
          https://github.com/juakiCarbonell/phones/
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
