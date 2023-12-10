import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section className='hero-section'>
      <Container className='ps-5'>
        <Row>
          <Col xs={12} md={8}>
            <h1>
              Innovate. Create. Elevate Transforming Ideas <br></br> with{' '}
              <span className='green-text'>Fortune Tech</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              eius vel voluptas deleniti sed facilis reiciendis dicta voluptate
              dolor quod, veritatis cum, sit tenetur voluptatem nobis inventore
              tempore modi? Reiciendis.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error eius vel voluptas deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className='custom-btn'>
              <FontAwesomeIcon icon={faCalendarDays} />
              &nbsp; Schedule Appointment
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
