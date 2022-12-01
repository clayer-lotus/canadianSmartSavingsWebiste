import * as geolib from 'geolib';
// @types/geolib is written in a way that `import * as geolib from 'geolib';` does not work
type geolibType = typeof geolib;
const theGeolib = (geolib as any).default as geolibType;

export { theGeolib as geolib };
