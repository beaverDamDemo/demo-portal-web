const fs = require("fs");
const colors = require("colors");
const appVersion = require("../../package.json").version;
const npmLifecycleEvent = process.env.npm_lifecycle_event;
const targetFile = "./src/environments/environment.ts";

function generateEnv(envPath, dotenvPath, production) {
  require("dotenv").config({ path: dotenvPath });
  const envConfigFile = `export const environment = {
    LUFTHANSA_CLIENT_KEY: '${process.env["LUFTHANSA_CLIENT_KEY"]}',
    LUFTHANSA_CLIENT_SECRET: '${process.env["LUFTHANSA_CLIENT_SECRET"]}',
    API_NINJAS_API_KEY: '${process.env["API_NINJAS_API_KEY"]}',
    AVIATION_STACK_API_KEY: '${process.env["AVIATION_STACK_API_KEY"]}',
    appVersion: '${appVersion}',
    production: ${production},
  };`;
  fs.writeFile(envPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
    try {
      fs.copyFileSync(envPath, targetFile);
      console.log(
        colors.bgBlue(
          `Environment file copied from ${envPath} to ${targetFile}`
        )
      );
    } catch (err) {
      console.error(colors.red(`Error copying environment file: ${err}`));
      throw err;
    }
  });
}

if (npmLifecycleEvent === "prestart:dev") {
  generateEnv(
    "./src/environments/environment.development.ts",
    "src/environments/.env.development",
    false
  );
} else if (npmLifecycleEvent === "prestart:build") {
  generateEnv(
    "./src/environments/environment.prod.ts",
    "src/environments/.env.prod",
    true
  );
} else {
  console.log(
    colors.bgRed.black(
      `No npm lifecycle event detected. Skipping environment file copy.`
    )
  );
}
