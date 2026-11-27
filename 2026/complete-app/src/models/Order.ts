import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    unitPrice: Number
  }],
  totalAmount: Number,
  status: String
});

export const Order = mongoose.model('Order', orderSchema);