// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is already tracked in the weakMap
  if (weakMap.has(endpoint)) {
    // Get the current number of queries for this endpoint
    const queryCount = weakMap.get(endpoint);

    // If the number of queries is >= 5, throw an error
    if (queryCount >= 5) {
      throw new Error('Endpoint load is high');
    }

    // Increment the query count
    weakMap.set(endpoint, queryCount + 1);
  } else {
    // If the endpoint is not yet tracked, start with a count of 1
    weakMap.set(endpoint, 1);
  }
}
