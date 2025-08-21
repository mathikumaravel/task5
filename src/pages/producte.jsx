import { useEffect, useState } from 'react';
import ProductCard from '../components/productCard';
import { Container, Row } from 'react-bootstrap';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default Products;
