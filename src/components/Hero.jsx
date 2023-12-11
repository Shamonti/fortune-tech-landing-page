import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Calendar from '../assets/calendar.png';

function Hero() {
  return (
    <section className='hero-section'>
      <Container className='ps-md-5 ps-3'>
        <Row>
          <Col md={12} lg={8}>
            <h1>
              Innovate. Create. Elevate Transforming Ideas <br></br> with{' '}
              <span className='green-text'>Fortune Tech</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={7}>
            <p>
              Empower Your Business with Fortune Tech Limited. Unlock
              cutting-edge solutions to outpace competition. Specializing in
              innovation for growth and efficiency, our skilled developers craft
              bespoke, high-quality software. Stay at the forefront with our
              commitment to the latest technologies, ensuring access to the most
              advanced solutions for your success.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className='custom-btn'>
              <img src={Calendar} />
              &nbsp; Schedule Appointment
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
