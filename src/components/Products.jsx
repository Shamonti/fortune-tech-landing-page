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
          <p className='sub-heading'>Top notch services we offer</p>
        </Row>
        <Row className='pt-3'>
          <Col>
            <Card>
              <Card.Img variant='top' src={CareMeLogo} />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant='top' src={FortuneLogo} />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant='top' src={ProtonLogo} />

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

export default Products;
