import { RESTDataSource } from "@apollo/datasource-rest";
import { SignInInput, ProductListType, SignInResponse, RegisterInput, RegisterResponse } from "../types";
export declare class ProductAPI extends RESTDataSource {
    baseURL: string;
    getProductList(): Promise<ProductListType>;
    getAProduct(productSlug: string): Promise<ProductListType>;
    signIn(input: SignInInput): Promise<SignInResponse>;
    register(input: RegisterInput): Promise<RegisterResponse>;
}
//# sourceMappingURL=product-api.d.ts.map