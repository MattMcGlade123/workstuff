import { ListingAPI } from "./datasources/listing-api";
import { ProductAPI } from "./datasources/product-api";

export type DataSourceContext = {
  dataSources: {
    listingAPI: ListingAPI;
    productAPI: ProductAPI
  };
};