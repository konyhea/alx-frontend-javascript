import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoResponse, createUserResponse]) => {
      console.log(
        uploadPhotoResponse.body,
        createUserResponse.firstName,
        createUserResponse.lastName,
      ); // Adjusted line length
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
