import { type Request, type Response } from 'express';
import { Product } from "../../models/Product.ts"
import mongoose from 'mongoose';
import type { OrderItem, RequestWithUser } from '../../type.ts';
import { Order } from '../../models/Order.ts';
import { getTotalAmount } from '../../utils/getTotalAmount.ts';

const abortAttempt = async (session: mongoose.mongo.ClientSession) => {
  await session.abortTransaction();
  session.endSession()
}

export const placeOrder = async (req: RequestWithUser, res: Response) => {
  const session = await mongoose.startSession();
  await session.startTransaction();

  const orderDetails: { items: OrderItem[] } = req.body.order;

  if (!orderDetails) {
    await session.abortTransaction();
    session.endSession()
    res.status(500).send('There were no order details');
  }
  let allHaveStock = true;

  for (const orderItem of orderDetails.items as OrderItem[]) {
    const productCode = orderItem.productId;
    const productQuanity = orderItem.quantity;
    if (productCode) {
      try {
        const aProduct = await Product.findById(productCode).session(session)

        if (!aProduct) {
          await abortAttempt(session)
          return res.status(200).send({ message: 'No products were found' });
        }

        if (aProduct?.stockQuantity && aProduct?.stockQuantity < productQuanity) {
          allHaveStock = false;
        }

      } catch (error) {
          await abortAttempt(session)
        res.status(500).send(`There was an error - ${error}`);
      }
    }
  }

  if (allHaveStock) {
    const finalOrderDetails = {
      ...orderDetails,
      status: 'pending',
      userId: req?.user?.userId || '',
      totalAmount: getTotalAmount(orderDetails.items)
    }

    const newOrder = await Order.create([finalOrderDetails], { session })
    if (newOrder) {
      for (const orderItem of orderDetails.items as OrderItem[]) {
        const productCode = orderItem.productId;
        const productQuanity = orderItem.quantity;
        await Product.updateOne({ _id: productCode }, { $inc: { stockQuantity: -productQuanity } }, { session })
      }
      await session.commitTransaction();
      return res.status(200).send({ message: `new order placed - ${newOrder}` });
    }
    else {
      await session.abortTransaction();
    }
  }
  else {
    await abortAttempt(session)
    res.status(500).send(`There was not enough stock available`);
  }
}
