const torrentApi = require("torrent-search-api");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType
} = require("graphql");

var ProviderType = new GraphQLEnumType({
  name: "Provider",
  values: {
    LEETX: { value: "1337x" },
    TORRENT9: { value: "Torrent9" },
    EXTRATORRENT: { value: "ExtraTorrent" },
    KICKASS: { value: "KickassTorrents" },
    RARBG: { value: "Rarbg" },
    PIRATEBAY: { value: "ThePirateBay" },
    TORRENTPROJECT: { value: "TorrentProject" },
    TORRENTZ2: { value: "Torrentz2" }
  }
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
          providers: { type: new GraphQLNonNull(new GraphQLList(ProviderType)) }
        },
        resolve: async (root, { query, providers = [] }) => {
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
