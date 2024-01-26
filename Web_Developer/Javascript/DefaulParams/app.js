// function rollDie(numSide) {
//     if (numSide === undefined) {
//         numSide = 6;
//     }
//     return Math.floor(Math.random() * numSide) + 1;
// }

function rollDie(numSide = 6) {

    return Math.floor(Math.random() * numSide) + 1;
}

function greet(msg = "pop", person = "there") {
    console.log(`${msg} ${person}`)
}

// spread (표기 ...)

const nums = [13, 4, 5, 5, 3, 2, 1, 3, 52, 34]

console.log(Math.max(13, 4, 5, 5, 3, 2, 1, 3, 52, 34))

console.log(Math.max(...nums))

const str = []
str.push(..."hello")
console.log(str)

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyatt'];

const allpets = [...cats, ...dogs]

const ho = [..."hohoo"]

const feline = { legs: 4, familly: "Felide" }
const canine = { isFunny: true, familly: 'Caninar' }

const newC = { ...feline, ...canine }

const nn = [feline, canine, {
    isfu: 'false',
    jj: 3
}]

console.log(nn)