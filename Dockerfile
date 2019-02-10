FROM node:8.15-alpine

RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python3 git
RUN pip3 install -U pip && pip3 install git+https://gitlab.chriamue.de/mlplatform/mlplatform_cli.git

COPY ./package.json /flask/package.json

WORKDIR /flask

RUN npm install

COPY ./frontend /flask/frontend
COPY ./docker/frontend-entrypoint.sh /frontend-entrypoint.sh
ENTRYPOINT ["/frontend-entrypoint.sh"]
