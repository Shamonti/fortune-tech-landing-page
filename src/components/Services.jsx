import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import UI from '../assets/ui_ux.png';
import Ecommerce from '../assets/ecommerce.png';
import App from '../assets/mobile_apps.png';
import Marketing from '../assets/digital_marketing.png';

function Services() {
  return (
    <section className='services-section section-padding'>
      <Container>
        <Row>
          <h2 className='heading'>Quality Services</h2>
          <p className='sub-heading'>Top notch services we offer</p>
        </Row>
        <Row className='pt-3'>
          <Col md={6} lg={3} className='pb-4 pb-lg-0'>
            <Card>
              <Card.Img variant='top' src={UI} />
              <Card.Body>
                <Card.Title>UI/UX Design</Card.Title>
                <Card.Text>
                  Fortune tech offers resource augmentation for businesses,
                  providing skilled professionals to enhance your team&apos;s
                  capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className='pb-4 pb-lg-0'>
            <Card>
              <Card.Img variant='top' src={Ecommerce} />

              <Card.Body>
                <Card.Title>E-commerce solution</Card.Title>
                <Card.Text>
                  Fortune tech offers resource augmentation for businesses,
                  providing skilled professionals to enhance your team&apos;s
                  capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className='pb-4 pb-md-0'>
            <Card>
              <Card.Img variant='top' src={App} />

              <Card.Body>
                <Card.Title>Mobile apps development</Card.Title>
                <Card.Text>
                  Fortune tech offers resource augmentation for businesses,
                  providing skilled professionals to enhance your team&apos;s
                  capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant='top' src={Marketing} />

              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  Fortune tech offers resource augmentation for businesses,
                  providing skilled professionals to enhance your team&apos;s
                  capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
