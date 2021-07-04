function rollDie(){
    return Math.floor(Math.random() * 8);
}

///speard array litteral

const cats = 'hello'

const newArr = [...cats]

newArr[0]=newArr[0].toUpperCase()



console.log(newArr.reverse().join(''))

// spread with objects


const feline = { legs: 4, family: 'Felidae'}
const canine = { isFurry: true, family: 'Caninae'}


const newObj = {...feline,...canine}

console.log(newObj)

const dataFromForm = {
    email: 'chip.ntt@gmail.com',
    password: 'Tuan96',
    username: 'ThanhTuan96'
}

const newUser = { ...dataFromForm,id: 2345, isAdmin: false}

console.log(newUser)


 //REST looks like spread but is not

//  available inside every function
//  It's an array-like object has a length property
//  does not have array methods like push/pop 
// Contains all the arguments passed to the function
// Not available inside of arrow funcitons!!

function sum(...args){
    console.log(args)
}

function raceResults(gold,silver,...everyoneELse){
    console.log(`GOLD MEDAL GOES TO : ${gold}`)
    console.log(`SILVER MEDAL GOES TO : ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE : ${everyoneELse}`)
}

sum([1,2,3,4,5,6,6])

raceResults('Tuan','Park','Nam Anh', 'Park')