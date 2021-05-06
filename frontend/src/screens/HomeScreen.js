import React, { Fragment, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

import { getProducts } from '../redux/actions/productActions';

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword;

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(getProducts(keyword));
    }, [dispatch, keyword]);

    return (
        <Fragment>
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </Fragment>
    );
};

export default HomeScreen;
