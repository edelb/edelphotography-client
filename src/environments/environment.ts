// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
};

export const auth = {
  CLIENT_ID: 'Eg_pghBkf0aAc_KMXODOAmTXK096rcZO',
  CLIENT_DOMAIN: 'edelphotography.auth0.com', // e.g., 'you.auth0.com'
  REDIRECT: 'http://localhost:4200/callback',
  LOGOUT_URL: 'http://localhost:4200/'
};

export const endpoints = {
  flickr: 'http://18.220.214.160:8081/'
};
