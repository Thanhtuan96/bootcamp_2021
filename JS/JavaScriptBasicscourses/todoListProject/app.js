let input = prompt('what would you like to do?');
const todos = ['learn FE', 'Clean little Box'];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('*************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
    console.log('*************');
  } else if (input === 'add') {
    input = prompt('what would you like to add?');
    if (input) {
      todos.push(input);
    }
  } else if (input === 'delete') {
    let deleteIndex = prompt('what todo you want to remove?');
    console.log(todos.slice(deleteIndex));
    console.log(todos);
    console.log(`${deleteIndex} was removed!!!`);
  }
  input = prompt('what would you like to do');
}

console.log('Ok quit the app');
