export const getQuotesInfo = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(res => res.json());
};
