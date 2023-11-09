import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css"
import Logout from './Logout';
import Madrid from './card';
import App from './App';

function NavScrollExample() {
  return (
    <div className="me-auto">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="App"><h1>JUBELEG</h1>
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="cart"><h5>Cart</h5></Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown"> <h5>
              <NavDropdown.Item href="#action3"><h5>Profile</h5></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><h5>Settings</h5></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Logout">
                Log Out 
              </NavDropdown.Item>
              </h5>
            </NavDropdown>
            
          </Nav>
          <Form className="App">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={Madrid}>Search</Button> 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  );
};

export default (NavScrollExample)