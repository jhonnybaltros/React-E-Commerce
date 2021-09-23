import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import product from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>latest products</h1>
      <Row>
          {product.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  )
}  
export default HomeScreen;
