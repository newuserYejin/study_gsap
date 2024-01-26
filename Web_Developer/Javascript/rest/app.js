function sum(...nums) {
    return nums.reduce((total, num) => total + num)
}

function raceResult(gold, silver, ...everyoneElse) {
    console.log(`GOLD Medal goes to : ${gold}`)
    console.log(`Sliver Medal goes to : ${silver}`)
    console.log(`Everyone is Thanks : ${everyoneElse}`)
    console.log(gold)
    console.log(everyoneElse)
}

raceResult('yoyo', 'popop', 'so', 'jo', 'ni', 'jo')


// 배열 분해

const scores = [54352, 234, 325235, 543, 4234, 324]

const FirstScore = scores[0];
const SecondScore = scores[1];

const [GoldScore, SilverScore] = scores;

// 객체 분해

const user = {
    email: 'jsodj@gmail.com',
    password: "rosod",
    firstName: 'Harvey',
    lastName: 'Mike',
    born: 1930,
    died: 1978,
    state: 'Califonia'
}

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { email, born, died, ...things } = user;
const { lastName: lastN } = user

// 매개변수 분해

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// function fullName({ firstName, lastName }) {
//     return `${firstName} ${lastName}`
// }

const test = ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`
}

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
        score: 65
    }, {
        title: 'Sharknado',
        score: 35
    }, {
        title: 'Anything',
        score: 20
    }
]

// movie.filter((movie) => movie.score >= 90)

movie.filter(({ score }) => score >= 90).map((MovieTitle) => MovieTitle.title)

// movie.map(movie => {
//     return `${movie.title} is rated ${movie.score / 10}`
// })

movie.map(({ title: T, score: S }) => {
    return `${T} is rated ${S / 10}`
})