// handleResponseFromAPI.js
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => { // Use parentheses around the arrow function parameters
    if (promise) {
      return resolve({ status: 200, body: 'success' }); // Make sure 'success' is defined or use a string
    }
    return reject(new Error('The API call failed')); // Provide an error message
  })
    .finally(() => {
      console.log('Got a response from the API'); // This will run after the promise settles
    });
}
