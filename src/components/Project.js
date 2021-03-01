import React from 'react';
import { Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Project = ({ project, handleShow }) => {
  const { img, id } = project;
  return (
    <div
      key={project.id}
      className='projects-box-image'
      onClick={() => handleShow(id)}
    >
      <Image
        src={require(`../images/projects/${img}`).default}
        className='projects-box-image-img'
        alt=''
      />
      <div className='overflow'></div>
      <FontAwesomeIcon
        icon={faSearchPlus}
        className='projects-box-image-icon'
      />
    </div>
  );
};

export default Project;
