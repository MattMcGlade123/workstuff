"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingAPI = void 0;
const datasource_rest_1 = require("@apollo/datasource-rest");
class ListingAPI extends datasource_rest_1.RESTDataSource {
    baseURL = "https://rt-airlock-services-listing.herokuapp.com/";
    getFeaturedListings() {
        return this.get("featured-listings");
    }
}
exports.ListingAPI = ListingAPI;
//# sourceMappingURL=listing-api.js.map