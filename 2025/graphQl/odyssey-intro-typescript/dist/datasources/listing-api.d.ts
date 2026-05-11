import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../types";
export declare class ListingAPI extends RESTDataSource {
    baseURL: string;
    getFeaturedListings(): Promise<Listing[]>;
}
//# sourceMappingURL=listing-api.d.ts.map