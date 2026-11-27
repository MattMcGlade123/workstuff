"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productListRoute = void 0;
const products_1 = require("../controllers/products");
const productListRoute = (router) => {
    // @ts-ignore
    router.get('/products', products_1.getAllProductsData);
};
exports.productListRoute = productListRoute;
exports.default = exports.productListRoute;
//# sourceMappingURL=productList.js.map