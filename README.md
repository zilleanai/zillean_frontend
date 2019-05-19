# zillean_frontend

Frontend for zillean ai platform.

The frontend is part of a backend - frontend bundle.

## Docker

The frontend docker image should be used as base for a zillean domain frontend docker image.

```bash
FROM zilleanai/zillean_frontend
COPY zillean-domain.yml zillean-domain.yml
RUN zillean-cli domain install_requirements zillean-domain.yml --no_py
```

## docker-compose

```yaml
# source: https://github.com/briancappello/flask-unchained-react-spa/blob/master/docker-compose.yaml
---
version: '2.3'

services:

  frontend:
    image: zilleanai/zillean_frontend
    depends_on:
      - backend
    ports:
      - 8888:8888  # access the app at localhost:8888
      - 5555:5555  # access webpack bundle analyzer at localhost:5555
    environment:
      - API_HOST=backend
      - API_PORT=5000
    entrypoint:
      - /frontend-entrypoint.sh
```

[source: flask unchained react spa](https://github.com/briancappello/flask-unchained-react-spa)
