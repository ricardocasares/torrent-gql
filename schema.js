const torrentApi = require("torrent-search-api");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

const TorrentType = new GraphQLObjectType({
  name: "Torrent",
  description: "Torrent object",
  fields: () => ({
    title: {
      type: GraphQLString
    },
    desc: {
      type: GraphQLString
    },
    size: {
      type: GraphQLString
    },
    seeds: {
      type: GraphQLString
    },
    peers: {
      type: GraphQLString
    },
    magnet: {
      type: GraphQLString,
      resolve: async data => torrentApi.getMagnet(data)
    }
  })
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    description: "Torrents",
    fields: () => ({
      torrents: {
        type: new GraphQLList(TorrentType),
        args: {
          query: { type: new GraphQLNonNull(GraphQLString) },
          provider: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: async (root, { query, provider }) => {
          torrentApi.enableProvider(provider);
          return torrentApi.search(query);
        }
      }
    })
  })
});

module.exports = schema;
