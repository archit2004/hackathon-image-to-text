import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: Number, required: true },
  image: { type: String },
});

export default mongoose.model('Product', ProductSchema);
