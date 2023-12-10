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
          <Col md={3}>
            <Card>
              <Card.Img variant='top' src={UI} />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant='top' src={Ecommerce} />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant='top' src={App} />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant='top' src={Marketing} />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
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
