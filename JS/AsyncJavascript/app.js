// console.log('sending request to server!')
// setTimeout(()=>{
//     console.log('here is your data from the server....')
// },3000)

// console.log("I am at the end of the file")

// setTimeout(() => {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'blue';
//     }, 3000);
//   }, 2000);
// }, 1000);

//we can also write a new code like below

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext();
//   }, delay);
// };

// delayedColorChange('red', 3000, () => {
//   delayedColorChange('blue', 4000);
// });

//easy to see but it will be callback hell as well
//so we should learn about Promises, or asyns await

//DEMO : fakeRequest using call back
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timout;)))! ');
    } else {
      success(`here is your fake data from ${url}`);
    }
  }, delay);
};

//DEMO : fakeRequest using Promises
const fakeRequestPromise = (url) => {
  return new Promise((res, rej) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        rej('Connection Timout:(!');
      } else {
        res(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestPromise('books.com')
//   .then(() => {
//     console.log('It worked!!');
//     fakeRequestPromise('books.com/page1')
//       .then(() => {
//         console.log('It worked (page 2)');
//       })
//       .catch(() => {
//         console.log('It not worked (page2 )');
//       });
//   })
//   .catch(() => {
//     console.log('It not worked');
//   });

// or we can use promise like this

fakeRequestPromise('yelp.com/api/coffee/page1')
  .then(() => {
    console.log('IT WORKED!!! ( page 1)');
    return fakeRequestPromise('yelp.com/api/coffee/page2');
  })
  .then(() => {
    console.log('IT WORKED !!! (page 2)');
    return fakeRequestPromise('yelp.com/api/coffee/page3');
  })
  .then(() => {
    console.log('IT WORKED!!! (page 3)');
  })
  .catch(() => {
    console.log('OH NO, A REQUEST FAILED!!!');
  });
