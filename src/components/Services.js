import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='services'>
      <Container>
        <h1 className='py-5'>My services</h1>
        <Row>
          <Col md={3} sm={6}>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className="icon" icon={faDesktop} size='2x' />
              </div>
              <h3>Web design</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className="icon" icon={faFileCode} size='2x' />
              </div>
              <h3>Web Develpment</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className="icon" icon={faFacebookF} size='2x' />
              </div>
              <h3>Facebbok Ads SMM</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className="icon" icon={faGoogle} size='2x' />
              </div>
              <h3>Google Ads</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
