import { Resolvers } from "./types";
import { validateFullAmenities } from "./helpers";
import { errorHandling } from "./errorHandling";


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

        return {
          ...thisProduct,
          _id: thisProduct._id || generateId()
        }
      });
    },
    orderList: (_, __, { dataSources }) => {
      return dataSources.productAPI.getOrderList();
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
    signIn: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.productAPI.signIn(input);
        return {
          code: 200,
          success: true,
          message: "User successfully logged in!",
          token: response.token,
        };
      } catch (err) {

        const status = err.extensions?.response?.status;
        if (status === 403) {
          return errorHandling(status, err.extensions?.response?.body?.message)
        }

        if (err.extensions?.response?.status === 400) {
          return {
            code: 400,
            success: false,
            message: "Bad request - missing required fields",
            token: null,
          };
        }

        return {
          code: 500,
          success: false,
          message: "Something went wrong. Please try again later.",
          token: null,
        };
      }
    },
    register: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.productAPI.register(input);
        return {
          code: 200,
          success: true,
          message: "User successfully registered!",
          token: response.token,
        };
      } catch (err) {

        const status = err.extensions?.response?.status;
        if (status === 403) {
          return errorHandling(status, err.extensions?.response?.body?.message)
        }

        if (err.extensions?.response?.status === 400) {
          return {
            code: 400,
            success: false,
            message: "Bad request - missing required fields",
            token: null,
          };
        }

        return {
          code: 500,
          success: false,
          message: "Something went wrong. Please try again later.",
          token: null,
        };
      }
    },
  },
};