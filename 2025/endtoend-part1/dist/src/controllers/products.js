"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductData = exports.getProduct = exports.getAllProductsData = void 0;
const products_1 = require("../dbs/products");
const getAllProductsData = async (req, res) => {
    try {
        const productListData = await (0, products_1.getAllPageData)();
        if (!productListData) {
            return res.sendStatus(400);
        }
        const finalData = {
            pageName: productListData[0].pageName,
            products: productListData[0].products
        };
        return res.status(200).json(finalData);
    }
    catch (error) {
        return res.sendStatus(400);
    }
};
exports.getAllProductsData = getAllProductsData;
const getProduct = async (req, res) => {
    const { slug } = req.params;
    try {
        const productData = await (0, products_1.getProductBySlug)(slug);
        if (!productData) {
            return res.status(400).json({ "error": "No product exists for this url" });
        }
        return res.status(200).json(productData);
    }
    catch (error) {
        return res.sendStatus(400);
    }
};
exports.getProduct = getProduct;
const addProductData = async (req, res) => {
    try {
        let existingProduct = null;
        const { slug, name, price, image } = req.body;
        const priceAsNumber = Number(price);
        if (isNaN(priceAsNumber) || priceAsNumber <= 0) {
            return res.status(400).json({ error: 'Price must be a valid number' });
        }
        if (!slug || !name || !price || !image || !image.url) {
            return res.status(400).json({ error: 'Missing required product fields' });
        }
        try {
            existingProduct = await (0, products_1.getProductBySlug)(slug);
        }
        catch (error) {
            return res.sendStatus(400);
        }
        if (existingProduct) {
            return res.status(400).json({ error: 'There is already a product that exists with that slug' });
        }
        const addResponse = await (0, products_1.addProduct)({
            slug,
            name,
            price: priceAsNumber,
            image
        });
        return (res.status(200).json(addResponse).end());
    }
    catch (error) {
        return res.sendStatus(400);
    }
};
exports.addProductData = addProductData;
//# sourceMappingURL=products.js.map