import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

interface ICartscreen extends React.FC {
  match: any;
  location: any;
  history: any;
}

const CartScreen = ({ match, location, history }: ICartscreen) => {
  const productId = match.params.id;

  const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart: any = useSelector((state: any) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    console.log(cartItems);
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const removeFromCartHandler = (id: number) => {
    console.log('remove');
  };
  return (
    <Row>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      ;
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item: any) => (
              <ListGroup.Item key={item?.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item?.image} alt={item?.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item?.product}`}>{item?.name}</Link>
                  </Col>
                  <Col md={2}>${item?.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item?.quantity}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item?.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item?.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item?.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default CartScreen;
