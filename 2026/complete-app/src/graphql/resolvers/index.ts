
export const resolvers = {
  Query: {
    ping: (_parent, _args, context) => {
      console.log(context.currentUser);
      return 'test';
    },
  },
};