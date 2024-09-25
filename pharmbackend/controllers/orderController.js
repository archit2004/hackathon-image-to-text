import Order from '../models/Order';
exports.createOrder = async (req, res) => {
  const { userId, products, totalPrice } = req.body;

  try {
    const order = new Order({
      user: userId,
      products,
      totalPrice,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getUserOrders = async (req, res) => {
  const userId = req.params.userId;

  try {
    const orders = await Order.find({ user: userId }).populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
