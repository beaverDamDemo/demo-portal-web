## Backend API Endpoints

This project expects the following backend API endpoints:

### Auth endpoints (`/demo-portal/auth`)

- `POST   /demo-portal/auth/login` — login
- `POST   /demo-portal/auth/register` — register
- `GET    /demo-portal/auth/profile` — get current user profile

### Todos endpoints (`/demo-portal/todos`)

- `GET    /demo-portal/todos` — get all todos
- `GET    /demo-portal/todos/{id}` — get todo by ID
- `POST   /demo-portal/todos` — create a todo
- `PUT    /demo-portal/todos/{id}/completed` — update todo completed status
- `DELETE /demo-portal/todos/{id}` — delete a todo

### Pilot Tower (WebSocket and Socket.IO)

- WebSocket: `ws(s)://<API_URL>/demo-portal/pilot-tower/pilot-tower-messages`
- Socket.IO: `<API_URL>/demo-portal/pilot-tower/pilot-tower-messages`
- HTTP: `<API_URL>/demo-portal/pilot-tower` (for possible REST endpoints)

All endpoints are prefixed by the `API_URL` environment variable (e.g., `https://localhost:5001`).

# WebDemoPortal

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.1.

## Development server

To start a local development server, run:

```bash
npm run start:dev
```

## Building

build on Linux:

```
npm run prestart:build && ng build --configuration=production
```

or build on Windows:

```
npm run prestart:build
```

```
ng build --configuration=production
```

then continue
"github-build":

```
ng build --configuration production --base-href '/demo-portal-web/'
```

continue "github-deploy":

```
npx angular-cli-ghpages --dir=dist/demo-portal-web/browser --no-silent
```

## if I run github-build and github-deploy it doesn't work

looks like i need to run build first and then
these other two commands manually, not comands but their content manually

do like this, it has proven to work with Powershell:

```
run npm run start:prod to generate the environments for prod
```

```
ng build --configuration production --base-href '/demo-portal-web/'
```

```
npx angular-cli-ghpages --dir=dist/demo-portal-web/browser --no-silent
```

## Running unit tests

## Running end-to-end tests

AviationStack free tier is too inconsistent.
Aviation Edge free tier is gone.
OpenSky only gives ICAO24 sometimes.
ADSBexchange requires ICAO24 first.

// For WebSocket-based aircraft data, you can also try https://aisstream.io/ as an alternative data source.
