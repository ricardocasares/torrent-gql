FROM mhart/alpine-node:latest AS build
WORKDIR /app
ADD package.json yarn.lock /app/
RUN yarn

FROM mhart/alpine-node:base
COPY --from=build /app .
ADD *.js ./
CMD node index.js