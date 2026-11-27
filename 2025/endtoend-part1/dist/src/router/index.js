"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productList_1 = __importDefault(require("./productList"));
const product_1 = __importDefault(require("./product"));
const addProduct_1 = __importDefault(require("./addProduct"));
const authentication_1 = __importDefault(require("./authentication"));
const router = express_1.default.Router();
exports.default = () => {
    (0, productList_1.default)(router);
    (0, product_1.default)(router);
    (0, addProduct_1.default)(router);
    (0, authentication_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map