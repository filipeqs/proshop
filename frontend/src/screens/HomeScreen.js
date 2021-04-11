import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';

import products from '../products';

const HomeScreen = () => {
    return (
        <Fragment>
            <h1>Lates Products</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product key={product._id} product={product} />
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
};

export default HomeScreen;
