"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const products_1 = require("../controllers/products");
const productRoute = (router) => {
    // @ts-ignore
    router.get('/products/:slug', products_1.getProduct);
};
exports.productRoute = productRoute;
exports.default = exports.productRoute;
//# sourceMappingURL=product.js.map