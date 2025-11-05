import { RESTDataSource } from "@apollo/datasource-rest";
import { SignInInput, ProductListType, SignInResponse, RegisterInput, RegisterResponse, OrderListType } from "../types";

export class ProductAPI extends RESTDataSource {
  baseURL = process.env.API_URL || "http://localhost:8080/";

  getProductList(): Promise<ProductListType> {
    return this.get<ProductListType>("products");
  }

  getAProduct(productSlug: string): Promise<ProductListType> {
    return this.get<ProductListType>(`products/${productSlug}`);
  }

  signIn(input: SignInInput): Promise<SignInResponse> {
    return this.post<SignInResponse>("auth/login", {
      body: {
        ...input,
      },
    });
  }

  register(input: RegisterInput): Promise<RegisterResponse> {
    return this.post<RegisterResponse>("auth/register", {
      body: {
        ...input,
      },
    });
  }

  getOrderList(): Promise<OrderListType> {
    return this.get<OrderListType>("orders");
  }
}