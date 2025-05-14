import express from "express";
import productListRoute from "./productList";
import productRoute from "./product";
import addProductRoute from "./addProduct";
import authentication from "./authentication";
const router = express.Router();

export default (): express.Router => {
  productListRoute(router);
  productRoute(router);
  addProductRoute(router);

  authentication(router)

  return router;
}