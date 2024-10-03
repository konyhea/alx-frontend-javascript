export default function getResponseFromApi() {
  const success = true;
  if (success) {
    return Promise.resolve('operation successful');
  }
  return Promise.reject(new Error('operation failed'));
}
