// handleResponseFromAPI.js
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API'); // Log on resolution
      return { status: 200, body: 'success' }; // Return success object
    })
    .catch(() => {
      console.log('Got a response from the API'); // Log on rejection as well
      return new Error(); // Return empty Error object
    });
}
