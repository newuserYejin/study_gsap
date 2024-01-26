
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERRORRRRRRR")
// }

// console.log("AFTER")

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(2))
//     } catch (e) {
//         console.log(e);
//         console.log("PLZ pass a string next time")
//     }
// }



//forEach 예제
const numbrers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function print(element) {
//     console.log(element)
// }

numbrers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})

const movie = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    }, {
        title: 'Alien',
        score: 90
    }
]

// movie.forEach(function (el) {
//     console.log(`${el["title"]} - ${el["score"]}/100`)
// })

let test = movie.forEach(function (el) {
    console.log(`${el.title} - ${el.score}/100`)
})

// for (let i of movie) {
//     console.log(`${i["title"]} - ${i["score"]}/100`)
// }

//Map 예제

const newNumbers = numbrers.map(function (num) {
    console.log(num)
    return num * 2;
})

const titles = movie.map(function (movie) {
    return movie.title;
})

// arrow function 예제

const add = (x, y) => {
    return x + y
}

const square = (num) => {
    return num ** 2
}


// const rolldie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const rolldie = () => (
    Math.floor(Math.random() * 6) + 1
)


const sum = (a, b) => a + b
