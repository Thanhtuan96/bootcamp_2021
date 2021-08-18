# How It Work!!!

- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function
- Any funcitons that are called byu that function are added to the call stack further up and run where their calls are reached
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

## For example:

```js
const mutiply = (x, y) => x * y;

const square = (x: any) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);
```

# Web Api & Single thread

## what is means

at any given point in time, that single JS thread is running at most one line of JS code

- Browsers come with Web APIs that are able to handle certain tasks in requests or setTimeOut

- The JS call stack recognizes these Web API funcitons and passes them off to the browser to take care of

- Once the browser finishes those tasks, they return and are pushed on to the stack as a call back


# Callback Hells
## what is call back hells!

```JS
setTimeout(() => {
  document.body.style.backgroundColor = 'red';
  setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
    setTimeout(() => {
      document.body.style.backgroundColor = 'blue';
    }, 3000);
  }, 2000);
}, 1000);
```

that is call back hell. To avoid it we can rewrite code like this

```JS
const delayedColorChange = (newColor, delay)=>{
  setTimeOut(()=>{
    document.body.style.backgroundColor = newColor;
  },delay)
}

delayedColorChange('red',2000)
```

# Enter Promises
## what is promises in JS

- A promise in an object representing the eventual completion or failure of all asynchoronous operation

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- ulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

>A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

![alt text](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

below is example of promise

```JS
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

fakeRequestPromise('books.com')
  .then(() => {
    console.log('It worked!!');
    fakeRequestPromise('books.com/page1')
      .then(() => {
        console.log('It worked (page 2)');
      })
      .catch(() => {
        console.log('It not worked (page2 )');
      });
  })
  .catch(() => {
    console.log('It not worked');
  });
  ```


and we can using promise like example below

```JS
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
```

# The async functions keyword

> a newer and cleaner syntax for working with async code !
Syntax "makeup" for promises 

- 2 pieces
  - async
  - await 

### 1. The async key word

- Async funcitons always return a promise
- If the funciton returns a value, the promise will be resolved with that value
- If the funciton throws an exception, the promise will be rejected

for example:

```JS
 async function hello(){
   return 'hey guy'
 };
 hello() // Promise {<resolve>: 'hey guy'}
 async function ohError(){
   throw new Error('oh no , error!')
 };
 ohError() // Promise {<rejected>: 'oh no, error!'}
 ```


 ### 2. The await keyword

 - we can only use the await keyword inside of functions decleared with async.
 - await will pause the execution of the funciton , waiting for a promise to be resolved
 