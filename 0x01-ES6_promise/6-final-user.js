import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [signUpResponse, uploadPhotoResponse] = await Promise.all([
      signUpUser(firstName),
      uploadPhoto(fileName),
    ]);

    return [
      { status: 'fulfilled', value: signUpResponse },
      { status: 'fulfilled', value: uploadPhotoResponse },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error },
    ];
  }
}
