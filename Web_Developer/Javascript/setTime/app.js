
// console.log("Hello")

// setTimeout(() => {
//     console.log("Are you still there??")
// }, 3000)

// console.log("GooooodBye")

const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

setTimeout(() => clearInterval(id), 4000)
