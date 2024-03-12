function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const data = 'Response from API'; // Replace with actual API response
      resolve(data); // Resolve the promise with the API response
    }, 2000); // Simulated delay of 2 seconds
  });
}

export default getResponseFromAPI;
