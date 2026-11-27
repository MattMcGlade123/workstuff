"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        featuredListings: (_, __, { dataSources }) => {
            return dataSources.listingAPI.getFeaturedListings();
        },
    }
};
//# sourceMappingURL=resolvers.js.map