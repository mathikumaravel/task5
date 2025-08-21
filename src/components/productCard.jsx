import { Card, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cratSlice.jsx';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={product.image} height="200px" style={{ objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
