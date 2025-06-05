import { Resolvers } from "./types";
import { validateFullAmenities } from "./helpers";


export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, { dataSources }) => {
      return dataSources.listingAPI.getFeaturedListings();
    },
    listing: (_, { id }, { dataSources }) => {
      return dataSources.listingAPI.getListing(id);
    },
    productList: (_, __, { dataSources }) => {
      return dataSources.productAPI.getProductList();
    },
    aProduct: (_, { productSlug }, { dataSources }) => {
      return dataSources.productAPI.getAProduct(productSlug).then((response) => {
        const generateId = () => Math.random().toString(36).slice(2);
        const thisProduct = response.products[0];

        console.log('response', response)
        return {
          ...thisProduct,
          _id: thisProduct._id || generateId()
        }
      });
    },
  },
  Product: {
    formattedPrice: (product) => {
      return `£${(product.price / 100).toFixed(2)}`;
    },
  },
  Listing: {
    amenities: ({ id, amenities }, _, { dataSources }) => {
      return validateFullAmenities(amenities)
        ? amenities
        : dataSources.listingAPI.getAmenities(id);
    }
  },
  Mutation: {
    createListing: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.listingAPI.createListing(input);
        return {
          code: 200,
          success: true,
          message: "Listing successfully created!",
          listing: response,
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err.extensions.response.body}`,
          listing: null,
        };
      }
    },
  },
};