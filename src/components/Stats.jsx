import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

function Stats() {
  return (
    <section className='section-stats section-padding'>
      <Container>
        <Row>
          <Col>
            <h2 className='heading'>
              We are in <span className='green-text'>numbers</span>
            </h2>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col>
            <Card>
              <CardBody>
                <div>
                  <CountUp delay={3} end={7} />+
                </div>
                <p>Years of Experience</p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <div>
                  <CountUp delay={3} end={7} />+
                </div>
                <p>Expert Engineers</p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <div>
                  <CountUp delay={3} end={5} />+
                </div>
                <p>LTUs Are Using</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col>
            <Card>
              <CardBody>
                <div>
                  <CountUp delay={3} end={250} />+
                </div>
                <p>Happy Companies</p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <div>
                  <CountUp delay={3} end={7} />+
                </div>
                <p>Project Completed</p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <div>
                  <CountUp delay={3} end={250} />
                  K+
                </div>
                <p>People Are Using</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Stats;
