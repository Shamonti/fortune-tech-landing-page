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
          <h2 className='heading'>Technology We Used</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aperiam inventore, non quidem harum qui vero ea, nihil vel quod
            mollitia dolorem iusto aliquam, modi nemo autem sed odio quas?
          </p>
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
