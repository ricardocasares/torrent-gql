[![Build Status](https://travis-ci.com/ricardocasares/torrent-gql.svg?branch=master)](https://travis-ci.com/ricardocasares/torrent-gql)
![Docker Pulls](https://img.shields.io/docker/pulls/ricardocasares/torrent-gql.svg)

# Torrent search GraphQL api

Check the [playground](https://torrent-gql.analogic.al)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ricardocasares/torrent-gql)

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
- [polka](https://github.com/lukeed/polka)
- [express-graphql](https://github.com/graphql/express-graphql)
- [torrent-search-api](https://github.com/JimmyLaurent/torrent-search-api)

## Running the npm package

```bash
npm i -g torrent-gql
torrent-gql --port 3000
```

## Running the docker image

```bash
docker run -p 3000:3000 ricardocasares/torrent-gql
```

### Build from scratch

Clone the repository and inside the root folder run:

```bash
docker build . -t torrent-gql
docker run -p 3000:3000 torrent-gql
```

You can now visit the playground at [http://localhost:3000](http://localhost:3000)
```bash
> docker run -p 3000:3000 torrent-gql
```

You can now visit the playground at [http://localhost:3000](http://localhost:3000)

## Contributing

Feel free to open an issue, pull request are preferred.
