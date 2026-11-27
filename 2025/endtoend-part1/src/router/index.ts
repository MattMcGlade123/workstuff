import express from "express";
import productListRoute from "./productList";
import productRoute from "./product";
import addProductRoute from "./addProduct";
import authentication from "./authentication";
import ordersList from "./ordersList";
const router = express.Router();

export default (): express.Router => {
  productListRoute(router);
  productRoute(router);
  addProductRoute(router);
  ordersList(router);

  authentication(router)

  return router;
}