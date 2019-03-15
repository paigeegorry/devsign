export const getHums = () => {
  return fetch(process.env.API_URL)
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
  // return Promise.resolve([
  //   { id: 1234, handle: 'username1', hum: 'this is my first hum', img: 'react-mockup/src/assets/user-image.png' },
  //   { id: 1235, handle: 'username2', hum: 'this is my second hum', img: 'react-mockup/src/assets/user-image.png' },
  //   { id: 1236, handle: 'username3', hum: 'this is my third hum', img: 'react-mockup/src/assets/user-image.png' },
  //   { id: 1237, handle: 'username4', hum: 'this is my fourth hum', img: 'react-mockup/src/assets/user-image.png' }
  // ]);
};
