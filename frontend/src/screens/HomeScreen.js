import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fecthProducts = async () => {
            const { data } = await axios.get('/api/products');

            setProducts(data);
        };

        fecthProducts();
    }, []);

    return (
        <Fragment>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
};

export default HomeScreen;