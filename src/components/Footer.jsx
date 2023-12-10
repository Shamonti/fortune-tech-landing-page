import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Column 1</h5>
            <ul className='list-unstyled'>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col md={4}>
            <h5>Column 2</h5>
            <ul className='list-unstyled'>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col md={4}>
            <h5>Column 3</h5>
            <ul className='list-unstyled'>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              {/* Add more items as needed */}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
