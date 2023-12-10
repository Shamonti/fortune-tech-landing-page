import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Doctor from '../assets/doctor.png';

function About() {
  return (
    <section className='about-section'>
      <Container>
        <Row className='margin'>
          <Col>
            <Card style={{ width: '18rem' }}>
              <div className='circle'>
                <Card.Img variant='top' src={Doctor} />
              </div>
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
            <Card style={{ width: '18rem' }}>
              <div className='circle'>
                <Card.Img variant='top' src={Doctor} />
              </div>
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
            <Card style={{ width: '18rem' }}>
              <div className='circle'>
                <Card.Img variant='top' src={Doctor} />
              </div>
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

export default About;
