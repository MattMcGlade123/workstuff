import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing, Amenity, CreateListingInput } from "../types";
export declare class ListingAPI extends RESTDataSource {
    baseURL: string;
    getFeaturedListings(): Promise<Listing[]>;
    getListing(listingId: string): Promise<Listing>;
    getAmenities(listingId: string): Promise<Amenity[]>;
    createListing(listing: CreateListingInput): Promise<Listing>;
}
//# sourceMappingURL=listing-api.d.ts.map