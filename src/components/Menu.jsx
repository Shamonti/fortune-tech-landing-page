import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';

function Menu() {
  return (
    <Navbar expand='lg' className='bg-white'>
      <Container className='ps-lg-5'>
        <Navbar.Brand href='#home' className='pe-5' active>
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ps-4'>
            <Nav.Link href='#about'>About</Nav.Link>
            <NavDropdown title='Products +' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#product01'>Product 01</NavDropdown.Item>
              <NavDropdown.Item href='#product02'>Product 02</NavDropdown.Item>
              <NavDropdown.Item href='#product03'>Product 03</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Services +' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#service01'>Service 01</NavDropdown.Item>
              <NavDropdown.Item href='#service02'>Service 02</NavDropdown.Item>
              <NavDropdown.Item href='#service03'>Service 03</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <Nav.Link href='#career'>Career</Nav.Link>
            <Nav.Link href='#blog'>Blog</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
