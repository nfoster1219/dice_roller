
let dieRolls = []
let countSum = 0
const rollButton = document.querySelector("#roll_button")
rollButton.addEventListener("click", function() {
    console.log("Roll Button Clicked")
    let rollNum = document.querySelector("#roll_dice")
    let count = 1
    let rollSum = document.querySelector(".sum_of_rolls")
    while (count <= rollNum.value) {
        let randomRolls = Math.floor(Math.random() * 6 ) + 1
        count++
        if (randomRolls === 1) {
            countSum += 1
            dieRolls.push(randomRolls)
        }
        if (randomRolls === 2) {
            countSum +=2
            dieRolls.push(randomRolls)
        }
        if (randomRolls === 3) {
            countSum += 3
            dieRolls.push(randomRolls)
        }
        if (randomRolls === 4) {
            countSum += 4
            dieRolls.push(randomRolls)
        }
        if (randomRolls === 5) {
            countSum += 5
            dieRolls.push(randomRolls)
        }
        if (randomRolls === 6) {
            countSum += 6
            dieRolls.push(randomRolls)
        }
    }
    rollSum.innerHTML = countSum
    rollNum.value =""
    console.log(countSum)
    console.log(dieRolls)
})

const showRollsButton = document.querySelector("#show_rolls")
showRollsButton.addEventListener("click", function() {
    console.log("Show Button Clicked");
    let showRolls = document.querySelector(".all_rolls")
    let listTag = "<ol>"
    
    for (let count = 0; count < dieRolls.length; count++) {
        
        if (dieRolls[count] === 1) {
            listTag += "<li>"  + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 2) {
            listTag += "<li>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 3) {
            listTag += "<li>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 4) {
            listTag += "<li>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 5) {
            listTag += "<li>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 6) {
            listTag += "<li>" + dieRolls[count] + "</li>"
        }
    }
    listTag += "</ol>"
    showRolls.innerHTML = listTag
})

const resetButton = document.querySelector("#reset_button")
resetButton.addEventListener("click", function() {
    console.log("Game Reset")
    document.querySelector(".sum_of_rolls").innerHTML = ""
    document.querySelector(".all_rolls").innerHTML = ""
    document.querySelector("#roll_dice").innerHTML = ""
    countSum = 0
    dieRolls = []
})