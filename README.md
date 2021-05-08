[![Integration tests](https://github.com/ricardocasares/torrent-gql/actions/workflows/integration.yml/badge.svg)](https://github.com/ricardocasares/torrent-gql/actions/workflows/integration.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/ricardocasares/torrent-gql.svg)](https://hub.docker.com/r/ricardocasares/torrent-gql)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Torrent search GraphQL API

Check the [playground](https://tgql.analogic.al)

## Sample query

```gql
{
  torrents(query: "sintel", providers: [EXTRATORRENT]) {
    size
    seeds
    peers
    title
  }
}
```

## Stack

- ▲ [vercel](https://vercel.com)
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

## Contributing

Feel free to open an issue, pull requests are preferred.

**IMPORTANT** Make sure you always create new branches from `beta`.

### Automated versioning

We use `semantic-release` to automate the versioning process, make sure you follow the [commit message convention explained here](https://github.com/semantic-release/semantic-release#commit-message-format).

**HEADS UP:** If you are not sure how write a commit message, make your changes in your feature branch and run `npm run commit` and follow the assistant.

### Releases

#### Beta

Create a feature branch and make a pull-request to `beta` branch.
Once its merged, you can try and install the package using `@beta` dist tag on `npm`.

```bash
npm i -g torrent-gql@beta
```

After a successful build you'll be able to test the playground on the beta deployment generated by ▲ Now

#### Production

Create a new pull-request from `beta` to `master` branch.
Once it gets merged, the final version will be released using `@latest` dist tag on `npm`.

After a successful build you'll be able your changes in [https://torrent-gql.analogic.al](https://torrent-gql.analogic.al)
