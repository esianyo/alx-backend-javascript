import { queryAPI, weakMap } from './100-weak.js';

const endpoint = { protocol: 'http', name: 'getUsers' };

// Initial state, should be undefined since endpoint hasn't been queried yet
console.log(weakMap.get(endpoint));

try {
  // Call queryAPI multiple times
  queryAPI(endpoint);
  console.log(weakMap.get(endpoint)); // Should print 1

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint)); // Should print 2

  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
} catch (error) {
  console.error(error.message); // Should print "Endpoint load is high" after 5th query
}
