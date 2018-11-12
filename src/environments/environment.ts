// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true
};

export const endpoints = {
  flickr: 'http://18.220.214.160:8081/',
  localhost: 'http://localhost:8081/',
  // flickr: 'http://localhost:8081/',
};
