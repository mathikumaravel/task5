import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavigationBar() {
  const cartCount = useSelector(state => state.cart.items.reduce((sum, i) => sum + i.quantity, 0));

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/products">ClassicCart</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart <Badge bg="light" text="dark">{cartCount}</Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
