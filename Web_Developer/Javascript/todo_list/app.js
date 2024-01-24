const todo_list = []

let userInput = prompt("What do I do?")

while (userInput !== "quit") {
    if (userInput === "new") {
        const todo = prompt("Enter the things")
        todo_list.push(todo)
        console.log(`${todo} added to list`)
    } else if (userInput === "list") {
        console.log("***********")
        for (let i = 0; i < todo_list.length; i++) {
            console.log(`${i} : ${todo_list[i]}`)
        }
        console.log("***********")
    } else if (userInput === "delete") {
        const deleteNum = parseInt(prompt("Enter the delete Index Num:"))
        if (!Number.isNaN(deleteNum)) {             // 숫자가 아닌 인덱스를 입력하고 parseInt할 시 NaN로 나타나게 된다. 그에 대해서 NaN인지 확인
            const deleted = todo_list.splice(deleteNum, 1)       //deleteNum위치에서 1개만 삭제
            console.log(`Ok. deleted ${deleted}`)
        } else {
            console.log("undefined Number")
        }
    }
    userInput = prompt("What do I do?")
}

console.log("Quit program")