export default function getFullResponseFromAPI(success) {
  return new Promise((resole, reject) => {
    resole(success);
    reject(new Error('The fake API is not working currently'));
  });
}
