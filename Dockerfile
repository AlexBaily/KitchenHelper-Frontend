FROM mhart/alpine-node:11 as builder
WORKDIR /app
COPY . .

ARG REACT_APP_AUDIENCE
ARG REACT_APP_DOMAIN
ARG REACT_APP_CLIENTID

ENV REACT_APP_AUDIENCE=$REACT_APP_AUDIENCE
ENV REACT_APP_DOMAIN=$REACT_APP_DOMAIN
ENV REACT_APP_CLIENTID=$REACT_APP_CLIENTID

RUN npm install react-scripts -g --silent
RUN npm install
RUN npm run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
