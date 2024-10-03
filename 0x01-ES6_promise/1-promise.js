export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' }); // Resolving the promise with an object
    } else {
      reject(new Error('The fake API is not working currently')); // Rejecting with an error message
    }
  });
}
