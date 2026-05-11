"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAPI = void 0;
const datasource_rest_1 = require("@apollo/datasource-rest");
class ProductAPI extends datasource_rest_1.RESTDataSource {
    baseURL = process.env.API_URL || "http://localhost:8080/";
    getProductList() {
        return this.get("products");
    }
    getAProduct(productSlug) {
        return this.get(`products/${productSlug}`);
    }
    signIn(input) {
        return this.post("auth/login", {
            body: {
                ...input,
            },
        });
    }
    register(input) {
        return this.post("auth/register", {
            body: {
                ...input,
            },
        });
    }
}
exports.ProductAPI = ProductAPI;
//# sourceMappingURL=product-api.js.map