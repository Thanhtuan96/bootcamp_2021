// axios.get('https://api.cryptonator.com/api/ticker/btc-usd').then((res) => {
//   console.log(res.data.ticker.price);
// });

// set Header with axios

const getDadJoke = async () => {
  const config = { headers: { Accept: 'application/json' } };
  const res = await axios.get('https://icanhazdadjoke.com/', config);
  console.log(res);
};

document.addEventListener('DOMContentLoaded', getDadJoke);
