# Torrent search GraphQL api

Check the [playground](https://torrent-gql.analogic.al)

## Sample query

```gql
{
  torrents(query: "sintel", provider: "1337x") {
    size
    seeds
    peers
    title
  }
}
```

## Stack

- ▲ [now](https://now.sh)
- docker
- [express-graphql](https://github.com/graphql/express-graphql)
- [torrent-search-api](https://github.com/JimmyLaurent/torrent-search-api)
