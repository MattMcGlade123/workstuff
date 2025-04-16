import express from "express";
import productListRoute from "./productList";
import productRoute from "./product";
const router = express.Router();

export default (): express.Router => {
  productListRoute(router)
  productRoute(router)
  return router;
}