import express from "express";
import productListRoute from "./productList";
import productRoute from "./product";
import addProductRoute from "./addProduct";
const router = express.Router();

export default (): express.Router => {
  productListRoute(router)
  productRoute(router)
  addProductRoute(router)
  return router;
}