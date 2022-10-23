import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

interface IMatch {
  path: string;
  url: string;
  isExact: boolean;
  params: {
    id: string;
  };
}

interface ICartscreen extends React.FC {
  match: IMatch;
  location: Location;
  history: History;
}

interface ICartItem {
  product: String;
  name: String;
  image: String;
  countInStock: number;
  price: number;
  quantity: number;
}

interface ICart {
  cartItems: ICartItem[];
}

const CartScreen = ({ match, location, history }: ICartscreen) => {
  const productId = Number(match.params.id);

  const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart: ICart = useSelector((state: any) => state.cart);
  console.log(cart);
  const { cartItems } = cart;

  useEffect(() => {
    console.log(cartItems);
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const removeFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = (cart: ICart) => {
    console.log(cart);
  };
  return (
    <Row>
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
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal: (
                {cartItems.reduce(
                  (accumulator: number, item: ICartItem) =>
                    accumulator + item.quantity,
                  0
                )}
                ) Items
              </h2>
              $
              {cartItems
                .reduce(
                  (accumulator: number, item: ICartItem) =>
                    accumulator + item.quantity * item.price,
                  0
                )
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={() => checkoutHandler}
              >
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
