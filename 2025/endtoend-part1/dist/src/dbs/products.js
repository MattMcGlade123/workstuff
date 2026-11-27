"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.addProduct = exports.getProductBySlug = exports.getAllPageData = exports.productListModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productModelSchema = new mongoose_1.default.Schema({
    slug: { type: String, required: true, select: true },
    name: { type: String, required: true, select: true },
    price: { type: Number, required: true },
    image: {
        url: { type: String, required: true },
        alt: { type: String, required: true }
    }
});
const productListModelSchema = new mongoose_1.default.Schema({
    pageName: { type: String, required: true },
    products: [productModelSchema]
});
exports.productListModel = mongoose_1.default.model('ProductList', productListModelSchema);
const getAllPageData = () => exports.productListModel.find({});
exports.getAllPageData = getAllPageData;
const getProductBySlug = (slug) => exports.productListModel.findOne({ 'products.slug': slug }, // This finds the data that matches in the document
{ products: { $elemMatch: { 'slug': slug } }, _id: 0 } // This tells mongodb what to return rather than the whole data
);
exports.getProductBySlug = getProductBySlug;
const addProduct = (newProduct) => {
    return exports.productListModel.updateOne({ _id: "67f6a05e72fb7ac60835732a" }, { $push: { products: newProduct } });
};
exports.addProduct = addProduct;
const updateProduct = (slug, newProduct) => exports.productListModel.updateOne({ 'products.slug': slug }, {
    $set: {
        'products.$': newProduct
    }
});
exports.updateProduct = updateProduct;
//# sourceMappingURL=products.js.map