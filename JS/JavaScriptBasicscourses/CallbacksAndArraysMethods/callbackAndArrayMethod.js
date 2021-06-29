const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((num) => {
  console.log(num);
});


const clearnNames = (array)=>{
    let newArray = array.map((item)=>{
        return item.trim()
    })

    console.log(newArray)
}


clearnNames([' Tuan','Nam Anh', '  Park'])