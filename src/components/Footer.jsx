import { Container, Row, Col } from 'react-bootstrap';
import Map from '../assets/map.png';
import Mail from '../assets/mail.png';
import Phone from '../assets/phone.png';
import Arrow from '../assets/arrow.png';

function Footer() {
  return (
    <footer className='section-padding mt-5'>
      <Container>
        <Row className='pb-3'>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className='list-unstyled'>
              <li>
                <img src={Map} />
                &nbsp; 6th floor, Madina Shopping Mall, Bosila City Developers,
                Dhaka 1207
              </li>
              <li>
                <img src={Mail} />
                &nbsp; info@caremebd.com
              </li>
              <li>
                <img src={Phone} />
                &nbsp; 09678-008899
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Our Products</h5>
            <ul className='list-unstyled'>
              <li>
                <img src={Arrow} /> &nbsp; Proton Commerce
              </li>
              <li>
                <img src={Arrow} /> &nbsp; Proton Inventory Management
              </li>
              <li>
                <img src={Arrow} /> &nbsp; Proton Mobile Apps
              </li>
              <li>
                <img src={Arrow} /> &nbsp; Caremebd commerce
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Useful Links</h5>
            <ul className='list-unstyled'>
              <li>
                <img src={Arrow} /> &nbsp; About us
              </li>
              <li>
                <img src={Arrow} /> &nbsp; contact us
              </li>
              <li>
                <img src={Arrow} /> &nbsp; FAQ
              </li>
              <li>
                <img src={Arrow} /> &nbsp; Career
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Opening Hours</h5>
          </Col>
        </Row>
        <hr></hr>
        <Row className='text-center pb-5'>
          <Col className='pb-5'>
            <span>© 2023 Fortune Tech Limited. All Rights Reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
