import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CareMeLogo from '../assets/care_me_logo.png';
import FortuneLogo from '../assets/logo.png';
import ProtonLogo from '../assets/proton_technology_logo.png';

function Products() {
  return (
    <section className='products-section section-padding'>
      <Container>
        <Row>
          <h2 className='heading'>Exclusive Products</h2>
          <p className='sub-heading'>
            Unleash the Power of Advanced Technology
          </p>
        </Row>
        <Row className='pt-3'>
          <Col md={12} className='pb-4'>
            <Card>
              <Card.Img variant='top' src={CareMeLogo} />

              <Card.Body>
                <Card.Title>Fortune Commerce</Card.Title>
                <Card.Text>
                  Fortune tech offers resource augmentation for businesses,
                  providing skilled professionals to enhance your team&apos;s
                  capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className='pb-4'>
            <Card>
              <Card.Img variant='top' src={FortuneLogo} />

              <Card.Body>
                <Card.Title>Fortune Inventory</Card.Title>
                <Card.Text>
                  Fortune tech offers resource augmentation for businesses,
                  providing skilled professionals to enhance your team&apos;s
                  capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <Card>
              <Card.Img variant='top' src={ProtonLogo} />

              <Card.Body>
                <Card.Title> Mobile apps</Card.Title>
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

export default Products;
