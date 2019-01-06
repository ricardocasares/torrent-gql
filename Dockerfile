FROM mhart/alpine-node:latest AS build
WORKDIR /app
ADD package*.lock /app/
RUN npm ci

FROM mhart/alpine-node:base
COPY --from=build /app .
ADD *.js ./
CMD node index.js