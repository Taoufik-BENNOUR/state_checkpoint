import React from 'react';
import { Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';

const Header = () => {
  return <div><Navbar style={{backgroundColor:'rgb(204, 0, 255,0.8)',position:'fixed',left:'0',right:'0',zIndex:'1',top:'0'}} expand="lg">
  <Container>
    <Navbar.Brand href="#home">Students</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar></div>;
};

export default Header;
