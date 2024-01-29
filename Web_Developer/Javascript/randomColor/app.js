// 내 코드
// const random = document.querySelector('button')
// const body = document.querySelector('body')
// const h1 = document.querySelector('h1')

// function change() {
//     const a = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     const c = Math.floor(Math.random() * 255)

//     body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
//     h1.innerText = `rgb(${a},${b},${c})`
// }

// random.addEventListener('click', change)


//여기부터 영상 코드
const random = document.querySelector('button')
const h1 = document.querySelector('h1')

random.addEventListener('click', function () {
    const newColor = randomColor()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}
