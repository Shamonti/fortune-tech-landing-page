import { Container, Row, Col } from 'react-bootstrap';
import GoLogo from '../assets/go_logo.png';
import DotnetLogo from '../assets/dotnet_logo.png';
import FlutterLogo from '../assets/flutter_logo.png';
import AngularLogo from '../assets/angular_logo.png';
import PythonLogo from '../assets/python_logo.png';
import ReactLogo from '../assets/react_logo.png';
import VueLogo from '../assets/vuejs_logo.png';
import AzureLogo from '../assets/azure_logo.png';
import IonicLogo from '../assets/ionic_logo.png';
import ReactNativeLogo from '../assets/react_native_logo.png';

function Technology() {
  return (
    <section className='section-technology section-padding'>
      <Container>
        <Row>
          <Col md={10}>
            <h2 className='heading'>Technology We Used</h2>
            <p className='pt-3 pe-5'>
              Stay ahead in the competitive landscape with Fortune Tech. Our
              technical expertise ensures your company&apos;s success through
              custom software development. We leverage the latest technology for
              outsourcing, delivering solutions that propel your business
              forward
            </p>
          </Col>
        </Row>
        <Row className='pt-3'>
          <Col>
            <img src={GoLogo} />
          </Col>
          <Col>
            <img src={DotnetLogo} />
          </Col>
          <Col>
            <img src={FlutterLogo} />
          </Col>
          <Col>
            <img src={AngularLogo} />
          </Col>
          <Col>
            <img src={PythonLogo} />
          </Col>
        </Row>
        <Row className='pt-3'>
          <Col>
            <img src={ReactLogo} />
          </Col>
          <Col>
            <img src={VueLogo} />
          </Col>
          <Col>
            <img src={AzureLogo} />
          </Col>
          <Col>
            <img src={IonicLogo} />
          </Col>
          <Col>
            <img src={ReactNativeLogo} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Technology;
