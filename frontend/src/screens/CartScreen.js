import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';

import Message from '../components/Message';

import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = ({ match, location, history }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const productId = match.params.id;
    const qty = location.search ? Number(new URLSearchParams(location.search).get('qty')) : 1;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHanler = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
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
                        {cartItems.map((cartItem) => (
                            <ListGroup.Item key={cartItem.productId}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={cartItem.image}
                                            alt={cartItem.name}
                                            fluid
                                            rounded
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${cartItem.productId}`}>
                                            {cartItem.name}
                                        </Link>
                                    </Col>
                                    <Col md={3}>${cartItem.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={cartItem.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(
                                                        cartItem.productId,
                                                        Number(e.target.value),
                                                    ),
                                                )
                                            }
                                        >
                                            {[...Array(cartItem.countInStock).keys()].map((x) => (
                                                <option
                                                    key={x + 1}
                                                    value={x + 1}
                                                    defaultValue={x + 1}
                                                >
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => removeFromCartHanler(cartItem.productId)}
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
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                                items
                            </h2>
                            $
                            {cartItems
                                .reduce((acc, item) => acc + item.qty * item.price, 0)
                                .toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn-block"
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Proceed to checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;