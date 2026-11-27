import type { OrderItem } from "../type.ts";

export const getTotalAmount = (items: OrderItem[]): number => {
  let totalAmount = 0;
  items.forEach(thisProduct => {
    const itemTotal = thisProduct.quantity * thisProduct.unitPrice;
    totalAmount = totalAmount + itemTotal
  });

  return totalAmount;
}