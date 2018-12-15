// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth: {
    CLIENT_ID: 'Eg_pghBkf0aAc_KMXODOAmTXK096rcZO',
    CLIENT_DOMAIN: 'edelphotography.auth0.com', // e.g., 'you.auth0.com'
    REDIRECT: 'http://localhost:4200/',
    LOGOUT_URL: 'http://localhost:4200/'
  },
  endpoints: {
    flickr: 'http://3.17.43.124:8081/'
  }
};
