// send request using XMLHttpRequest()
// ###################################

// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log('all done with request!!');
//   console.log(this);
//   const data = JSON.parse(this.responseText);
//   console.log(data.ticker.price);
// };

// req.onerror = function () {
//   console.log('ERROR!!!');
//   console.log(this);
// };

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');

// req.send();

// send request using fletch API
// ################################

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.ticker);
//   })
//   .catch((e) => {
//     console.log(`oh no... ${e}`);
//   });

const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    const data = await res.json();
    console.log(data.ticker.price);
  } catch (e) {
    console.log('Something went wrong!!!', e);
  }
};

document.addEventListener('DOMContentLoaded', fetchBitcoinPrice);
