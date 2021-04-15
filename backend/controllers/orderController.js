import asyncHandler from 'express-async-handler';

import Order from '../models/orderModel.js';

const addOrderItems = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createdOrder = await order.save();
        return res.status(201).send(createdOrder);
    }
});

export { addOrderItems };
