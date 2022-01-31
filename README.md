# vue-empty-state-test

## Dev

__Requirements:__

- Docker
- Docker Compose

First time, install packages and start container:

```bash
docker-compose run web npm ci
docker-compose up
```

Next times, just start container:

```bash
docker-compose up
```

## Tests

### Unit

```bash
docker-compose run web npm ci
docker-compose run web npm run test:unit
```

### Cypress

```bash
docker-compose run cypress
docker-compose down
```
