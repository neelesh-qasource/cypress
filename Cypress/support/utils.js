export const getRandomNumber = () => {
    const random = Math.floor(Math.random() * 100000001);
    return random;
  };
  
  export const getRandomString = () => {
    const randomString = Math.random().toString(36).substring(7);
    return randomString;
  };