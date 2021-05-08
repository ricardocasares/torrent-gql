const torrentApi = require("torrent-search-api");
const {
  GraphQLInt,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType
} = require("graphql");

var ProviderType = new GraphQLEnumType({
  name: "Provider",
  values: torrentApi.getProviders().filter(({ public }) => public).reduce((acc, { name }) => {
    acc[`PROVIDER_${name.toLocaleUpperCase()}`] = { value: name };
    return acc;
  }, {})
});

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
      type: GraphQLInt,
      resolve: ({ seeds = 0 }) => Number(seeds)
    },
    peers: {
      type: GraphQLInt,
      resolve: ({ peers = 0 }) => Number(peers)
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
          providers: { type: new GraphQLNonNull(new GraphQLList(ProviderType)) }
        },
        resolve: async (_, { query, providers = [] }) => {
          if (!providers.length) {
            throw new Error("You need to select at least one provider.");
          }

          torrentApi.disableAllProviders();

          for (let provider of providers) {
            torrentApi.enableProvider(provider);
          }

          return torrentApi.search(query);
        }
      }
    })
  })
});

module.exports = schema;
