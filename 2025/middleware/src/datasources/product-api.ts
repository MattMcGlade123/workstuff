import { RESTDataSource } from "@apollo/datasource-rest";
import { ProductListType } from "../types";

export class ProductAPI extends RESTDataSource {
  baseURL = "http://localhost:8080/";

  getProductList(): Promise<ProductListType> {
    return this.get<ProductListType>("products");
  }

}