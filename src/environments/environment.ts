// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * Parameter for environment - Default Version
 */
export const environment = {
  /**
   * Productive version.
   */
  production: false,

  /**
   * Use mockUp data mode in the services.
   */
  mockUpMode: false,
  firebase: {
    apiKey: "AIzaSyD8QMC67_-XM_XOpFl1y7r3xX2Izm22qnU",
    authDomain: "coffeemonitor-b680c.firebaseapp.com",
    projectId: "coffeemonitor-b680c",
    storageBucket: "coffeemonitor-b680c.appspot.com",
    messagingSenderId: "431867686907",
    appId: "1:431867686907:web:b5ed33db7240c11b08655e",
    measurementId: "G-0NBFTHZCTK",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
