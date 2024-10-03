export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({ status: 200, body: 'success' }); // Correctly resolving with an object
  }
  return Promise.reject(new Error('The fake API is not working currently')); // Rejecting with an error
}
