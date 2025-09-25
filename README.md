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
