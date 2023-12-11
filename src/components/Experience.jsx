import { Container, Row, Col } from 'react-bootstrap';
import Mockup from '../assets/mockup.png';

function Experience() {
  return (
    <section className='experience-section section-padding'>
      <Container>
        <Row>
          <Col
            sm={12}
            md={6}
            className='d-flex flex-column justify-content-center'
          >
            <h3>
              7 Years of Experience in the{' '}
              <span className='green-text'>
                World of Building World-Class Business Solutions
              </span>
            </h3>
            <p>
              For 7 years, Fortune Tech users have entrusted us to power their
              diverse business units. Our software addresses every concern
              seamlessly. As we expand, new clients choose us for our proven
              trustworthiness. Your success is our legacy, and our commitment to
              reliability stands unwavering.
            </p>
          </Col>
          <Col sm={12} md={6} className='d-flex align-items-center'>
            <img src={Mockup} className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
