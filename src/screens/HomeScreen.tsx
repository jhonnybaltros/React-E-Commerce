import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';

interface ProductPayload {
  _id: string;
  user: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
interface IProductList {
  loading: boolean;
  productList: ProductPayload;
  products: ProductPayload[];
  error?: Error;
}

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productlist: IProductList = useSelector(
    (state: any) => state.productList
  );

  const { loading, error, products } = productlist;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>latest products</h1>
      {loading ? (
        <Loader animation="border" />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product: ProductPayload) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeScreen;
