## Backend API Endpoints

This project expects the following backend API endpoints:

### Auth endpoints (`/auth`)

- `POST   /auth/login` — login
- `POST   /auth/register` — register
- `GET    /auth/profile` — get current user profile

### Cars endpoints (`/cars`)

- `GET    /cars` — get all cars
- `GET    /cars/{id}` — get car by ID
- `POST   /cars` — create a car
- `PUT    /cars/{id}` — update a car
- `DELETE /cars/{id}` — delete a car
- `GET    /cars/price?minPrice=&maxPrice=` — filter cars by price
- `GET    /cars/brand?brand=` — filter cars by brand
- `GET    /cars/power?powerPs=` — filter cars by power
- `GET    /cars/drive?wheelDrive=` — filter cars by wheel drive
- `GET    /cars/number_seats?n=` — filter cars by minimum number of seats
- `GET    /cars/filter?brand=&fuel=&minPrice=&maxPrice=` — filter by multiple criteria

### Todos endpoints (`/todos`)

- `GET    /todos` — get all todos
- `GET    /todos/{id}` — get todo by ID
- `POST   /todos` — create a todo
- `PUT    /todos/{id}/completed` — update todo completed status
- `DELETE /todos/{id}` — delete a todo

### Pilot Tower (WebSocket and Socket.IO)

- WebSocket: `ws(s)://<API_URL>/pilot-tower/pilot-tower-messages`
- Socket.IO: `<API_URL>/pilot-tower/pilot-tower-messages`
- HTTP: `<API_URL>/pilot-tower` (for possible REST endpoints)

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
