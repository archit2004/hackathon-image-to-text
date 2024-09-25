import Product from '../models/Product';
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.createProduct = async (req, res) => {
  const { name, description, price, stock, image } = req.body;
  try {
    const product = new Product({
      name,
      description,
      price,
      stock,
      image,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
