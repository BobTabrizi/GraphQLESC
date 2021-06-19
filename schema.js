const { default: axios } = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const SongType = new GraphQLObjectType({
  name: "Song",
  fields: () => ({
    country: { type: GraphQLString },
    genre: { type: GraphQLString },
    place: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    Songs: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get("API WIP").then((res) => res.data);
      },
    },
    song: {
      type: SongType,
      args: {
        country: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios.get(`API WIP/${args.country}`).then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
