import { Col, Container, Row } from 'react-bootstrap';
import ImageSlider from './ImageSlider';

function Brands() {
  return (
    <section className='section-brands section-padding'>
      <Container>
        <Row>
          <Col>
            <h2 className='heading'>Trusted by the major brands</h2>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col md={9}>
            <ImageSlider />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Brands;
