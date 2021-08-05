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
