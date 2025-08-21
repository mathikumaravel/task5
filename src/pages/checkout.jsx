import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import { clearCart } from '../redux/cratSlice';

function Checkout() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    dispatch(clearCart());
  };

  return (
    <Container className="mt-4">
      <h2>Checkout Summary</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <h4>
        Total: $
        {items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
      </h4>
      <Button onClick={handlePlaceOrder} className="mt-3">Place Order</Button>
    </Container>
  );
}

export default Checkout;
