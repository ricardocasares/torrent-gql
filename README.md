# Torrent search GraphQL api

[![Build Status](https://travis-ci.com/ricardocasares/torrent-gql.svg?branch=master)](https://travis-ci.com/ricardocasares/torrent-gql)

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
