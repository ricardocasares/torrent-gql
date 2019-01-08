FROM mhart/alpine-node:latest AS build
WORKDIR /app
ADD package*.json /app/
RUN npm ci

FROM mhart/alpine-node:base
COPY --from=build /app .
ADD *.js ./
CMD node bin.js --port 3000