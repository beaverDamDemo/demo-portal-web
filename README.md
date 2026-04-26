## Backend API Endpoints

This project expects the following backend API endpoints:

### Auth endpoints (`/demo-portal/auth`)

- `POST   /demo-portal/auth/login` — login
- `POST   /demo-portal/auth/register` — register
- `GET    /demo-portal/auth/profile` — get current user profile

### Cars endpoints (`/demo-portal/cars`)

- `GET    /demo-portal/cars` — get all cars
- `GET    /demo-portal/cars/{id}` — get car by ID
- `POST   /demo-portal/cars` — create a car
- `PUT    /demo-portal/cars/{id}` — update a car
- `DELETE /demo-portal/cars/{id}` — delete a car
- `GET    /demo-portal/cars/price?minPrice=&maxPrice=` — filter cars by price
- `GET    /demo-portal/cars/brand?brand=` — filter cars by brand
- `GET    /demo-portal/cars/power?powerPs=` — filter cars by power
- `GET    /demo-portal/cars/drive?wheelDrive=` — filter cars by wheel drive
- `GET    /demo-portal/cars/number_seats?n=` — filter cars by minimum number of seats
- `GET    /demo-portal/cars/filter?brand=&fuel=&minPrice=&maxPrice=` — filter by multiple criteria

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

```
"build": "npm run prestart:build && ng build --configuration=production",
```

```
"github-build": "ng build --configuration production --base-href '/demo-portal-web/'",
```

```
"github-deploy": "npx angular-cli-ghpages --dir=dist/demo-portal-web/browser --no-silent",
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
