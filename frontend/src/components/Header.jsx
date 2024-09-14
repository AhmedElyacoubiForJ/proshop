import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          {/* Container component to center the content */}
          <Container>
            {/* Navbar.Brand component for the website logo */}
            <Navbar.Brand href="/">ProShop</Navbar.Brand>
            {/* Navbar.Toggle component for toggling the navbar on small screens */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* Navbar.Collapse component for collapsing the navbar on small screens */}
            <Navbar.Collapse id="basic-navbar-nav">
              {/* Nav component for navigation links */}
              <Nav className="ms-auto">
                {/* Nav.Link component for the cart link */}
                <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
                <Nav.Link href="/login"><FaUser /> Sign In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;