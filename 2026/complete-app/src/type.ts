import { type Request } from 'express';

export interface AuthTokenPayload {
  userId: string
  role: string
}

export interface ProductInputInt {
  title?: string,
  description?: string,
  price?: number,
  stockQuantity?: number,
  category?: string
}

export interface ValidProduct {
  title: string,
  description: string,
  price: number,
  stockQuantity: number,
  category: string
}

export interface OrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface RequestWithUser extends Request {
  user?: AuthTokenPayload
}