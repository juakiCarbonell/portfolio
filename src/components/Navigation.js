import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/logo.png';

const Navigation = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home' className='navbar-brand'>
          <img src={logo} className='navbar-logo' alt='React Bootstrap logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span>
            <FontAwesomeIcon icon={faBars} color='#fff' size='2x' />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home' className='navbar-link'>
              Home
            </Nav.Link>
            <Nav.Link href='#about' className='navbar-link'>
              About
            </Nav.Link>
            <Nav.Link href='#projects' className='navbar-link'>
              Projects
            </Nav.Link>
            <Nav.Link href='#contact' className='navbar-link'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
