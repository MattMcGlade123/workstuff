import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  stockQuantity: Number,
  category: String
});

export const Product = mongoose.model('Product', productSchema);