export const getHums = () => Promise.resolve([
  { hum: 'this is my first hum', user: '1234' }
]);

export const postHums = (hum) => Promise.resolve({
  hum: hum, user: '1234'
});
