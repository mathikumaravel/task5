import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, ListGroup, Row, Col } from 'react-bootstrap';
import { removeFromCart, increaseQty, decreaseQty } from '../redux/cratSlice';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <Container className="mt-4">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {items.map(item => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col md={2}><img src={item.image} alt="" height="60" /></Col>
                <Col md={4}>{item.title}</Col>
                <Col md={2}>${item.price}</Col>
                <Col md={2}>
                  <Button size="sm" onClick={() => dispatch(decreaseQty(item.id))}>−</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button size="sm" onClick={() => dispatch(increaseQty(item.id))}>+</Button>
                </Col>
                <Col md={2}>
                  <Button variant="danger" size="sm" onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <h4 className="mt-4">Total: ${total}</h4>
    </Container>
  );
}

export default Cart;
