const prices = [9.99, 10., 2, 32, 55, 5.22]

const totalPrice = prices.reduce((stepTotal, element) => {
    console.log(`stepTotal : ${stepTotal}, present element : ${element}`);
    return stepTotal + element          //여기서 마지막에 더해줘야 마지막 요소까지 반영되어 반환된다.
})

console.log("전체 합계: ", totalPrice) // 전체 합 구하기


//가장 작은 값 구하기
const mininumP = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

console.log(`최솟값은: ${mininumP}`)       //최소 값 구하기

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

const hM = movie.reduce((score, element) => {
    if (element.score > score.score) {
        return element
    }
    return score
})

console.log(`most high score movie is ${hM.title} and score: ${hM.score}`)
