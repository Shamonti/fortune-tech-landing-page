import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Doctor from '../assets/doctor.png';
import Code from '../assets/code.png';
import People from '../assets/people.png';

function About() {
  return (
    <section className='about-section'>
      <Container>
        <Row className='margin'>
          <Col>
            <Card>
              <div className='circle'>
                <Card.Img variant='top' src={Code} />
              </div>
              <Card.Body>
                <Card.Title>Advanced software</Card.Title>
                <Card.Text>
                  We have multiple solutions that are intended to assist
                  businesses in streamlining their operations and increasing
                  efficiency.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div className='circle'>
                <Card.Img variant='top' src={People} />
              </div>
              <Card.Body>
                <Card.Title>Expert Developers</Card.Title>
                <Card.Text>
                  Our expert software developers know how to make high-tech
                  software solutions that can help businesses streamline their
                  operations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div className='circle'>
                <Card.Img variant='top' src={Doctor} />
              </div>
              <Card.Body>
                <Card.Title>Quality Solution</Card.Title>
                <Card.Text>
                  We provide quality solutions to clients that are designed to
                  meet the specific needs of businesses and are built to high
                  standards.
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
