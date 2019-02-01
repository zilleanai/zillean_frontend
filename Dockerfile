FROM node:8.15-alpine

RUN apk add --no-cache git

COPY ./package.json /flask/package.json

WORKDIR /flask

RUN npm install

COPY ./frontend /flask/frontend

COPY ./docker/frontend-entrypoint.sh /frontend-entrypoint.sh