import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  slug: { type: String, required: true, select: true },
  name: { type: String, required: true, select: true },
  price: { type: Number, required: true },
  image: {
    url: { type: String, required: true },
    alt: { type: String, required: true }
  }
});

const orderSchema = new mongoose.Schema({
  pageName: { type: String, required: true },
  orders: [orderItemSchema]
})

export const orderModel = mongoose.model('Order', orderSchema);

export const getAllOrdersPageData = () => orderModel.find({})