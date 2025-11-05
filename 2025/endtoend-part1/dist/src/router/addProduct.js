"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductRoute = void 0;
const products_1 = require("../controllers/products");
const addProductRoute = (router) => {
    // @ts-ignore
    router.post('/add', products_1.addProductData);
};
exports.addProductRoute = addProductRoute;
exports.default = exports.addProductRoute;
//# sourceMappingURL=addProduct.js.map