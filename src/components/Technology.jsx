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
          <Col xs={6} md={3} lg={2} className='pt-3'>
            <img src={GoLogo} className='img-fluid' />
          </Col>
          <Col xs={6} md={3} lg={2} className='pt-3'>
            <img src={DotnetLogo} className='img-fluid' />
          </Col>
          <Col xs={6} md={3} lg={2} className='pt-3'>
            <img src={FlutterLogo} className='img-fluid' />
          </Col>
          <Col xs={6} md={3} lg={2} className='pt-3'>
            <img src={AngularLogo} className='img-fluid' />
          </Col>
          <Col fs-xs-1={2} md={3} lg={2} className='pt-3'>
            <img src={PythonLogo} className='img-fluid' />
          </Col>
        </Row>
        <Row className='pt-3'>
          <Col xs={6} md={3} lg={2}>
            <img src={ReactLogo} className='img-fluid' />
          </Col>
          <Col xs={6} md={3} lg={2}>
            <img src={VueLogo} className='img-fluid' />
          </Col>
          <Col xs={6} md={3} lg={2} className='pt-3 pt-md-0'>
            <img src={AzureLogo} className='img-fluid' />
          </Col>
          <Col xs={6} md={3} lg={2} className='pt-3  pt-md-0'>
            <img src={IonicLogo} className='img-fluid' />
          </Col>
          <Col xs={6} md={3} lg={2} className='pt-3  pt-md-0'>
            <img src={ReactNativeLogo} className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Technology;
