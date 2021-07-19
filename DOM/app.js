// properties and methods
// 1. classList
// 2. getAttribute()
// 3. setAttribute()
// 4. appendChild()
// 5. append()
// 6. prepend()
// 7. removeChild()
// 8. remove()
// 9. createElement()
// 10. innerText()
// 11. textContent()
// 12. innerHTML()
// 13. value()
// 14. parentElement()
// 15. children
// 16. nextSibling()
// 17. previousSibling()
// 18. style()

let container = document.querySelector('.container')
console.log(container)

for(let i = 1; i< 350; i++){
    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    container.appendChild(img)
}