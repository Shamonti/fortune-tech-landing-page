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
                &nbsp; 6th floor
              </li>
              <li>
                <img src={Mail} />
                &nbsp; 6th floor
              </li>
              <li>
                <img src={Phone} />
                &nbsp; 6th floor
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Our Products</h5>
            <ul className='list-unstyled'>
              <li>
                <img src={Arrow} /> &nbsp; Proton
              </li>
              <li>
                <img src={Arrow} /> &nbsp; Proton
              </li>
              <li>
                <img src={Arrow} /> &nbsp; Proton
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Useful Links</h5>
            <ul className='list-unstyled'>
              <li>
                <img src={Arrow} /> &nbsp; Proton
              </li>
              <li>
                <img src={Arrow} /> &nbsp; Proton
              </li>
              <li>
                <img src={Arrow} /> &nbsp; Proton
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Opening Hours</h5>
          </Col>
        </Row>
        <hr></hr>
        <Row className='text-ceter'>
          <Col>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum dicta nam, consequuntur, quasi accusamus consectetur
              distinctio obcaecati natus accusantium id fuga tempore. Dolorum
              rerum eius doloribus temporibus? Quia, similique dolor?
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
