import { Container, Row, Col } from 'react-bootstrap';
import Mockup from '../assets/mockup.png';

function Experience() {
  return (
    <section className='experience-section section-padding'>
      <Container>
        <Row>
          <Col className='d-flex flex-column justify-content-center'>
            <h3>
              title <span className='green-text'>text</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              expedita sequi, et, dolorem at dolor consectetur accusantium
              maxime nisi excepturi, a quo. Saepe itaque quas suscipit quam cum
              possimus nobis?
            </p>
          </Col>
          <Col>
            <img src={Mockup} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
