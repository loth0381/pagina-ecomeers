import React from 'react';
import './footer.css';

import { Container,Row,Col, ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';



const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
        <div className='logo'>
        
          <div>
          <h1 className='text-white'>Via siete</h1>
          </div>
        </div>

        <p className='footer__text mt-4'>
          no se que pener que me recomiendas porner por que estoy que peleo con el react y lo unico que quiero poner es un puto textpads y que asjd oaskdop as,l.
        </p>
        </Col>

        <Col lg='3' md='3'className='mb-4'>
          <div className='footer__quick-links'>
          <h4 className='quick__links-title'>Top Category</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Mobile Phones</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Modern Sofa</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Arm Chair</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Smart Watches</Link>
            </ListGroupItem>
          </ListGroup>
          </div>
        </Col>

        <Col lg='2' md='3'className='mb-4'>
        <div className='footer__quick-links'>
          <h4 className='quick__links-title'>Useful Links</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='/shop'>Shop</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/cart'>Cart</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/login'>Login</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Privacy policy</Link>
            </ListGroupItem>
          </ListGroup>
          </div>
          </Col> 

        <Col lg='3' md='4' >
        <div className='footer__quick-links'>
          <h4 className='quick__links-title'>Contact</h4>
          <ListGroup className='footer__contact'>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class='ri-map-pin-line'></i></span>
              <p>Telefonica a dos cuadras,15  asdasd</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class='ri-phone-line'></i></span>
              <p>+51 984666584</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class='ri-mail-line'></i></span>
              <p>chicopalodelacruz0381@gmail.com</p>
            </ListGroupItem>
          </ListGroup>
          </div>
          </Col>
          <Col lg='12'>
          <p className='footer__copyright'>Copyright {year} Henri developed y el que se copie mi codigo cabro</p>

          </Col>
      </Row>
    </Container>

    </footer>
   
  )
}

export default Footer